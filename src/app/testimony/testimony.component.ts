import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimony',
  templateUrl: './testimony.component.html',
  styleUrls: ['./testimony.component.css']
})
export class TestimonyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

getRetailCustFeedback():string{
return 'retail cust feedbak data';
}

getCorpCustFeedback():string{
  return 'Corp cust feedbak data';
}

}
