import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  ngOnInit() {}

  features = [
    {
      name: 'List Characters',
      description:
        'Access all Marvel library of characters from the API, listing all detail of heroes',
      imageUrl:
        'https://i0.wp.com/videojuegos.enriqueortegaburgos.com/wp-content/uploads/2023/01/MARVEL-ESTRATEGIA.jpg',
      navigateUrl: '/characters',
      callToAction: 'Go to List',
    },
    {
      name: 'Custom Characters',
      description:
        'Create new Custom Characters to be added to the library. You can decide every aspect of it',
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSII9r770UCuLZ1ul4N_GeOZJJvxo9Wjlz3Dw&usqp=CAU',
      navigateUrl: '/custom/create',
      callToAction: 'Create Custom Character',
    },
  ];
}
