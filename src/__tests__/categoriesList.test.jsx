import { mount } from 'enzyme';
import React from 'react';
import { render, screen } from '@testing-library/react';
import CategoriesList from '../components/categoriesList';
import { categories as categoriesData } from '../utils';

jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/',
      pathname: '/',
      query: '',
      asPath: '',
    };
  },
}));

const mountCategoriesList = () => mount(
  <CategoriesList />,
);

const renderCategoriesList = () => render(
  <CategoriesList />,
);

describe('CategoriesList', () => {
  it('renders a list that includes the "Top" and "Sports" category', () => {
    renderCategoriesList();

    const categories = screen.getByTitle('categories list');

    expect(categories).toBeInTheDocument('top');
    expect(categories).toBeInTheDocument('sports');
  });

  it(`renders a list of equal length ${categoriesData.length}`, () => {
    const tree = mountCategoriesList();

    expect(tree.find('.categories-section__li')).toHaveLength(categoriesData.length);
  });

  it('renders a list with "Top" as active tab when router.query.tab is empty or undefined', () => {
    const { container } = renderCategoriesList();

    const activeTab = container.querySelectorAll('.categories-section__li__a--active');

    expect(activeTab.length).toBe(1);
    expect(activeTab[0]).toBeInTheDocument('top');
  });

  jest.mock('next/router', () => ({
    useRouter() {
      return {
        route: '/',
        pathname: '/',
        query: { tab: 'music' },
        asPath: '',
      };
    },
  }));

  it('renders a list with "Music" as active tab when router.query.tab is "music"', () => {
    const { container } = renderCategoriesList();

    const activeTab = container.querySelectorAll('.categories-section__li__a--active');

    expect(activeTab.length).toBe(1);
    expect(activeTab[0]).toBeInTheDocument('music');
  });
});
