// 1.
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
//import { ElasticService } from '../services/elastic.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Input() redCssStyle = "";

  value:any="";


  constructor(/*private es:ElasticService,*/ private router: Router) { }

  ngOnInit(): void {
  }

  searchHandler(){
    console.log("Navigate");
    this.router.navigate(['/sr', this.value]);
    this.router.navigateByUrl("/sr/"+this.value);
  }

  handleChange(event:any){
    this.value = event.target.value;
  }


}
