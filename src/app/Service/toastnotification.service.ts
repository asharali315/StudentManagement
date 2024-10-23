import { inject, Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ToastnotificationService {
  private _snackBar = inject(MatSnackBar);

  push(message: string, resultType: string) {
    let selectedClass = ''
    switch(resultType){
      case '1':
        selectedClass = 'success';
        break;
        case '2':
          selectedClass='error';
    }
    
    
    this._snackBar.open(message, 'X', {
      duration: 10000, // Snackbar will be visible for 3 seconds
      horizontalPosition:'right',
      verticalPosition:'top',
      panelClass: selectedClass // Apply custom class
    });
    
    
  }



  constructor() { }
}
