import { Component, OnInit } from '@angular/core';
import { MyService } from '../services/service';
import { News } from '../models/News';
import { ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { NewsComponent } from './news.component';
import { FormControl, Validators , FormBuilder , FormGroup } from '@angular/forms';

@Component({
  selector: 'singlenews',
  templateUrl: 'app/templates/SingleNewsComponent.html',
  providers: [MyService]
})
export class SingleNewsComponent implements OnInit  {
news: News;
newsId: number;

comments: NewsComponent[];

CommentID=new FormControl('');
NewsID = new FormControl('');
Name = new FormControl('',[
  Validators.required
  ]);
Email = new FormControl('',[
  Validators.required
  ]);
Comment = new FormControl('');
CommentForm: FormGroup = this.builder.group({
  CommentID:this.CommentID,
  NewsID: this.NewsID,
  Name: this.Name,
  Email: this.Email,
  Comment: this.Comment
  });
  save()
{
this.NewsID.setValue(this.newsId);
this.CommentID.setValue(0);
console.log(this.CommentForm.value);
this.api.postComment(this.CommentForm.value).subscribe(res =>{
this.LoadComment();
});
}
constructor(private api: MyService , private route: ActivatedRoute,private builder: FormBuilder){

}

ngOnInit(): void{
  this.route.params.map((param: Params) => param['id']).switchMap(res => {
    this.newsId = res;
      return this.api.getNewsbyId(res);
    }).subscribe(res => this.news = res);
    this.LoadComment();
}
LoadComment()
{
this.api.getAllCommments(this.newsId).subscribe(res => this.comments = res);
}
}
