import { createFeatureSelector, createSelector } from '@ngrx/store';
import { adapter, GlobalState } from './reducers';

const globalSelector = createFeatureSelector<GlobalState>('state');

const selectors = adapter.getSelectors(globalSelector);

export const selectAllCharacters = createSelector(
  selectors.selectAll,
  (entities) => entities
);

export const selectPagginationData = createSelector(
  globalSelector,
  (state) => state
);

export const isLoading = createSelector(
  globalSelector,
  (state) => state.loading
);
