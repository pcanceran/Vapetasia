import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saved-carts',
  templateUrl: './saved-carts.component.html',
  styleUrls: ['./saved-carts.component.scss']
})
export class SavedCartsComponent implements OnInit {

  carts: any[] = [
    {
      date: '00/00/00',
      name: '000000'
    },

    {
      date: '00/00/00',
      name: '000000'
    },

    {
      date: '00/00/00',
      name: '000000'
    },

    {
      date: '00/00/00',
      name: '000000'
    },

    {
      date: '00/00/00',
      name: '000000'
    },

    {
      date: '00/00/00',
      name: '000000'
    },

    {
      date: '00/00/00',
      name: '000000'
    },

    {
      date: '00/00/00',
      name: '000000'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
