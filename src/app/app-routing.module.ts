import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ContentComponent } from './content/content.component';
import { ShowPolicyDetailsComponent } from './show-policy-details/show-policy-details.component';
import { ShowAdvisorsComponent } from './show-advisors/show-advisors.component';
import { ShowQuoteBindingComponent } from './show-quote-binding/show-quote-binding.component';
import { SearchBranchComponent } from './search-branch/search-branch.component';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'products',component:ContentComponent},
  {path:'history',component:ShowPolicyDetailsComponent},
  {path:'advisors',component:ShowAdvisorsComponent},
  {path:'quote',component:ShowQuoteBindingComponent},
  {path:'branchs',component:SearchBranchComponent},
  {path:'logout',component:LogoutComponent},
  {path:'**',redirectTo:'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
