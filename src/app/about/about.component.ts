import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  test = ['knaw more about tv', 'knaw more about laptop', 'knaw more about computer']
  

  constructor() { }

  ngOnInit(): void {
  }
  // productSelected:boolean = "false";
}
