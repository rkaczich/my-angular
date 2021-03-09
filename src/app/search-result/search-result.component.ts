import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  searchParam:any;

  constructor(private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.searchParam = this.router.snapshot.paramMap.get('searchParam');
    console.log(this.searchParam);

  }

}
