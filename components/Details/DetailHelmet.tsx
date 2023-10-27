import Head from 'next/head';
import { image } from '../../helpers/Urls';

import { CommonData } from './DetailTypes';

interface DetailHelmetProps {
  commonData: CommonData | undefined;
  link: string;
}

function DetailHelmet({ commonData, link }: DetailHelmetProps) {
  return (
    <Head>
      <title>{`${commonData?.title} - Movielust`}</title>
      <meta
        name="description"
        content={commonData?.overview}
        key="description"
      />
      <meta
        property="og:title"
        name="og:title"
        content={`${commonData?.title} - Movielust`}
      />
      <meta property="og:description" content={commonData?.overview} />
      <meta property="og:site_name" content="Movielust" />
      <meta
        property="og:url"
        content={`https://movie-lust.vercel.app/${link}`}
      />
      <meta
        property="og:image"
        content={image(200, commonData?.poster || '')}
      />
      <meta name="twitter:title" content={`${commonData?.title} - Movielust`} />
      <meta name="twitter:description" content={commonData?.overview} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@movielust_in" />
      <meta name="twitter:url" content="https://www.movie-lust.vercel.app" />
      <meta
        name="twitter:image"
        content={image(780, commonData?.backdrop || commonData?.poster || '')}
      />
    </Head>
  );
}

export default DetailHelmet;
