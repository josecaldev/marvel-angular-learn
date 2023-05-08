import { Component, Input } from '@angular/core';
import { ICharacter } from '../../model/interfaces';
import { Router } from '@angular/router';
import { Character } from 'src/app/model/character';
@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss'],
})
export class CharacterComponent {
  @Input() character: Character;

  constructor(private router: Router) {}

  goToDetail() {
    this.router.navigateByUrl(`characters/${this.character.id}`);
  }
}
