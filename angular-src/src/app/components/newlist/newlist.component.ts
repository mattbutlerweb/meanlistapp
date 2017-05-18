import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

import { ValidateService } from '../../services/validate.service';
import { ListService} from '../../services/list.service';

@Component({
  selector: 'app-newlist',
  templateUrl: './newlist.component.html',
  styleUrls: ['./newlist.component.css']
})
export class NewlistComponent implements OnInit {

  addlistError : Boolean;
  addlistErrorMessage : String;

  name: String;
  createdby: String;

  user: any;

  constructor(

    private listService: ListService,
    private validateService: ValidateService,
    private router: Router

  ) { }

  ngOnInit() {

    const user = localStorage.getItem('user');
    this.user = JSON.parse(user);

    this.createdby = this.user.username;

  }

  onNewListSubmit(){

    const newlist = {

      name: this.name,
      createdby: this.createdby

    }

    if(!this.validateService.validateNewList(newlist)){

      this.addlistError = true;

      this.addlistErrorMessage = "Please enter a name for the list";

      return false;

    } else {

      this.listService.saveNewList(newlist).subscribe(data => {

        if(data.success){

          this.router.navigate(['/dashboard']);

        } else {

          this.addlistError = true;

          this.addlistErrorMessage = 'Something went wrong, please try again.';

          this.router.navigate(['/newlist']);

        }

      });

    };



  };

}
