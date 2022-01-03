import type { NextApiRequest } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { CategoriesList, NftCard } from '../components';
import { action, selector } from '../redux/entities/collections';
import { CollectionType } from '../utils';

interface IProps {
  query?: { [key: string]: string };
}

const Home = (props: IProps) => {
  const { query } = props;

  const dispatch = useDispatch();
  const router = useRouter();

  const { data } = useSelector((state: any) => selector(state));

  useEffect(() => {
    dispatch(action.readAction({ query: `?category=${router.query.tab || query?.tab || 'top'}` }).loading);
  }, [dispatch, router.query]);

  return (
    <Fragment>
      <Head>
        <title>OpenSea clone</title>
        <meta name="description" content="nft market place" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="market-section">
        <h1 className="market-section__h1-title text-center text-3xl lg:text-5xl 2xl:text-7xl font-bold mb-10">
          Market Place
        </h1>

        <CategoriesList />

        <div className="items-grid-wrapper">
          {data.map((item: CollectionType) => {
            if (typeof item === 'object' && typeof item.node === 'object') {
              return <NftCard item={item} key={item.node.id} />;
            }

            return null;
          })}
        </div>
      </section>
    </Fragment>
  );
};

export default Home;

export async function getServerSideProps({ query }: NextApiRequest) {
  return {
    props: {
      query,
    },
  };
}
