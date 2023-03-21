import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { ICharacter } from '../components/characters/interfaces';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  timestamp: string = 'ts=1678284996122';
  url: string = 'https://gateway.marvel.com:443/v1/public/characters';

  //Outlook
  // apikey: string = 'apikey=85929680fcce1350eb06b0567904d5e0';
  // hash = 'hash=53ab99406f9104a94e63a85ef2c0e8e8';

  //Gmail
  apikey: string = 'apikey=44e19714d10f1253e17c3c02936426b9';
  hash = 'hash=1b1d63e02c0afa1660694369885e1add';

  constructor(private http: HttpClient) {}

  requestCharacters(offset, limit, query = '') {
    let requestUrl = `${this.url}?${this.timestamp}&${this.apikey}&${this.hash}&limit=${limit}&offset=${offset}`;
    let nameParam = `&nameStartsWith=${query}`;
    if (query) {
      requestUrl = requestUrl + nameParam;
    }

    return this.http.get(requestUrl).pipe(
      map((response: any) => {
        console.log(response);
        return response.data; //.results
      })
      // map(this.mapCharacter)
    );
  }

  // mapCharacter = (results: any) => {
  //   return results.map((char: any) => ({
  //     ...char,
  //     thumbnail: `${char.thumbnail.path}.${char.thumbnail.extension}`,
  //   }));
  // };
}
