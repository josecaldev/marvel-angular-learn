import { Component, OnInit } from '@angular/core';
import { Observable, map, switchMap } from 'rxjs';
import { ICharacter } from '../../model/interfaces';
import { ActivatedRoute } from '@angular/router';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-characterInfo',
  templateUrl: './characterInfo.component.html',
  styleUrls: ['./characterInfo.component.scss'],
})
export class CharacterInfoComponent implements OnInit {
  title = 'Character Info';
  id: number;
  character: ICharacter;

  constructor(
    private route: ActivatedRoute,
    private requestService: RequestService
  ) {}

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');

    this.requestService
      .requestCharacterById(this.id)
      .subscribe((character: ICharacter) => {
        this.character = character;
      });
  }
}
