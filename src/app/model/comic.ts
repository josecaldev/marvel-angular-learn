export interface ComicUri {
  resourceURI: string;
  name: string;
}

export interface Comic extends ComicUri {
  id: string;
  title: string;
  description: string;
  pageCount: string;
  thumbnail: string;
  resourceURI: string;
  characterId: number;
}
