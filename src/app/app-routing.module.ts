import { LogoutComponent } from './logout/logout.component';
import { SearchBranchComponent } from './search-branch/search-branch.component';
import { ShowQuoteComponent } from './show-quote/show-quote.component';
import { ShowAdvisorsComponent } from './show-advisors/show-advisors.component';
import { ShowPolicyDetailsComponent } from './show-policy-details/show-policy-details.component';
import { ContentComponent } from './content/content.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UniversalGuard } from './universal.guard';
import { PolicyDetails1Component } from './policy-details1/policy-details1.component';
import { ShowPolicyDetails1Component } from './show-policy-details1/show-policy-details1.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent, },
  {path: 'login/:msg', component: LoginComponent},
  {path: 'products', component: ContentComponent},
  {path: 'history', component: PolicyDetails1Component, canActivate:[UniversalGuard], children:[
    {path: 'health', component: ShowPolicyDetailsComponent},
    {path: 'life', component: ShowPolicyDetails1Component}
  ]},
  {path: 'advisors', component: ShowAdvisorsComponent},
  {path: 'quote', component: ShowQuoteComponent},
  {path: 'branches', component: SearchBranchComponent},
  {path: 'logout', component: LogoutComponent, canActivate:[UniversalGuard]},
  {path: '**' , redirectTo: 'login'}
];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
