import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from "@angular/forms";
import { EmployeeModel } from './../EmployeeModel';
import { DataserviceService } from './../dataservice.service';
import { Router } from "@angular/router";
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  title = 'Empmanagment';
  techname = ['Angular', 'java', 'React', 'Python']
  registerform !: FormGroup;
  submitted = false;
  
  EmpObj: EmployeeModel = new EmployeeModel()
  constructor(private formbuilder: FormBuilder, private data: DataserviceService, private route: Router) {

  }
  ngOnInit(): void {
    this.registerform = this.formbuilder.group({
      name: ['', Validators.required],
      empdesignation: ['', Validators.required],
      technology: ['', Validators.required],
      mobileno: [null, [Validators.required, Validators.maxLength(10), Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      city: ['', Validators.required],
      date: ['', Validators.required]

    })
  }

  GetTodayDate() {    //get date for validation
    let d = new Date();
      let  month = '' + (d.getMonth() + 1);
      let  day = '' + d.getDate();
      let  year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
}
 

  submitform() {
    this.submitted = true;
    if (this.registerform.valid) {       
      this.EmpObj.name = this.registerform.value.name;
      this.EmpObj.designation = this.registerform.value.empdesignation;
      this.EmpObj.technology = this.registerform.value.technology;
      this.EmpObj.phone = this.registerform.value.mobileno;
      this.EmpObj.city = this.registerform.value.city;
      this.EmpObj.date = new Date(this.registerform.value.date).getTime()
      this.data.EmployeePost(this.EmpObj).subscribe({
        next: (res) => {
          alert('Data Add Sucessfully ');
          this.route.navigate(['']);

        },
        error: () => {
          alert('Error Happen')
        }
      })

    }

  }
}
