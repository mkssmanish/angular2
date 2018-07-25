import { Component, OnInit } from '@angular/core';

import { AppServiceComponent } from './app.service';

import {Post} from './post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
 // title = 'app works!';
 result:Post[];
 opalName: string;

 constructor(private module: AppServiceComponent) {
  // this.result=http.get('/selectionProject')
  // .map(response => response.json())
  // .subscribe(result =>{ this.result =result.json();console.log(this.result)});

  // console.log(this.result )
  }
  ngOnInit() {

    this.module.projectDetails().subscribe(moduleData => this.result = moduleData);

   // this.datas=this.projectSelectionData;



}

saveModuleName(){
 // alert(this.opalName+"mmmm")
  //alert(this.moduleIdincrement++)
  this.module.moduleServiceDetails(this.opalName)

     }





}
