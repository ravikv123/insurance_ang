import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-quote-binding',
  templateUrl: './show-quote-binding.component.html',
  styleUrls: ['./show-quote-binding.component.css']
})
export class ShowQuoteBindingComponent implements OnInit {

  isDisabled=true;
  age=18;
  suggestedPolicy:string;
  constructor() { }

  ngOnInit() {
  }

  showPolicy()
  {
    console.log(this.isDisabled+":"+this.age);
    if(this.age>30){
      this.suggestedPolicy="policy1";
    }
    else{
      this.suggestedPolicy="policy2";
    }
  }

  changeStatus()
  {
    this.isDisabled=false;
  }
}
