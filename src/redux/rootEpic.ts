import { combineEpics } from 'redux-observable';

import { epic as collections } from './entities/collections';

export default combineEpics(
  collections,
);
