import Link from 'next/link';
import React from 'react';
import { CollectionType, routes } from '../utils';
import { Coin } from './svgs';

interface IProps {
  item: CollectionType;
}

export default function NftCard(props: IProps) {
  const { item } = props;

  if (typeof item === 'string' || typeof item.node === 'number') {
    return null;
  }

  return (
    <Link href={`${routes.assets.path}/${item.node.slug}/${item.node.id}`}>
      <a className="items-grid-wrapper__item" href={`${item.node.slug}/${item.node.id}`}>
        <img className="items-grid-wrapper__item__img" height="100%" width="100%" src={item.node.banner} alt="" />

        <div className="items-grid-wrapper__item__content">
          <div className="flex justify-center items-center mb-2">
            <h5 className="items-grid-wrapper__item__content__h5 font-bold">{item.node.name || 'Unknown'}</h5>

            <img src="/imgs/verified.png" alt="verified" height={18} width={18} />
          </div>

          <p className="items-grid-wrapper__item__content__p">{item.node?.description || ''}</p>

          <div className="items-grid-wrapper__item__content__bt flex justify-end">
            <span className="items-grid-wrapper__item__content__bt__price flex items-center">
              <Coin />

              {item.node?.stats.totalSupply || 0}
            </span>
          </div>
        </div>
      </a>
    </Link>
  );
}
