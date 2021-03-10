import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ElasticService } from '../services/elastic.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  searchParam:any;

    data:any = [];
    errorMsg:string = "";

  constructor(private router: ActivatedRoute, private es:ElasticService) { }

  ngOnInit(): void {
    this.searchParam = this.router.snapshot.paramMap.get('searchParam');
    console.log(this.searchParam);

    // get value from observable by subscribing to param, needed for route to the same component
    //this.route.paramMap.subscribe(params => {this.searchParam = params.get('searchParam')})

    this.es.searchProducts(this.searchParam)
    .then(data => {this.data = data.hits.hits; console.log(this.data);
    })
    .catch(error => {this.errorMsg = error.message});


  }

}
