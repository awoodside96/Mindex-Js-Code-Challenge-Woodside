import {Component, Input, OnInit} from '@angular/core';
import {catchError, map, reduce} from 'rxjs/operators';

import {Employee} from '../employee';
import {EmployeeListComponent} from '../employee-list/employee-list.component';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {
  @Input() employee: Employee;
  @Input()	employees: Employee[] = [];
  reportingEmployees: Employee[] = [];
  errorMessage: string;

  constructor(
  	private employeeList: EmployeeListComponent
  ) {}

  ngOnInit(): void {
  	this.employees = this.employeeList.employees
  }

  getEmployeeReports(emp: Employee, emps: Employee[]) {
  	//create const copy of employee.directReports if it exits
  	//if employee.directReports exists
  		//map or find corresponding id in employees
  		//add the employee to the employee reporters field
    //if no employee.directReports add empy array
  }


  private handleError(e: Error | any): string {
    console.error(e);
    return this.errorMessage = e.message || 'Unable to retrieve direct reporting employees';
  }
}
