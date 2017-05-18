import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ListService } from '../../services/list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  listItems: any;

  listname: String;

  constructor(

    private listService: ListService,
    private router: Router,
    private route: ActivatedRoute

  ) { }



  ngOnInit() {

    this.listname= this.route.snapshot.params['list'];

    const listname = {

      listname:this.listname

    };

    this.listService.getListsItemsByListName(listname).subscribe(listItems =>{

      this.listItems = listItems;

    }, err => {

      console.log(err);
      return false;

    });

  }

}
