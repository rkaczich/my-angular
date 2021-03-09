import { Component, OnInit, Input } from '@angular/core';
import { ElasticService } from '../services/elastic.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Input() redCssStyle = "";
  value:any="";

  data:any = [];
  errorMsg:string = "";

  constructor(private es:ElasticService, private router: Router) { }

  ngOnInit(): void {
  }

  searchHandler(){
    this.es.searchProducts(this.value)
    .then(data => {this.data = data.hits.hits})
    .catch(error => {this.errorMsg = error.message});

    // navigation auf die Zielseite
    this.router.navigateByUrl("/sr/"+this.value);
  }

  handleChange(event:any){
    this.value = event.target.value;
  }
}
