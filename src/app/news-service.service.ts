import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Http } from '@angular/http';

const Api_url=environment.Api_Url;
const Api_key=environment.Api_key;

@Injectable({
  providedIn: 'root'
})
export class NewsServiceService {

  constructor(private http:Http) { }

  getData(url){
    return this.http.get(`${Api_url}/${url}&apiKey=${Api_key}`);
  }
}
