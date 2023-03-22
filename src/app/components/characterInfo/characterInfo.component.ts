import { Component, OnInit } from '@angular/core';
import { Observable, map, switchMap } from 'rxjs';
import { ICharacter } from '../characters/interfaces';
import { ActivatedRoute } from '@angular/router';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-characterInfo',
  templateUrl: './characterInfo.component.html',
  styleUrls: ['./characterInfo.component.scss'],
})
export class CharacterInfoComponent implements OnInit {
  title = 'Character Info';
  id: number;
  character: ICharacter;

  constructor(
    private route: ActivatedRoute,
    private characterService: CharactersService
  ) {}

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');

    this.characterService
      .requestCharacterById(this.id)
      .subscribe((character: ICharacter) => {
        this.character = character;
        console.log(character);
      });
  }
}
