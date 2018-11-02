import { Component, OnInit, AfterViewInit, ViewChild, ChangeDetectorRef, ViewChildren, QueryList } from '@angular/core';
import { PolicyDetails } from '../policy-details';
import { TestimonyComponent } from '../testimony/testimony.component';
import { LoginCommunicationService } from '../login-communication.service';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit, AfterViewInit {
@ViewChild(TestimonyComponent) comp:TestimonyComponent;
@ViewChildren(FooterComponent) sectionList:QueryList<FooterComponent>;

  policyInfo:PolicyDetails[];
  feedback1:string;
  feedback2:string;
showLogin =true;
showLogout=false;

  constructor(private ref: ChangeDetectorRef,private service:LoginCommunicationService) { 
    this.policyInfo=[{policyName:"LIC1",desc:"Poly 1 Desc",amount:50000},
    {policyName:"LIC2",desc:"Poly 2 Desc",amount:60000},
    {policyName:"LIC3",desc:"Poly 3 Desc",amount:70000}];

  }

  ngOnInit() {
    this.service.message.subscribe(status=>
      {
        if(status == 'logged')
        {
          this.showLogin= !this.showLogin;
          this.showLogout=!this.showLogout;
        }
        if(status == 'loggedout')
        {
          this.showLogin= !this.showLogin;
          this.showLogout=!this.showLogout;
        }
      }
      )
  }

  ngAfterViewInit():void{
    this.feedback1=this.comp.getCorpCustFeedback();
    this.feedback2=this.comp.getRetailCustFeedback();
    this.ref.detectChanges();

    console.log(this.sectionList);
  }



}
