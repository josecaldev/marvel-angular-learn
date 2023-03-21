import { Component, EventEmitter, Output } from '@angular/core';
import { CharactersService } from 'src/app/services/characters.service';
import { ICharacter } from '../characters/interfaces';

@Component({
  selector: 'app-searchBar',
  templateUrl: './searchBar.component.html',
  styleUrls: ['./searchBar.component.scss'],
})
export class SearchBarComponent {
  private debounceTimer?: NodeJS.Timeout;
  requestResult;

  constructor() {}

  onSearchFieldChanged(query: string = '') {
    if (this.debounceTimer) clearTimeout(this.debounceTimer);

    this.debounceTimer = setTimeout(() => {
      this.queryChanged.emit(query);
    }, 500);
  }

  @Output() queryChanged = new EventEmitter<string>();
}
