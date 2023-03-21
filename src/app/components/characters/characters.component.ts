import { Component, OnInit, OnDestroy } from '@angular/core';
import { ICharacter } from './interfaces';
import { CharactersService } from 'src/app/services/characters.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
})
export class CharactersComponent implements OnInit, OnDestroy {
  characters: ICharacter[] = [];

  offset: number;
  count: number;
  dataSize: number;

  limit = 100;
  page = 0;

  searchQuery = '';

  constructor(private charactersService: CharactersService) {}

  ngOnInit(): void {
    this.pageResult('start');
  }

  ngOnDestroy(): void {}

  doCharactersRequest(offset, limit) {
    this.charactersService
      .requestCharacters(offset, limit, this.searchQuery)
      .pipe(
        map((data: any) => {
          this.count = data.count;
          this.offset = data.offset;
          this.dataSize = data.total;

          return this.mapCharacter(data.results);
        })
      )
      .subscribe((characters: ICharacter[]) => {
        this.characters = characters;
      });
  }

  pageResult(direction = 'start') {
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
    console.log('Recieved: ' + query);
    if (query) {
      this.pageResult('start');
    }
  }

  mapCharacter = (results: any) => {
    return results.map((char: any) => ({
      ...char,
      thumbnail: `${char.thumbnail.path}.${char.thumbnail.extension}`,
    }));
  };

  getOffset() {
    return this.page * this.limit;
  }
}
