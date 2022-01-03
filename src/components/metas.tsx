import React from 'react';
import Head from 'next/head';
import metaData from '../utils/metaData.json';

interface IProps {
  children?: any;
  data: {
    description?: string;
    image?: string;
    keywords?: string;
    siteName?: string;
    title?: string;
    url?: string;

    facebook?: {
      description?: string;
      image?: string;
      siteName?: string;
      title?: string;
      url?: string;
    };

    twitter?: {
      description?: string;
      image?: string;
      siteName?: string;
      title?: string;
      url?: string;
    };
  }
}

export default function Metas(props: IProps) {
  const { children, data } = props;

  return (
    <Head>
      <title>{data.title}</title>

      <meta name="title" content={data.title || metaData.title} />
      <meta name="description" content={data.description || metaData.description} key="description" />

      <meta name="keywords" content={data.keywords || metaData.keywords} />

      <meta name="robots" content="index, follow" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />

      {/* Google / Search Engine Tags */}
      <meta itemProp="name" content="" />
      <meta itemProp="description" content={data.description} />
      <meta itemProp="image" content={data.image} />
      {/* Google / Search Engine Tags Ends */}

      {/* Facebook Meta Tags */}
      <meta property="og:type" content="website" key="facebook type" />
      <meta property="og:title" content={data?.facebook?.title || data.title || metaData.title} key="facebook title" />
      <meta property="og:url" content={data?.facebook?.url || data.url || metaData.url} key="facebook url" />
      <meta
        property="og:description"
        content={data?.facebook?.description || data.description || metaData.description}
        key="facebook description"
      />
      <meta property="og:image" content={data?.facebook?.image || data.image || metaData.image} key="facebook image" />
      <meta property="og:site_name" content={data?.facebook?.siteName || data.siteName || metaData.siteName} />
      {/* Facebook Meta Tags Ends */}

      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" key="twitter card" />
      <meta name="twitter:title" content={data?.facebook?.title || data.title || metaData.title} key="twitter title" />
      <meta
        name="twitter:description"
        content={data?.twitter?.description || data.description || metaData.description}
        key="twitter description"
      />
      <meta name="twitter:image" content={data?.twitter?.image || data.image || metaData.image} key="twitter image" />

      <meta name="twitter:site" content="@medixab_ng" />
      <meta name="twitter:creator" content="@medixab_ng" />
      {/* Twitter Meta Tags Ends */}

      <meta name="geo.placename" content={metaData.geo.placeName} />
      <meta name="geo.position" content={metaData.geo.position} />
      <meta name="geo.region" content={metaData.geo.region} />

      {children}
    </Head>
  );
}
