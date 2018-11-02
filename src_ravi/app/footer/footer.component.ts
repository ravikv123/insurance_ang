import { Component, OnInit } from '@angular/core';
import { PageLink } from '../page-link';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  footerHeading:string;
  links:PageLink[];
  

  constructor() { 

    this.footerHeading=`
                    Follow us on :
    `;
    this.links=[{linkText:'Twitter',linkStyle:'fa fa-2x fa-twitter'},
    {linkText:'Facebook',linkStyle:'fa fa-2x fa-facebook'},
    {linkText:'insta',linkStyle:'fa fa-2x fa-instagram'}
  ];
  }

  ngOnInit() {
  }

}
