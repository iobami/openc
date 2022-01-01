import { combineReducers } from 'redux';

import { metaReducer as collections } from './entities/collections';

export default combineReducers({
  collections,
});
