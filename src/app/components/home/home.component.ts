import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {
    console.log(this.features, this.numeros);
  }

  features = [
    {
      name: 'List Characters',
      description: 'Access all Marvel library of characters',
      imageUrl:
        'https://project-nerd.com/wp-content/uploads/2013/09/Marvel-Comics-Character-Banner.jpg',
      navigateUrl: '',
    },
    {
      name: 'Create new Character',
      description: 'Decide which new Character you want to add to the library',
      imageUrl:
        'https://images.squarespace-cdn.com/content/v1/54bdcba5e4b08f92b173441f/1542485005084-NWVVT3QZK9OVTKGCZLZ4/stan-lee-and-supes-7x4-1.jpg',
      navigateUrl: '',
    },
    {},
  ];

  numeros = [1, 2, 3, 4, 5];
}
