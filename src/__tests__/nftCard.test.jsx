import React from 'react';
import { render } from '@testing-library/react';
import NftCard from '../components/nftCard';
import collection from '../utils/mockOne.json';
import { routes } from '../utils';

const renderNftCard = (propsOverride) => render(
  <NftCard item={collection} {...propsOverride} />,
);

describe('NftCard', () => {
  it(`renders nft card with name: ${collection.node.name} and href: ${`${routes.assets.path}/${collection.node.slug}/${collection.node.id}`}`, () => {
    const { container } = renderNftCard();

    const card = container.querySelector('.items-grid-wrapper__item');

    expect(card).toBeInTheDocument(collection.node.name);
    expect(card.getAttribute('href')).toBe(`${routes.assets.path}/${collection.node.slug}/${collection.node.id}`);
  });

  it(`renders nft card with name ${collection.node.name}`, () => {
    const { container } = renderNftCard();

    const cardName = container.querySelector('.items-grid-wrapper__item__content h5').innerHTML;

    expect(cardName).toBe(collection.node.name);
  });

  it(`renders nft card with description ${collection.node.description}`, () => {
    const { container } = renderNftCard();

    const cardDescription = container.querySelector('.items-grid-wrapper__item__content p').innerHTML;

    expect(cardDescription).toBe(collection.node.description);
  });

  it(`renders nft card with price ${collection.node.stats.totalSupply}`, () => {
    const { container } = renderNftCard();

    const price = container.querySelector('.items-grid-wrapper__item__content__bt__price').innerHTML;

    expect(price).toContain(`${collection.node.stats.totalSupply}`);
  });
});
