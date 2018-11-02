import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-show-branch',
  templateUrl: './show-branch.component.html',
  styleUrls: ['./show-branch.component.css']
})
export class ShowBranchComponent implements OnInit {

  @Input() cityName:string;
  @Output() branches:EventEmitter<string[]> = new EventEmitter<string[]>() ;
  constructor() {

console.log(this.cityName);

   }

  ngOnInit() {
  }

  sendBranches()
  {
    if(this.cityName=='hyd')
    {
        this.branches.emit(['ha1','ha2']);
    }
   // if(this.cityName=='chn')
   else
    {
      this.branches.emit(['ca1','ca2']);
    }
  }
}
