import { Component, OnInit } from '@angular/core';
import { PageLink } from '../footer/pagelink';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  majHeader: string;
  logo: string;
  linkText: string = "Login";
  links: PageLink[];
  constructor() {
    this.majHeader = "Insurance Company";
    this.logo = "assets/images/logo.JPG";
    this.links=[
      {linkText:'Home',linkRef:'home',linkStyle:'nav-link'},
      {linkText:'Products',linkRef:'products',linkStyle:'nav-link'},
      {linkText:'History',linkRef:'history',linkStyle:'nav-link'},
      {linkText:'Advisors',linkRef:'advisors',linkStyle:'nav-link'},
      {linkText:'get Quote',linkRef:'quote',linkStyle:'nav-link'},
      {linkText:'Branchs',linkRef:'branches',linkStyle:'nav-link'}
    ];
    
  }

  ngOnInit() {
  }

}

