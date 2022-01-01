import { handleActions } from 'redux-actions';
import { createSelector } from 'reselect';
import { produce } from 'immer';
import { combineEpics } from 'redux-observable';
import {
  ofType, catchError, switchMap, of,
} from 'storejars-react-toolkit/dist/operators';
import {
  Actions, entitiesMeta, entities, metas,
} from 'storejars-react-toolkit';

import namespaces from '../namespaces';
import {
  api, handleErrors, handleSuccess,
} from '../helpers';

export const action = new Actions(namespaces.COLLECTIONS);

export const selector = createSelector(entities, (state) => state.collections);
export const metaSelector = createSelector(entitiesMeta, (state) => state.collections);

export const reducer = handleActions(
  {
    [action.read.success]:
      (state: any, action$: { payload: any }) => produce(state, (draft: any) => {
        const newDraft = draft;
        newDraft.data = action$.payload;
        return newDraft;
      }),
    [action.readOne.success]:
      (state: any, action$: { payload: any }) => produce(state, (draft: any) => {
        const newDraft = draft;
        newDraft.item = action$.payload;
        return newDraft;
      }),
  },
  { data: [], item: {} },
);

export const metaReducer = metas(action);

function readEpic(action$: any) {
  return action$.pipe(
    ofType(action.read.loading),
    switchMap(({ payload }) => api.get(`/collections${payload.query || ''}`).pipe(
      switchMap((data) => {
        const response = handleSuccess(data.response);

        return of(action.readAction(response.collections || []).success);
      }),
      catchError((response) => {
        const error = handleErrors(response);
        return of(action.readAction(error).error);
      }),
    )),
  );
}

function readOneEpic(action$: any) {
  return action$.pipe(
    ofType(action.readOne.loading),
    switchMap(({ payload }) => api.get(`/collections${payload.query || ''}`).pipe(
      switchMap((data) => {
        const response = handleSuccess(data.response);

        return of(action.readOneAction(response.collection || {}).success);
      }),
      catchError((response) => {
        const error = handleErrors(response);
        return of(action.readOneAction(error).error);
      }),
    )),
  );
}

export const epic = combineEpics(readEpic, readOneEpic);
