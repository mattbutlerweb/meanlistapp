import { Component, OnInit } from '@angular/core';

import { ListService } from '../../services/list.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  lists: any;

  constructor(

    private listService: ListService

  ) { }

  ngOnInit() {

    this.listService.getListsByUsername().subscribe(lists =>{

      this.lists = lists;

    }, err => {

      console.log(err);
      return false;

    });

  }

}
