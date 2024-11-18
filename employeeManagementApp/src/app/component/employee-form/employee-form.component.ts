import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { EmployeeComponent } from '../../pages/employee/employee.component';

@Component({
  selector: 'app-employee-form',
  standalone: true,
  imports: [FormsModule, NgIf, EmployeeComponent],
  templateUrl: './employee-form.component.html',
  styleUrl: './employee-form.component.css',
})
export class EmployeeFormComponent {
  showForm: boolean = false;
  firstName: string = '';
  lastName: string = '';
  department: string = '';
  phone: string = '';
  gender: string = '';
  email: string = '';

  @Input() childFunction!: () => void;

  submitForm() {
    console.log('Form Submitted with values:');
    console.log('First Name:', this.firstName);
    console.log('Last Name:', this.lastName);
    console.log('Department:', this.department);
    console.log('Phone:', this.phone);
    console.log('Gender:', this.gender);
  }
}
