import { Injectable } from '@angular/core';
import axios from 'axios';
import { AxiosInstance } from 'axios';

const esURL = "http://localhost:9200/employees/_search";

@Injectable({ providedIn: 'root'})
export class ElasticService {

  private axiosClient:AxiosInstance;

  constructor() {
    this.axiosClient = axios.create();
  }

  searchProducts(value:any){
      console.log("start es query");

      this.axiosClient.get(esURL, {
        data: {
          "query": {
            "multi_match": {
              "query": value,
              "type":  "phrase_prefix",
              "fields": ["name", "email", "role", "text"]
            }
          }
        }
      })
  }

  async checkElasticStatus(){
    const response = await axios.get(esURL);
    return response.data;
  }
}
