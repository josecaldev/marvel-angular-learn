import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { isLoading } from '../state/character.selectors';
import { GlobalState } from '../state/reducers';

@Component({
  selector: 'marv-spinner',
  template: `
    <div class="overlay" *ngIf="isLoading$ | async">
      <div class="loadingio-spinner-dual-ball-gg10fkshoyq">
        <div class="ldio-vcv8ic9a2pd">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./spinner.component.scss'],
})
export class SpinnerComponent {
  isLoading$ = this.store.pipe(select(isLoading));

  constructor(private store: Store<GlobalState>) {}
}
