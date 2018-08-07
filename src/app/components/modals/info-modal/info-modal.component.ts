import { Component, OnInit,Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-info-modal',
  templateUrl: './info-modal.component.html',
  styleUrls: ['./info-modal.component.scss']
})
export class InfoModalComponent implements OnInit {
  
  info: any = {};
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { 
    console.log(data);
    this.info = data; 
  }

  ngOnInit() {
  }

}
