import { Injectable } from '@angular/core';

import { Http,Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { URLSearchParams } from '@angular/http';

import {Post} from './post';
//import { URLSearchParams } from '@angular/http';

@Injectable()
export class AppServiceComponent {


 constructor(private http: Http) {

 }
// response:any
   projectDetails(): Observable<Post[]>{
// alert("ll00")
   return this.http.get("/selectionProject")
  .map((response: Response) => <Post[]>response.json());

  }

 moduleServiceDetails(opalName) {

    let urlSearchParams = new URLSearchParams();
  urlSearchParams.append('moduleName',opalName );



   //alert(urlSearchParams)
  // console.log(urlSearchParams)
      return this.http.post('/postModuleName', urlSearchParams)
        .subscribe(data => {
        console.log(data);
      });


    }








}
