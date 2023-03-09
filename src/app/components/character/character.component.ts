import { Component } from '@angular/core';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss'],
})
export class CharacterComponent {
  title = 'Character';
  id: String;
  name: String;
  description: String;
  thumbnail: String;
  resourceURI: String;
  comics: {};

  constructor(
    id: String,
    name: String,
    description: String,
    thumbnail: String,
    resourceURI: String,
    comics: Object
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.thumbnail = thumbnail;
    this.resourceURI = resourceURI;
    this.comics = comics;
  }
}
