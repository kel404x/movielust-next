import Link from 'next/link';
import Image from "next/legacy/image";
import { detailLink } from '../../utils';

import styles from './contentItem.module.scss';

interface WatchlistItemProps {
  id: number;
  title: string;
  overview: string;
  posterPath: string;
  remove: Function;
  type: string;
}

function WatchlistItem({
  id,
  title,
  overview,
  type,
  posterPath,
  remove,
}: WatchlistItemProps) {
  return (
    <li
      className={styles.Item}
      // initial={{ x: 30, opacity: 0 }}
      // whileInView={{ x: 0, opacity: 1 }}
      // exit={{ x: -10, opacity: 0 }}
      // transition={{ duration: 0.3 }}
    >
      <Image
        className={styles.Thumbnail}
        width="100px"
        height="150px"
        key={id}
        src={`https://image.tmdb.org/t/p/w154/${posterPath}`}
        alt={title}
        unoptimized
      />
      <div className={styles.Detail}>
        <div className={styles.Titlebar}>
          <div className={styles.Title}>{title} </div>
          <div
            className={styles.Plus}
            role="presentation"
            onClick={() => remove(id!)}
          >
            +
          </div>
        </div>
        <p className={styles.Overview}>
          {' '}
          {overview === ''
            ? ''
            : `${overview!.split(' ').splice(0, 25).join(' ')} ..`}
        </p>
        <Link href={detailLink(type, id, title)}>
          <a className={styles.ViewButton}>View</a>
        </Link>
      </div>
    </li>
  );
}

export default WatchlistItem;
