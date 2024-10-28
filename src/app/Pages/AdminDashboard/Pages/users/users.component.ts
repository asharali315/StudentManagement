import { Component, OnInit } from '@angular/core';
import { TableComponent } from "../../../../Component/table/table.component";
import { AddoreditusersComponent } from '../../Component/addoreditusers/addoreditusers.component';
import { dbService } from '../../../../localDb/db.service';
import { user } from '../../../../model/user.model';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [TableComponent,AddoreditusersComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {
user :user ={
  id:1,
  name:'asher',
  cnic : '',
  contact:'',
  email:'',
  guardianName:'',
  image:'',
  password:''
}
  allUser: any[] = []
  constructor(public _dbService:dbService){}


  ngOnInit(): void {
   this.allUser =  this._dbService.getAllData('user')
}

public displayedColumns:string[] = ["id","name",'cnic','email','guardianName','contact','action'];




}
