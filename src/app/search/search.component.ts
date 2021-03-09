import { Component, OnInit, Input } from '@angular/core';
import { ElasticService } from '../services/elastic.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {


  @Input() redCssStyle = "";

  value:any="";

  constructor(private es:ElasticService) { }

  ngOnInit(): void {
  }

  searchHandler(){
    this.es.searchProducts(this.value);
  }

  handleChange(event:any){
    this.value = event.target.value;
  }
}
