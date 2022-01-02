import collections from './mock.json';

export { getTheme, toggleTheme } from './theme';
export { default as routes } from './routes';

export const categories = Object.keys(collections);

const [collectionItem] = collections.top;
export type CollectionType = ReturnType<() => typeof collectionItem>;

export const allCollections: Array<CollectionType> = (() => {
  const newCollections: Array<CollectionType> = [];
  const arrayOfCollections = Object.values(collections);

  arrayOfCollections.forEach((item) => newCollections.push(...item));

  return newCollections;
})();
