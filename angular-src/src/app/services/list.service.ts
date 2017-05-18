import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';


import 'rxjs/add/operator/map';

@Injectable()
export class ListService {

  lists : any;
  user: any;
  createdby: any;

  constructor(
    private http: Http,

  ) { }

  getListsByUsername(){

    let headers = new Headers();

    this.loadUser();

    const createdby = { createdby: this.user.username};

    headers.append('Content-Type', 'application/json');

    return this.http.post('http://localhost:3000/lists/alllists', createdby, {headers: headers})
      .map(res => res.json());

  }

  getListsItemsByListName(listname){

    let headers = new Headers();

    headers.append('Content-Type', 'application/json');

    return this.http.post('http://localhost:3000/lists/list',listname,  {headers: headers})
      .map(res => res.json());

  }

  addNewListItem(item){

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.post('http://localhost:3000/lists/newlistitem', item, {headers: headers})
      .map(res => res.json());

  }

  loadUser(){

    const user = localStorage.getItem('user');
    this.user = JSON.parse(user);

  }


}
