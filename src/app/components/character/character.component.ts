import { Component, Input } from '@angular/core';
import { ICharacter } from '../../model/interfaces';
import { Router } from '@angular/router';
import { Character } from 'src/app/model/character';
import { Store } from '@ngrx/store';
import { GlobalState } from 'src/app/state/reducers';
import { loadCharacter } from 'src/app/state/character.actions';
@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss'],
})
export class CharacterComponent {
  @Input() character: Character;

  constructor(private router: Router, private store: Store<GlobalState>) {}

  goToDetail() {
    this.store.dispatch(loadCharacter({ id: Number(this.character.id) }));
    this.router.navigateByUrl(`characters/${this.character.id}`);
  }
}
