import { Injectable } from '@angular/core';

@Injectable()
export class ValidateService {

  constructor() { }

  validateRegister(user){

    if(user.name == undefined || user.username == undefined || user.email == undefined || user.password == undefined){

      return false;

    } else {

      return true;

    }

  }

  validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return re.test(email);

  }

  validateAddNewListItem(item){

    if(item.name == undefined || item.description == undefined || item.quantity == undefined){

      return false;

    } else {

      return true;

    }

  }

  validateNewList(newlist){

    if(newlist.name == undefined){

      return false;

    } else {

      return true;
      
    }

  }

}
