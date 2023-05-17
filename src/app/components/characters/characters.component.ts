import { Component, OnInit, OnDestroy } from '@angular/core';
import { ICharacter } from '../../model/interfaces';
import { RequestService } from 'src/app/services/request.service';
import { map, Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { loadAllCharacters } from 'src/app/state/character.actions';
import { GlobalState } from 'src/app/state/reducers';
import {
  selectAllCharacters,
  selectPagginationData,
} from 'src/app/state/character.selectors';
import { Character } from 'src/app/model/character';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
})
export class CharactersComponent implements OnInit, OnDestroy {
  characters$: Observable<Character[]>;

  offset: number;
  count: number;
  dataSize: number;

  limit = 100;
  page = 0;

  searchQuery = '';

  constructor(
    private requestService: RequestService,
    private store: Store<GlobalState>
  ) {}

  ngOnInit(): void {
    this.pageResult('start');
    this.characters$ = this.store.select(selectAllCharacters);

    this.store.select(selectPagginationData).subscribe((state) => {
      this.offset = state.offset;
      this.count = state.count;
      this.dataSize = state.dataSize;
    });
  }

  ngOnDestroy(): void {}

  doCharactersRequest(offset, limit) {
    this.store.dispatch(
      loadAllCharacters({ offset, limit, query: this.searchQuery })
    );
  }

  pageResult(direction: string) {
    switch (direction) {
      case 'start':
        this.doCharactersRequest(0, this.limit);
        break;

      case 'prev':
        if (this.getOffset() !== 0) {
          this.page -= 1;
          this.doCharactersRequest(this.getOffset(), this.limit);
        } else {
          //change button style to evidence disabled
        }
        break;

      case 'next':
        if (this.getOffset() + this.limit < this.dataSize) {
          this.page += 1;
          this.doCharactersRequest(this.getOffset(), this.limit);
        } else {
          //change button style to evidence disabled
        }
        break;
    }
  }

  recieveQuery(query: string) {
    this.searchQuery = query;
    this.pageResult('start');
  }

  getOffset() {
    return this.page * this.limit;
  }
}
