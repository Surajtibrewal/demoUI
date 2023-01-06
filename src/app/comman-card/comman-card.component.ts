import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-comman-card',
  templateUrl: './comman-card.component.html',
  styleUrls: ['./comman-card.component.css']
})
export class CommanCardComponent implements OnInit {
@Input() st="";
  constructor() { }

  ngOnInit(): void {
  }

}
