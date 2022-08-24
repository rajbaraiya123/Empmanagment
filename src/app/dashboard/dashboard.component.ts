import { Component, OnInit } from '@angular/core';
import { DataserviceService } from './../dataservice.service';
import {Router} from "@angular/router";
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  EmpList: any = [];
  date = new Date();
  expericene :any ={
    months:0,
    years:0
  }

  constructor(private data: DataserviceService, private route:Router) { }

  ngOnInit(): void {
    this.getAllproduct()
    // console.log(this.date.now())
    console.log(this.date.getTime)
    // cos
  }
  navigate(){
    this.route.navigate(['/registration']);
  }

  CountExp(date:any){
    var today = this.date.getTime();
    var new_date = new Date(date)
           this.expericene.months = Math.floor((Math.abs(date-today))/(1000*60 * 60 * 24 * 7 * 4 ) %12) //count month
           this.expericene.years = Math.floor((Math.abs(date-today))/(60 * 60 * 24*1000*365.4)) //count year
      return this.expericene
  }
  getAllproduct() {

    this.data.EmpFetch().subscribe({
      next: (res) => {
        this.EmpList = res; 

      },
      error: () => {
        alert('Error Happen')
      }
    })
  }

}
