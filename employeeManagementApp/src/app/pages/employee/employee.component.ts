import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EmployeeFormComponent } from '../../component/employee-form/employee-form.component';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [NgIf, FormsModule, EmployeeFormComponent],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css',
})
export class EmployeeComponent  {
  showForm: boolean = false;
  toggleForm() {
    this.showForm = true;
  }
  closeForm() {
    this.showForm = false;
    console.log("clicked",this.showForm);
    
  }
}
