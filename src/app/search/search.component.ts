import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Input() redCssStyle = "";
  constructor() { }

  ngOnInit(): void {
  }

  myClickHandler(){
    console.log("Button angeklickt!");

  }
}
