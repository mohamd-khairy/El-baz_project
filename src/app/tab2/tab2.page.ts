import { Component, OnInit } from '@angular/core';
import { NewsServiceService } from '../news-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  data: any;

  constructor(private NewsServiceService: NewsServiceService, private router: Router) { }

  ngOnInit(){
    this.NewsServiceService.getDataLiveScore("leagues/list.json")
      .subscribe(data => {
        this.data = data.json().data;
      });
  }
}
