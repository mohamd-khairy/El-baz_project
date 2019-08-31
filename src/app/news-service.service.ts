import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Http } from '@angular/http';

const Api_url=environment.Api_Url;
const Api_key=environment.Api_key;
const Api_secret_LiveScore=environment.Api_secret_LiveScore;
const Api_key_liveScore=environment.Api_key_liveScore;
const Api_url_LiveScore=environment.Api_Url_LiveScore;

@Injectable({
  providedIn: 'root'
})
export class NewsServiceService {

  currentArticle:any;
  constructor(private http:Http) { }

  getData(url){
    return this.http.get(`${Api_url}/${url}&apiKey=${Api_key}`);
  }

  getDataLiveScore(url){
    return this.http.get(`${Api_url_LiveScore}/${url}?key=${Api_key_liveScore}&secret=${Api_secret_LiveScore}`);
  }
}
