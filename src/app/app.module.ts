import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { CharactersComponent } from './components/characters/characters.component';
import { CharacterInfoComponent } from './components/characterInfo/characterInfo.component';
import { SearchBarComponent } from './components/searchBar/searchBar.component';
import { CharacterComponent } from './components/character/character.component';
import { FormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ComicComponent } from './components/comic/comic.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EntityMetadataMap } from '@ngrx/data';
import { EffectsModule } from '@ngrx/effects';
import { CharactersEffects } from './state/character.effects';

import * as fromCharacters from './state/reducers/index';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'characters',
    component: CharactersComponent,
  },
  { path: 'characters/:id', component: CharacterInfoComponent },
  { path: '**', component: PageNotFoundComponent },
];

const marvEntityMetadata: EntityMetadataMap = {
  Character: {},
  Comic: {},
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CharacterComponent,
    CharactersComponent,
    CharacterInfoComponent,
    SearchBarComponent,
    ComicComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule,
    StoreModule.forRoot({ state: fromCharacters.reducer }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    EffectsModule.forRoot([CharactersEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
