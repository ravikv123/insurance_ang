import { Component, OnInit, ViewChild } from '@angular/core';
import { InsuranceAPIService } from '../insurance-api.service';
import { PolicyDetailsFilter } from '../policy-details-filter';

@Component({
  selector: 'app-show-policy-details',
  templateUrl: './show-policy-details.component.html',
  styleUrls: ['./show-policy-details.component.css']
})
export class ShowPolicyDetailsComponent implements OnInit {

  @ViewChild('f') form:any;
  constructor(private serive:InsuranceAPIService) { }
  srchName='';
  polictyList:PolicyDetailsFilter[];
  idxPos:number;
  toggleForm=false;
  showUp=true;
  showDown=false;

  policyData:PolicyDetailsFilter = {
    id:0, policyHolderName:'', policyAmount:0, matureDate:new Date()
  }
   buttonText='Add';

  ngOnInit() {
    this.serive.findAllPolicy().subscribe(data=>this.polictyList=data);
  }

  submit(){
    if(this.buttonText=='Add')
    {
      console.log('add');
    this.serive.addPolicy(this.policyData).subscribe(resp=> {
      this.polictyList.push(resp);
    });
    console.log(this.policyData);
    this.form.reset();
  }
  else //uopdate
  {
    console.log('update');
    this.serive.updatePolicy(this.policyData).subscribe(resp=> {
   //   this.polictyList.splice(this.idxPos,1);
   this.polictyList[this.idxPos]=resp;
   this.form.reset();
   this.buttonText='Add';

    });
    console.log(this.policyData);
  }
  }

  update(policy:PolicyDetailsFilter)
  {
    if(!this.toggleForm)
    {
     // this.toggleForm = true;
     this.showForm();
    }
    console.log("update"+policy);
    this.idxPos = this.polictyList.indexOf(policy);
    this.buttonText='Update';
    this.policyData=policy;


  }

  remove(policy:PolicyDetailsFilter)
  {
    console.log(policy.id);
    this.serive.deletePolicy(policy).subscribe(resp=> {
      const idxPos = this.polictyList.indexOf(policy);
      this.polictyList.splice(idxPos,1);
    });
    console.log("remove"+policy);
  }

  showForm()
  {
    this.toggleForm =! this.toggleForm;
    this.showUp =! this.showUp;
    this.showDown =! this.showDown;
  }

}
