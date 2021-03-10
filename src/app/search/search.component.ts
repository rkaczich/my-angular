import { Component, OnInit, Input } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Input() redCssStyle = "";
  value:any="";


  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  searchHandler(){
      // navigation auf die Zielseite
    this.router.navigateByUrl("/sr/"+this.value);
  }

  handleChange(event:any){
    this.value = event.target.value;
  }
}
