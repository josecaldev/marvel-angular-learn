import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  url: string = 'https://gateway.marvel.com:443/v1/public/characters';
  apikey: string = 'apikey=85929680fcce1350eb06b0567904d5e0';
  timestamp: string = 'ts=1678284996122';
  hash = 'hash=53ab99406f9104a94e63a85ef2c0e8e8';

  constructor(private http: HttpClient) {}

  getCharacters(limit = 100, offset = 0) {
    return this.http.get(
      `${this.url}?${this.timestamp}&${this.apikey}&${this.hash}&limit=${limit}&offset=${offset}`
    );
  }
}
