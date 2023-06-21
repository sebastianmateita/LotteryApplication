import { Component } from '@angular/core';
import { AbstractControl, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { TicketService } from '../../services/ticket.service';

@Component({
  selector: 'app-draw-tickets',
  templateUrl: './draw-tickets.component.html',
  styleUrls: ['./draw-tickets.component.scss']
})
export class DrawTicketsComponent {
  drawFormGroup = this.formBuilder.group({
    numberOfBoxes: 0,
    generateSuperZahl: false
  });

  constructor(
    private formBuilder: FormBuilder,
    private ticketService: TicketService,
    private router: Router
  ) { }

  onSubmit() {
    this.drawFormGroup.markAllAsTouched();
    this.drawFormGroup.updateValueAndValidity();

    if (this.drawFormGroup.invalid)
      return;

    let formData = this.getFormData();

    this.ticketService.drawTicket(formData)
      .subscribe(
        data => {
          this.router.navigate([`/ticket-history/${data}`]);
        },
        error => {
          console.log(error);
        }
      );
  }

  private getFormData() {
    var formValues = this.drawFormGroup.value;
    let formData = {
      numberOfBoxes: formValues.numberOfBoxes,
      generateSuperZahl: formValues.generateSuperZahl,
    };

    return formData;
  }

  get numberOfBoxes(): AbstractControl {
    return this.drawFormGroup.get('numberOfBoxes')!;
  }

  get generateSuperZahl(): AbstractControl {
    return this.drawFormGroup.get('generateSuperZahl')!;
  }
}
