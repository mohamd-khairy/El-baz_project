import { Component, OnInit } from '@angular/core';
import { NewsServiceService } from '../news-service.service';

@Component({
  selector: 'app-currentnews',
  templateUrl: './currentnews.page.html',
  styleUrls: ['./currentnews.page.scss'],
})
export class CurrentnewsPage implements OnInit {

  current_data:any;

  constructor(private newsService:NewsServiceService) { }

  ngOnInit() {
    this.current_data=this.newsService.currentArticle;
    console.log(this.current_data);

  }

}
