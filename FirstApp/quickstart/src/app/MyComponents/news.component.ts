import { Component, OnInit } from '@angular/core';
import { MyService } from '../services/service';
import { News } from '../models/News';
import { ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'news',
  templateUrl: 'app/templates/NewsComponent.html',
  providers: [MyService]
})
export class NewsComponent implements OnInit {
constructor(private api: MyService, private route: ActivatedRoute){

}
pagenumber :number = 1;
news: News[];
pageCount: number;
pagging: number[] = [];
activePage: number;

ngOnInit(): void
{
  console.log("test");
   this.route.params.map((param: Params) => param['id']).switchMap((id = 1)=>{
  this.pagenumber = id;
  return this.api.getNews(this.pagenumber);
    }).subscribe(res=> {
      this.news = res;
   });

  this.api.getPageCount().subscribe(res=> {
  for(let i = 1;i<=res;i++)
  {
    this.pagging.push(i);
  }
 });

  }

}
