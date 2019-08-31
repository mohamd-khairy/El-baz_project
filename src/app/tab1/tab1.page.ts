import { Component, OnInit } from '@angular/core';
import { NewsServiceService } from '../news-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  data: any;
  page= 1;

  constructor(private NewsServiceService: NewsServiceService, private router: Router) { }

  ngOnInit() {
    this.NewsServiceService.getData(`top-headlines?country=eg&category=sports&pageSize=5&page=${this.page}`)
      .subscribe(data => {
        this.data = data.json().articles;
      });
  }
  currentArticle(article) {
    this.NewsServiceService.currentArticle = article;
    this.router.navigate(['/currentnews']);
  }

  loadData(event) {
   this.page++;
    this.NewsServiceService.getData(`top-headlines?country=eg&category=sports&pageSize=5&page=${this.page}`)
      .subscribe(data => {
        for (const article of data.json().articles) {
          this.data.push(article);
        }
        event.target.complete();
      });
  }

}
