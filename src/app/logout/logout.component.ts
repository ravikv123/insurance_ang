import { Component, OnInit } from '@angular/core';
import { LoginCommunicationService } from '../login-communication.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private service:LoginCommunicationService) { }

  ngOnInit() {
  }

  signout()
  {
    this.service.changeMessage('loggedout');
  }

}
