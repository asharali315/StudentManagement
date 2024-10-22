import { role } from "./role.model"

export interface authenticatedUser{
    id:number,
    name:string,
    guardianName:string|null,
    contact:string,
    email:string,
    cnic:string,
    image:string|null
    roles:role[],
    bearerToken: string|null
}
