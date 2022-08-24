import { Component ,OnInit} from '@angular/core';
import { FormControl , FormGroup,FormBuilder,Validators} from "@angular/forms";
import { EmployeeModel } from './EmployeeModel';
import { DataserviceService } from './dataservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Empmanagment';
  techname =['Angular','java','React','Python']
  registerform !:FormGroup;
 EmpObj : EmployeeModel = new EmployeeModel()
constructor(private formbuilder:FormBuilder, private data:DataserviceService){

}
 ngOnInit(): void {
  this.registerform = this.formbuilder.group({
    name :['',Validators.required],
    empdesignation :['',Validators.required],
    // date :['',Validators.required],
    // season :['',Validators.required],
    technology :['',Validators.required],
    mobileno :['',Validators.required],
    city :['',Validators.required],
    date:['',Validators.required]
  
  })
 }

  submitform(){
    // console.log(this.registerform.selected.state)
    if(this.registerform.valid)
{
    this.EmpObj.name = this.registerform.value.name;
    this.EmpObj.designation = this.registerform.value.empdesignation;
    this.EmpObj.technology = this.registerform.value.technology;
    this.EmpObj.phone = this.registerform.value.mobileno;
    this.EmpObj.city = this.registerform.value.city;
    this.EmpObj.date = this.registerform.value.date;
    // this.EmpObj.date = this.registerform.value.
    console.log(this.EmpObj)

    // this.data.EmployeePost(this.EmpObj).subscribe({
    //   next:(res) =>{
    //     alert('Data Sucessfully Updated');
    //     // this.dial.close('save')
    //   },
    //   error:()=>{
    //     alert('Error Happen')
    //   }
    // })
  
  }

}
}