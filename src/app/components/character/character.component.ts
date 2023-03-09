import { Component, Input } from '@angular/core';
import { ICharacter } from '../characters/interfaces';
@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss'],
})
export class CharacterComponent {
  @Input() chara: ICharacter;
}
