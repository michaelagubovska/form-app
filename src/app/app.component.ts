import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormService } from './form.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [FormService]
})

export class AppComponent {
  title = 'form-app';
  constructor(private formService: FormService, private confirmationDialog: MatDialog) {};

  vaccinationForm = new FormGroup({
    name: new FormControl('', Validators.required),
    surname: new FormControl('', Validators.required),
    birthdate: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', Validators.pattern('\\+?\\d*'))
  });

  openConfirmationDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    this.confirmationDialog.open(ConfirmationDialogComponent, dialogConfig);
  }
 
  onSubmit() {
    if(this.vaccinationForm.invalid){
      alert("Please check if form inputs are valid");
    }
    else{
      this.formService.submitVaccinationForm(this.vaccinationForm.value);
      this.vaccinationForm.reset();
      this.openConfirmationDialog();
    }
  };
}
