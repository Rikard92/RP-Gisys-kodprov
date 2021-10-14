import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employee: Employee ={
    id: 1,
    employee_name: 'Tiger Nixon',
    employee_salary: 320800,
    employee_age: 61,
    profile_image: ''
  }
  
  constructor( ) { }

  ngOnInit(): void {
  }

}
