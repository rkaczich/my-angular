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

  async searchProducts(value:any){
      console.log("start es query" + value);

      const response = await this.axiosClient.post(esURL, {
        query: {
            multi_match: {
              query: value,
              type:  'phrase_prefix',
              fields: ['name', 'email', 'role', 'text']
            }
          },
          highlight: {
            pre_tags : ['<b>'],
            post_tags : ['</b>'],
            fields: { '*': {} }
          }
        });
        console.log(response.data);
        return response.data
  }

  async checkElasticStatus(){
    const response = await axios.get(esURL);
    return response.data;
  }
}
