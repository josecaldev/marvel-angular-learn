import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-searchBar',
  templateUrl: './searchBar.component.html',
  styleUrls: ['./searchBar.component.scss'],
})
export class SearchBarComponent {
  private debounceTimer?: NodeJS.Timeout;

  constructor() {}

  onSearchFieldChanged(query: string = '') {
    if (this.debounceTimer) clearTimeout(this.debounceTimer);

    this.debounceTimer = setTimeout(() => {
      this.queryChanged.emit(query);
    }, 500);
  }

  @Output() queryChanged = new EventEmitter<string>();
}
