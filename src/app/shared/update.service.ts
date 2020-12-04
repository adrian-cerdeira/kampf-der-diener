import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SwUpdate } from '@angular/service-worker';

@Injectable({
  providedIn: 'root',
})
export class UpdateService {

  constructor(
    private swUpdate: SwUpdate,
    private snackbar: MatSnackBar,
  ) { }

  checkUpdate() {
    this.swUpdate.available.subscribe(() => {
      this.snackbar.open('Update verügbar', 'Aktualisieren')
        .onAction()
        .subscribe(() => {
          window.location.reload();
        });
    });
  }

}
