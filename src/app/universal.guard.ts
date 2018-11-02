import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UniversalGuard implements CanActivate,CanDeactivate<any> {

  constructor(private route:Router)
{

}

  canDeactivate(component: any, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?:
     RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
   /*
    const retVal = window.confirm('are you sure?');
    console.log("retVal:"+retVal)
      if(!retVal)
      {
        const url = currentState.root.url;
        console.log("retVal:"+retVal+":url:"+url)
     //   this.route.navigate(['home']);
     //   return false;
      }
    return retVal;*/
   // window.alert('Logged in success');
    return true;
  }


  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):boolean {
      let allow=false;
    
      console.log('state.url:'+state.url);
      if(state.url=='/logout')
      {
        const retVal = window.confirm('are you sure?');
        return retVal;
      }
      else
      {
    
      if(sessionStorage.getItem('logged') === 'true')
    {
      allow = true;
    }
    else
    {
      this.route.navigate(['login','Should Log to access']);
    }
  }
      return allow;
  }
}
