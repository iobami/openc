/* eslint-disable no-underscore-dangle */
import { useMemo } from 'react';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createEpicMiddleware } from 'redux-observable';

import reducers from './reducers';
import reducersMeta from './reducersMeta';

const composeEnhancers = composeWithDevTools({
  // Specify name here, actionsBlacklist, actionsCreators and other options if needed
});

const reducer = combineReducers({
  entities: reducers,
  entitiesMeta: reducersMeta,
});

export const epicMiddleware = createEpicMiddleware();

export function configureStore(preloadedState: any) {
  return createStore(reducer, preloadedState, composeEnhancers(applyMiddleware(epicMiddleware)));
}
let store: any;
export const initializeStore = (preloadedState: any) => {
  let _store = store ?? configureStore(preloadedState);

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    _store = configureStore({
      ...store.getState(),
      ...preloadedState,
    });
    // Reset the current store
    store = undefined;
  }

  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return _store;
  // Create the store once in the client
  if (!store) store = _store;

  return _store;
};

export function useStore(initialState: any) {
  const newStore = useMemo(() => initializeStore(initialState), [initialState]);
  return newStore;
}
