import axios from 'axios';

import tmdbClient from '../tmdbClient';
import {  AvatarResponse } from '../../types/avatar';

import {
    Get_AVATARS,
    UPDATE_AVATAR,
    FETCH_WATCHED,
    SHALLOW_DETAIL,
    ADD_TO_WATCHED,
    DELETE_USER,
} from '../Urls';
import { SERVER_URI } from '../../config';
import { ContactFormInterface } from '../../types/requestData';

export const fetchAvatars = () =>
  axios.get<AvatarResponse>(Get_AVATARS);


export const updateAvatar = (avatarId: string | number) =>
    new Promise((resolve, reject) => {
        (async () => {
            try {
                const token = localStorage.movielust_user;
                const res = await axios.put(
                    UPDATE_AVATAR,
                    {avatar:avatarId},
                    { headers:{ Authorization: `Bearer ${token}`}}
                );
                
                resolve(res.data);
            } catch {
                reject();
            }
        })();
    });    

export const fetchWatched = () =>
    new Promise((resolve, reject) => {
        (async () => {
            const token = localStorage.movielust_user;
            if (token) {
                const res = await axios.get(FETCH_WATCHED, {
                    headers: { Authorization: `Bearer ${token}`},
                });

                const rawList = res.data;
            
 
                let watchedList = await Promise.all(
                    rawList.map((content: any) =>
                        tmdbClient.get(SHALLOW_DETAIL(content.content_id, content.type))
                    )
                );


                watchedList = watchedList.map((content, index) => {
                    const zip = { ...content.data, media_type: rawList[index].type };
                    if (rawList[index].type === 'tv') {
                        zip.season_number = rawList[index].season;
                        zip.episode_number = rawList[index].episode;
                    }
                    return zip;
                });
                resolve(watchedList);
            } else reject();
        })();
    });

export const addWatched = (data: {
    content_id: string;
    type: string;
    timeStamp: Date;
    season?: number;
    episode?: number;
}) =>
    new Promise((resolve, reject) => {
        (async () => {
            try {
                const token = localStorage.movielust_user;
                if (token) {
                    const res = await axios.post(ADD_TO_WATCHED,data,{
                        
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    });
                   
                    if (res.status === 201) resolve('ok');
                    else reject();
                }
                reject();
            } catch {
                reject();
            }
        })();
    });

export const deleteUser = (id: string) =>
    new Promise((resolve, reject) => {
        (async () => {
            try {
                const token = localStorage.getItem('movielust_user');
                if (token) {
                    const res = await axios.delete(DELETE_USER, {
                        data: {
                            user_id: id
                          },
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                        
                    });
                    resolve(res);
                } else {
                    reject();
                }
            } catch {
                reject();
            }
        })();
    });

export const submitContactForm = (data: ContactFormInterface) =>
    axios.post(`${SERVER_URI}/submit-contact-us`, data);
