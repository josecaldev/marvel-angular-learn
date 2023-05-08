import { createFeatureSelector, createSelector } from '@ngrx/store';
import { adapter, globalState } from './reducers';

const globalSelector = createFeatureSelector<globalState>('state');

const selectors = adapter.getSelectors(globalSelector);

export const selectAllCharacters = createSelector(
  selectors.selectAll,
  (entities) => entities
);

export const selectPagginationData = createSelector(
  globalSelector,
  (state) => state
);
