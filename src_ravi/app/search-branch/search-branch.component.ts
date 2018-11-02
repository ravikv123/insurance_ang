import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ComponentAdderService } from '../component-adder.service';
import { ShowLocationComponent } from '../show-location/show-location.component';

@Component({
  selector: 'app-search-branch',
  templateUrl: './search-branch.component.html',
  styleUrls: ['./search-branch.component.css']
})
export class SearchBranchComponent implements OnInit {

  srchCity='';
  cityList:string[];

  @ViewChild('locationInfo',{read:ViewContainerRef}) viewRef:ViewContainerRef
  constructor(private service:ComponentAdderService) { }

  ngOnInit() {
  }

onChange(val){
this.cityList = val;
}

add(){
  
this.service.setViewRef(this.viewRef);
const conp = this.service.addComponent(ShowLocationComponent);
const locationComp = (<ShowLocationComponent>conp.instance);
locationComp.selectedLocation.subscribe(value=> {this.srchCity=value; if(value!='') {this.remove()}}, err=>console.log(err));
}

remove(){
  this.service.removeComponent();
}

}
