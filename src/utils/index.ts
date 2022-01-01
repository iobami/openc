import collections from './mock.json';

export { getTheme, toggleTheme } from './theme';

export const categories = Object.keys(collections);

const [collectionItem] = collections.top;
export type CollectionType = ReturnType<() => typeof collectionItem>;
