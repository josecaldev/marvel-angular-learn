import { createAction, props } from '@ngrx/store';
import { Character } from '../model/character';

export const loadAllCharacters = createAction(
  '[Characters] Load Characters',
  props<{
    offset: number;
    limit: number;
    query: string;
  }>()
);

export const allCharactersLoaded = createAction(
  '[Characters] Load Characters Succesfully',
  props<{
    offset: number;
    count: number;
    dataSize: number;
    characters: Character[];
  }>()
);

export const loadAllCharactersFail = createAction(
  '[Characters] Load Characters Failed'
);

export const loadCharacter = createAction(
  '[CharacterDetail] Load Character detail',
  props<{
    id: number;
  }>()
);
