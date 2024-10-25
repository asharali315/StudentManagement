import { Injectable } from '@angular/core';
import { user } from '../model/user.model';
import { role, userrole } from '../model/role.model';
import { roleRoutes, routes } from '../model/userroutes.model';
import { course, studentWithCourse, teacherCourse } from '../model/course.model';

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
    // {id:2,userId : 1,roleId:2}
  ]

 private route : routes[] = [
  {id:0,name:"Dashboard",url:'/user/dashboard'},
  {id:1,name:"Users",url:'/user/userlist'},
  {id:2,name:"Leaves Request",url:'/user/studentleave'},
  {id:3,name:"Roles",url:'/user/role'},
  {id:4,name:"Leaves Request",url:'/user/leave'},
  {id:7,name:"profile",url:'/user/profile'},
  {id:10,name:"Courses",url:'/user/courses'},
  {id:11,name:"Assign Course",url:'/user/assigncourses'},

]

private roleWiseRoute : roleRoutes[] = [
  {id:1,routeId:0,roleId:1},
  {id:1,routeId:0,roleId:2},
  {id:1,routeId:0,roleId:3},
  {id:1,routeId:1,roleId:1},
  {id:1,routeId:2,roleId:1},
  {id:1,routeId:3,roleId:1},
  {id:1,routeId:4,roleId:3},
  {id:1,routeId:4,roleId:2},
  {id:1,routeId:2,roleId:2},
  {id:1,routeId:7,roleId:3},
  {id:1,routeId:7,roleId:1},
  {id:1,routeId:7,roleId:2},
  {id:1,routeId:10,roleId:1},
  {id:1,routeId:11,roleId:1},
]


private courses: course[] = [
  {id:1,name:'Mobile Dev',sessionName:'2024'},
  {id:2,name:'Web Dev',sessionName:'2024'},
  {id:3,name:'Mobile Dev',sessionName:'2023'},
  {id:3,name:'Web Dev',sessionName:'2023'},
]
private teacherCourses: teacherCourse[] = [
  
]
private studentCourses: studentWithCourse[] = [
  
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


  changeUserPassword(user:user){
    let index = this.users.findIndex((i:user)=> i.email.toLowerCase() ===user.email.toLowerCase())
    if(index < 0)
      return false
    else
    {
      this.users[index].password = user.password
      return true;
    }
  }


  getUserRoutes(roleId:number){
   let routeIds = this.roleWiseRoute.filter((i:roleRoutes)=> i.roleId == roleId).map((i:roleRoutes)=> {return i.routeId})
 
    return this.route.filter((i:routes) => routeIds.includes(i.id))
  }


  getUsersCount(){
    let userCount = {
      totalUsers:0,
      totalStudents: 0,
      totalTeachers: 0
    }

    userCount.totalUsers = this.users.length
    this.userRoles.forEach((i:userrole)=>{
      if(i.roleId ==3)
        userCount.totalStudents +=1;
      else if(i.roleId == 2)
        userCount.totalTeachers +=1;

    })

    return  userCount
  }


}
