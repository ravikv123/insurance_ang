import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.css']
})
export class LifeCycleComponent implements OnInit,AfterViewInit {
  user='';
  constructor() { 
   //lert("inside construction");
   console.log("inside construction");

  }

  ngOnInit() {
    //alert("Inside ON INIT");
    console.log("Inside ON INIT");

  }

  ngAfterViewInit()
{
  console.log("Inside ngAfterViewInit");

}
}
