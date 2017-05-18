import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ValidateService } from '../../services/validate.service';
import { ListService } from '../../services/list.service';

@Component({
  selector: 'app-newlistitem',
  templateUrl: './newlistitem.component.html',
  styleUrls: ['./newlistitem.component.css']
})
export class NewlistitemComponent implements OnInit {

  name: String;
  description: String;
  quantity: Number;

  listname: String;

  constructor(

    private router: Router,
    private validateService: ValidateService,
    private listService: ListService,
    private route: ActivatedRoute

  ) { }

  ngOnInit() {

    this.listname= this.route.snapshot.params['list'];

  }

  addnewlistitemError = false;
  addnewlistitemErrorMessage = "";

  onNewListItemSubmit(){

    const item =  {

      name: this.name,
      description: this.description,
      quantity: this.quantity,
      list: this.listname

    };

    if(!this.validateService.validateAddNewListItem(item)){

      this.addnewlistitemError = true;

      this.addnewlistitemErrorMessage = "Please fill in all the fields";

      return false;

    } else {

      this.listService.addNewListItem(item).subscribe(data => {

        if(data.success){

          this.router.navigate(['/list/' + this.listname]);

        } else {

          this.addnewlistitemError = true;

          this.addnewlistitemErrorMessage = 'Something went wrong, please try again.';

          console.log(item);

          this.router.navigate(['/newlistitem/' +this.listname]);

        }

      });

    }

  }

}
