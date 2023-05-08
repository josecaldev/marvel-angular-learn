import { Component, Input, OnInit } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';
import { IComic, IComicUri } from '../../model/interfaces';

@Component({
  selector: 'marv-comic',
  templateUrl: './comic.component.html',
  styleUrls: ['./comic.component.scss'],
})
export class ComicComponent implements OnInit {
  @Input() comicUri: IComicUri;
  comic: IComic;

  constructor(private requestService: RequestService) {}

  ngOnInit() {
    // console.log('comicUri: ', this.comicUri);
    this.requestService
      .requestComicByUri(this.comicUri.resourceURI)
      .subscribe((comic: IComic) => {
        this.comic = comic;
        console.log(comic);
      });
  }
}
