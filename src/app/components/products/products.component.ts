import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  cards = [
    {title: 'Title 1', content: 'Content 1'},
    {title: 'Title 2', content: 'Content 2'},
    {title: 'Title 3', content: 'Content 3'},
    {title: 'Title 4', content: 'Content 4'},
    {title: 'Title 5', content: 'Content 5'},
    {title: 'Title 6', content: 'Content 6'}
  ];

  constructor() { }

  ngOnInit(): void {
  }
  
}
