import { Injectable } from '@angular/core';
import { user } from '../model/user.model';
import { role, userrole } from '../model/role.model';

@Injectable({
  providedIn: 'root'
})
export class dbService {
  private users : user[] = [
    {id: 1,name:'admin',cnic:'4220121231232',contact:'03123131232',email:'admin@gmail.com',guardianName:null,image:null,password:'Abcd@1234'}
  ]

  private roles : role[] = [
    { id:1 , name:'admin'},
    { id:2 , name:'teacher'},
    { id:3 , name:'student'},
  ]

  private userRoles : userrole[] = [
    {id:1,userId : 1,roleId:1},
    {id:2,userId : 1,roleId:2}
  ]

  constructor() { }

  getUsers(){
    return this.users;
  }

  getUserByEmailAndPassword(email:string,password: string){
    return this.users.filter((i:user)=> i.email.toLowerCase() === email.toLowerCase() && i.password === password)[0]
  }

  getUserRoles(userId:number){
    let userRolesId = this.userRoles.filter((i:userrole) => i.userId === userId).map((i:userrole)=> {return i.roleId});
    return  this.roles.filter((i:role)=> userRolesId.includes(i.id));
  
  }


  

}
