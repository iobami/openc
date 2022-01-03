import { NextApiRequest } from 'next';
import React, { useContext } from 'react';
import {
  Coin, CreditCard, Eye, Tag,
} from '../../components';
import { AppContext, AppStateType } from '../../context';
import { CollectionType, toNumeral, upcomingFeature } from '../../utils';
import config from '../../utils/config';

interface IProps {
  item: CollectionType;
}

const Title = ({ mobile, node }: { mobile?: boolean; node: { name: string; slug: string } }) => (
  <>
    <div className={`${mobile ? 'flex lg:hidden' : 'hidden lg:flex'} justify-between items-center mb-3`}>
      <h5 className="asset-details-section__owner text-lg lg:text-xl xl:text-2xl">{node.slug.replace(/-/g, ' ')}</h5>
    </div>

    <h2 className={`${mobile ? 'block lg:hidden' : 'hidden lg:block'} asset-details-section__title text-3xl md:text-4xl font-semibold mb-8`}>{node.name}</h2>
  </>
);

export default function AssetDetails({ item }: IProps) {
  const [{ theme }] = useContext<AppStateType>(AppContext);

  if (typeof item === 'string' || typeof item.node === 'number') {
    return null;
  }

  const hasOwner = !!item.node?.owner?.address;

  return (
    <section className={`asset-details-section ${theme}`}>
      <div className="asset-details-section__wrapper pt-20 lg:pt-3 lg:flex flex-row">
        <div className="lg:w-5/12 px-3  mb-8">
          <Title mobile node={item.node} />

          <img className="asset-details-section__asset-img mb-3" height={500} width="100%" src={item.node.banner} alt="" />

          <div className="asset-details-section__card rt-none p-0">
            <div className="asset-details-section__card__header">
              <h5 className="text-xl font-bold">Details</h5>
            </div>

            <div className="asset-details-section__card__body">
              <div className="flex justify-between mb-2">
                <p>Contract Address</p>

                {hasOwner && item.node.owner?.address && (
                  <a href={`${config.ETHERSCAN_URL}/${item.node.owner.address}`} target="_blank" rel="noopener noreferrer">
                    {item.node.owner.address.substring(0, 6)}
                    ...
                    {item.node.owner.address.substring(item.node.owner.address.length - 4)}
                  </a>
                )}
              </div>

              <div className="flex justify-between mb-2">
                <p>Token ID</p>

                <span>{item.node.id.substring(0, 4)}</span>
              </div>

              <div className="flex justify-between mb-2">
                <p>Token Standard</p>

                <span>ERC-721</span>
              </div>

              <div className="flex justify-between">
                <p>Blockchain</p>

                <span>Ethereum</span>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:w-7/12 px-3 mb-8">
          <Title node={item.node} />

          <div className="flex items-center lg:text-xl mb-4">
            {hasOwner && item.node.owner?.address && (
              <p className={`asset-details-section__owner-hash ${theme} mr-4`}>
                Owned by
                {' '}
                <a href={`${config.OPENSEA_URL}/${item.node.owner.address}`} target="_blank" rel="noopener noreferrer">{item.node.owner.address.substring(2, 8)}</a>
              </p>
            )}

            <p className={`asset-details-section__owner-hash ${theme} flex items-center`}>
              <Eye className="mr-2" />

              {Math.ceil(item.node.stats.totalSupply * 0.12)}
              {' '}
              views
            </p>
          </div>

          <div className="asset-details-section__card rb-none mb-3">
            <div className="asset-details-section__card__body">
              <p className="mb-3">Current price</p>

              <div className="asset-details-section__card__price flex items-center mb-3">
                <span className="asset-details-section__card__unit text-2xl font-semibold flex items-center mr-3">
                  <Coin />

                  {item.node?.stats.totalSupply || 0}
                </span>

                <span className="amount">
                  (
                  {toNumeral(item.node?.stats.totalSupply * 0.044)}
                  )
                </span>
              </div>

              <div className={`asset-details-section__card__actions lg:flex items-center ${theme}`}>
                <button onClick={upcomingFeature} type="button" className="asset-details-section__card__button items-center w-full lg:w-52 lg:mr-3 mb-3 lg:mb-0">
                  <CreditCard className="mr-3" />

                  Buy now
                </button>

                <button onClick={upcomingFeature} type="button" className="asset-details-section__card__button asset-details-section__card__button--offer items-center w-full lg:w-52 lg:mr-3">
                  <Tag className="mr-3" />

                  Make offer
                </button>
              </div>
            </div>
          </div>

          <div className="asset-details-section__card rt-none p-0">
            <div className="asset-details-section__card__header">
              <h5 className="text-xl font-bold">Description</h5>
            </div>

            <div className="asset-details-section__card__body">
              {hasOwner && (
                <div className="flex mb-2">
                  <span className="mr-2">Created by</span>

                  <a className="flex justify-center items-center" href={`${config.ETHERSCAN_URL}/${item.node.owner?.address}`} target="_blank" rel="noopener noreferrer">
                    {item.node.owner?.user?.publicUsername}

                    <img className="ml-2" src="/imgs/verified.png" alt="verified" height={18} width={18} />
                  </a>
                </div>
              )}

              <div className="flex justify-between mb-2">
                <p>{item.node.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export async function getServerSideProps({ query }: NextApiRequest) {
  let item = {};

  try {
    if (Array.isArray(query.slugs)) {
      const [, id] = query.slugs;

      const { data: { collection } } = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/collections/${id}`)
        .then((response) => response.json());

      item = collection;
    }
  } catch (error) {
    item = {};
  }

  return {
    props: {
      item,
      query,
    },
  };
}
