import { combineReducers } from 'redux';

import { reducer as collections } from './entities/collections';

export default combineReducers({
  collections,
});
