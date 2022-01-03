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

export function getParseFloat(value: any) {
  if (Number.isNaN(Number.parseFloat(value))) {
    return 0;
  }

  return parseFloat(value);
}

export function toNumeral(value: any) {
  const parsedValue = getParseFloat(value);

  const number = parsedValue.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  return number;
}

export function upcomingFeature() {
  return alert('Sorry, this feature is cooking, see you soon :)');
}
