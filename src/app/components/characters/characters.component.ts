import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

interface ICharacter {
  id: String;
  name: String;
  description: String;
  resourceURI: String;
  thumbnail: {};
  comics: {};
}

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
})
export class CharactersComponent implements OnInit {
  title = 'Characters';
  characters: ICharacter[] = [];
  rawData: any;
  limit = 100;
  offset = 0;

  url: String = 'https://gateway.marvel.com:443/v1/public/characters';
  apikey: String = 'apikey=85929680fcce1350eb06b0567904d5e0';
  timestamp: String = 'ts=1678284996122';
  hash: String = 'hash=53ab99406f9104a94e63a85ef2c0e8e8';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    let resp = this.http.get(
      `${this.url}?${this.timestamp}&${this.apikey}&${this.hash}&limit=${this.limit}&offset=${this.offset}`
    );
    resp.subscribe((response) => {
      this.rawData = response;

      const { data, ...otherProps1 } = this.rawData;
      const { results, ...otherProps2 } = data;

      for (let result in results) {
        const char = results[result];
        const {
          id,
          name,
          description,
          resourceURI,
          thumbnail,
          comics,
          ...otherCharProps
        } = char;

        const { extension, path } = thumbnail;
        const fullThumbnail = `${path}${extension}`;

        const newCharacter: ICharacter = {
          id: id,
          name: name,
          description: description,
          resourceURI: resourceURI,
          thumbnail: fullThumbnail,
          comics: comics,
        };

        this.characters.push(newCharacter);
      }
    });

    renderCharacters();
  }
}
function renderCharacters() {
  throw new Error('Function not implemented.');
}
