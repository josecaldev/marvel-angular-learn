import { Action, createReducer, on, State } from '@ngrx/store';
import { CharacterActions } from '../action-types';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Character } from 'src/app/model/character';

export interface GlobalState extends EntityState<Character> {
  offset: number;
  count: number;
  dataSize: number;
  selectedCharacter: number;
  loading: boolean;
}

export const adapter: EntityAdapter<Character> =
  createEntityAdapter<Character>();

export const initialAppState: GlobalState = adapter.getInitialState({
  offset: 0,
  count: 0,
  dataSize: 0,
  selectedCharacter: undefined,
  loading: false,
});

export const characterReducer = createReducer(
  initialAppState,

  on(CharacterActions.loadAllCharacters, (state, action) => {
    return adapter.setAll(Object.values(state.entities), {
      ...state,
      loading: true,
    });
  }),

  on(CharacterActions.allCharactersLoaded, (state, action) => {
    return adapter.setAll(action.characters, {
      ...state,
      offset: action.offset,
      count: action.count,
      dataSize: action.dataSize,
      selectedCharacter: null,
      loading: false,
    });
  }),

  on(CharacterActions.loadCharacter, (state, action) => {
    return adapter.setAll(Object.values(state.entities), {
      ...state,
      selectedCharacter: action.id,
    });
  })

  //TODO Handle error on Characters Loading and stop loading variable
);

export function reducer(state: GlobalState | undefined, action: Action) {
  return characterReducer(state, action);
}
