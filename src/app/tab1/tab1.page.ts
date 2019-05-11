import { Component, OnInit } from '@angular/core';
import { NewsServiceService } from '../news-service.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  data:any;
  constructor(private NewsServiceService: NewsServiceService) { }

  ngOnInit() {
    this.NewsServiceService.getData("top-headlines?country=eg&category=sports")
      .subscribe(data => { 
      this.data=data.json().articles;
      });

  }
}
