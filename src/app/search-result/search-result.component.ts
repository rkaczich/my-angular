import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ElasticService } from '../services/elastic.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit, OnChanges {
  @Input() searchParam:any;
  @Input() data:any = [];
  errorMsg:string = "";

  constructor(private router: ActivatedRoute, private es:ElasticService) {
    console.log("construxtor");
  }



  ngOnInit(): void {
    this.router.paramMap.subscribe(params => {
      let searchParam = params.get('searchParam');
      this.es.searchProducts(searchParam)
      .then(data => {this.data = data.hits.hits; console.log(this.data);})
      .catch(error => {this.errorMsg = error.message});
    });

  }

  ngOnChanges(changes: SimpleChanges):void {
      console.log("ONCHANGES: ", changes);
  }

  private ngOnDestroy() {
    console.log("destroy");
   }
}
