import { Injectable } from '@angular/core';
import { loginModel } from '../model/login.model';
import { dbService } from '../localDb/db.service';
import { user } from '../model/user.model';
import { authenticatedUser } from '../model/authenticateduser.Model';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { apis } from '../api';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  authenticatedUser$  = new BehaviorSubject<authenticatedUser|null>(null);
  
  userModel:authenticatedUser = {
    id:1,
    name:'',
    guardianName:null,
    contact:'',
    email:'',
    cnic:'',
    image:null,
    roles:[],
    bearerToken:null
  }
  constructor(public _dbService : dbService,
   public _http:HttpClient
  ) { }

  loginUser(loginData : loginModel){

      return this._http.post(apis.login,loginData)
    // let user = this._dbService.getUserByEmailAndPassword(loginData.email,loginData.password)    
    // if(user === null || user === undefined)
    //   return null;
    // let userRoles = this._dbService.getUserRoles(user.id);

    // this.userModel = {
    //   id:user.id,
    //   name:user.name,
    //   guardianName:user.guardianName,
    //   contact:user.contact,
    //   email:user.email,
    //   cnic:user.cnic,
    //   image:null,
    //   roles:userRoles,
    //   bearerToken:null


    // }

    // return this.userModel;
  }


  getUser(email:string)
  {
    return this._dbService.getUsers().filter((i:user) => i.email.toLowerCase() === email)[0]
  }

  changeUserPassword(user:user){
    return this._dbService.changeUserPassword(user);
  }
}
