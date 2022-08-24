import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  constructor(private http:HttpClient) { }

  EmployeePost(data:any){
    return this.http.post<any>('http://localhost:3000/Employeelist/',data) //add employee
}
 
EmpFetch(){
  return this.http.get<any>('http://localhost:3000/Employeelist/') //fetch Employee
}

}
