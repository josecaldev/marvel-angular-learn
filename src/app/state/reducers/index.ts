import {
  Action,
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
  State,
} from '@ngrx/store';
import { CharacterActions } from '../action-types';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Character } from 'src/app/model/character';

export const adapter: EntityAdapter<Character> =
  createEntityAdapter<Character>();

export interface globalState extends EntityState<Character> {
  offset: number;
  count: number;
  dataSize: number;
  selectedCharacter: number;
}

export const initialAppState: globalState = adapter.getInitialState({
  offset: 0,
  count: 0,
  dataSize: 0,
  selectedCharacter: undefined,
});

export const characterReducer = createReducer(
  initialAppState,

  on(CharacterActions.allCharactersLoaded, (state, action) => {
    return adapter.setAll(action.characters, {
      ...state,
      offset: action.offset,
      count: action.count,
      dataSize: action.dataSize,
      selectedCharacter: null,
    });
  })
);

export function reducer(state: globalState | undefined, action: Action) {
  return characterReducer(state, action);
}
