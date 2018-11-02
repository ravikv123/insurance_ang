import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-life-cycle-child',
  templateUrl: './life-cycle-child.component.html',
  styleUrls: ['./life-cycle-child.component.css']
})
export class LifeCycleChildComponent implements OnInit, OnChanges {
 @Input() name: string;
  constructor() {
    console.log('child cons');
   // alert('child cons called');
   // alert('input property'+this.name);

   }

  ngOnInit() {
    console.log('child oninit');
    //alert('child oninit called');
    //alert('input property:'+this.name);
  }

  ngOnChanges(change:SimpleChanges)
  {
    console.log("currentValue:"+change.name.currentValue+", previousValue:"+change.name.previousValue);
  }
}
