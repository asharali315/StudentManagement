import { Injectable } from '@angular/core';
import { dbService } from '../localDb/db.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(public _dbService:dbService) { }


  getUserCounts(){
    return this._dbService.getUsersCount();
  }
}
