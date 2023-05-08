import { Injectable } from '@angular/core';
import { RequestService } from '../services/request.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CharacterActions } from './action-types';
import { catchError, map, mergeMap, of, tap } from 'rxjs';

@Injectable()
export class CharactersEffects {
  loadAllCharacters$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CharacterActions.loadAllCharacters),
      mergeMap((action) =>
        this.requestService
          .requestCharacters(action.offset, action.limit, action.query)
          .pipe(
            map(
              (data: {
                offset: number;
                count: number;
                total: number;
                results: any;
              }) =>
                CharacterActions.allCharactersLoaded({
                  offset: data.offset,
                  count: data.count,
                  dataSize: data.total,
                  characters: this.mapCharacter(data.results),
                })
            ),
            catchError(() => of(CharacterActions.loadAllCharactersFail()))
          )
      )
    )
  );

  mapCharacter = (results: any) => {
    return results.map((char: any) => ({
      ...char,
      thumbnail: `${char.thumbnail.path}.${char.thumbnail.extension}`,
    }));
  };

  constructor(
    private actions$: Actions,
    private requestService: RequestService
  ) {}
}
