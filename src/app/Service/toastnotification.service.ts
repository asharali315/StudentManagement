import { inject, Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ToastnotificationService {
  private _snackBar = inject(MatSnackBar);

  push(message: string, resultType: string) {
     this._snackBar.open(message, 'Close', {
      duration: 3000, // Snackbar will be visible for 3 seconds
      horizontalPosition:'right',
      verticalPosition:'top',
      panelClass: ['custom-snackbar'] // Apply custom class
    });
    
    
  }



  constructor() { }
}
