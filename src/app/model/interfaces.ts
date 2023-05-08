import { Character } from './character';
import { EntityState } from '@ngrx/entity';

export interface ICharacter {
  id: string;
  name: string;
  description: string;
  resourceURI: string;
  thumbnail: string;
  comics: IComicUri[];
}

export interface IComicUri {
  resourceURI: string;
  name: string;
}

export interface IComic extends IComicUri {
  id: string;
  title: string;
  description: string;
  pageCount: string;
  thumbnail: string;
  resourceURI: string;
}
