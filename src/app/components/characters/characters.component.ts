import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ICharacter } from './interfaces';
import { CharactersService } from 'src/app/services/characters.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
})
export class CharactersComponent implements OnInit {
  title = 'Characters';
  characters: ICharacter[] = [];

  constructor(private chractersService: CharactersService) {}

  ngOnInit(): void {
    this.chractersService
      .getCharacters()
      .pipe(
        map((response: any) => response.data.results),
        map(this.mapCharacter)
      )
      .subscribe((characters: ICharacter[]) => {
        this.characters = characters;
      });
  }

  renderCharacters = (characters: ICharacter[]) => {
    const charsGrid = document.getElementById('grid');
    characters.forEach((character) => {
      const charComp = document.createElement('app-character');
      // charComp.setAttribute('id', character['id']);
    });
  };

  mapCharacter = (results: any) => {
    return results.map((char: any) => ({
      ...char,
      thumbnail: `${char.thumbnail.path}.${char.thumbnail.extension}`,
    }));
  };
}
