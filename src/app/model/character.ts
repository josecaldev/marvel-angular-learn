export interface Character {
  id: string;
  name: string;
  description: string;
  resourceURI: string;
  thumbnail: string;
  comicsCount: number;
}

export interface CustomCharacter extends Character {
  favorite: boolean;
}
