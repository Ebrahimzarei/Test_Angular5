import {  Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { Group } from '../models/Group';
import 'rxjs/add/operator/map';
import { News } from '../models/News';
import { NewComment } from '../models/newsComment';
import { NewsComponent } from '../MyComponents/news.component';


@Injectable()

export class MyService{
  valueaddress:string;


constructor(private http: Http)
{
this.valueaddress="http://localhost:3603/";
}

getAllGroups(): Observable<Group[]>
{
  return this.http.get(this.valueaddress+'GetAllGroups').map(res => res.json());
}

getNews(pageNumber: number): Observable<News[]>
{
  return this.http.get(this.valueaddress+'Api/News?PageId='+pageNumber).map(res => res.json());
}

getPageCount()
{
  return this.http.get(this.valueaddress+'PageCount').map(res => res.json());
}

getNewsbyId(newsid: number):Observable<News>
{
  return this.http.get(this.valueaddress+'Api/News/'+newsid).map(res => res.json());
}

getNewsbyGroupId(groupId: number): Observable<News[]>
{
  return this.http.get(this.valueaddress+'Group/' + groupId).map(res => res.json());
}
postComment(comment: NewComment)
{
return this.http.post(this.valueaddress+'Api/News/', comment).map(res => res);
}
getAllCommments(newsId: number): Observable<NewsComponent[]>
{
  return this.http.get(this.valueaddress+'Comments/' + newsId).map(res => res.json());
}


}
