import { Component, OnInit, Injectable } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../shared/employee';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

@Injectable()
export class SignupComponent implements OnInit {
  private _emp: Employee;
 
  constructor(private empService:EmployeeService) { }


  ngOnInit() {
  }
  onSubmit(employee:Employee){
    this._emp=new Employee(employee.firstName,employee.lastName,employee.username,employee.password);
    console.log(this._emp);
    this.empService.storeData(this._emp).subscribe();
  }

  passwordMatch(value){
    if(value.password!=value.reTypePassword){
      return true;
    }
    return false;
  }

}
