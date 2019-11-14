import { Component, OnInit } from '@angular/core';
import { MyService } from '../services/service';
import { News } from '../models/News';
import { ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'groups',
  templateUrl: 'app/templates/GroupsComponent.html',
  providers: [MyService]
})
export class GroupsComponent implements OnInit {
news: News[];

constructor(private api: MyService , private route: ActivatedRoute)
{

}

ngOnInit(): void{
  this.route.params.map((param: Params) => param['id']).switchMap((id) => {
    return this.api.getNewsbyGroupId(id);
  }).subscribe(res => {
    this.news = res;
  });
}

}
