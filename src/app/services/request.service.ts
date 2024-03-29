import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, first } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RequestService {
  timestamp: string = 'ts=1678284996122';
  characterUrl: string = 'https://gateway.marvel.com:443/v1/public/characters';

  //Outlook
  // apikey: string = 'apikey=85929680fcce1350eb06b0567904d5e0';
  // hash = 'hash=53ab99406f9104a94e63a85ef2c0e8e8';

  // Gmail
  apikey: string = 'apikey=44e19714d10f1253e17c3c02936426b9';
  hash = 'hash=1b1d63e02c0afa1660694369885e1add';

  constructor(private http: HttpClient) {}

  requestCharacters(offset, limit, query = '') {
    let requestUrl = `${this.characterUrl}?${this.timestamp}&${this.apikey}&${this.hash}&limit=${limit}&offset=${offset}`;
    let nameParam = `&nameStartsWith=${query}`;
    if (query) {
      requestUrl = requestUrl + nameParam;
    }

    return this.http.get(requestUrl).pipe(
      map((response: any) => {
        return response.data;
      })
    );
  }

  requestCharacterById(id: number) {
    return this.http
      .get(
        `${this.characterUrl}/${id}?${this.timestamp}&${this.apikey}&${this.hash}`
      )
      .pipe(
        map((response: any) => {
          return response.data.results;
        }),
        map(this.mapCharacter)
      );
  }

  mapCharacter = (results: any) => {
    return results.map((char: any) => ({
      ...char,
      thumbnail: `${char.thumbnail.path}.${char.thumbnail.extension}`,
      comics: [...char.comics.items],
    }))[0];
  };

  requestComicByUri(resourceURI: string) {
    return this.http
      .get(`${resourceURI}?${this.timestamp}&${this.apikey}&${this.hash}`)
      .pipe(
        map((response: any) => {
          console.log(`response: `, response);
          return response.data.results;
        }),
        map((comicRes: any) => {
          let comic = comicRes[0];
          return {
            ...comic,
            thumbnail: `${comic.thumbnail.path}.${comic.thumbnail.extension}`,
          };
        })
      );
  }
}
