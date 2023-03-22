import { Component, Input } from '@angular/core';
import { ICharacter } from '../characters/interfaces';
import { Router } from '@angular/router';
@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss'],
})
export class CharacterComponent {
  @Input() character: ICharacter;

  constructor(private router: Router) {}

  goToDetail() {
    this.router.navigateByUrl(`characters/${this.character.id}`);
  }
}
