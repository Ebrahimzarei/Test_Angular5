import { Component, OnInit } from '@angular/core';
import { Validators , FormGroup , FormControl , FormBuilder } from '@angular/forms';
import {MyService} from './services/service';
import {Group} from './models/Group';
import {News} from './models/News';


@Component({
  selector: 'my-app',
 templateUrl:'app/templates/appcomponent.html',
 providers: [MyService]

})
export class AppComponent implements OnInit {

groups:Group[];
 constructor(private api:MyService)
 {

 }
 ngOnInit():void
 {
this.api.getAllGroups().subscribe(res=>this.groups=res);
 }

}

