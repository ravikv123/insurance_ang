import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InsuranceAdvisor } from './insurance-advisor';
import { PolicyDetailsFilter } from './policy-details-filter';

@Injectable({
  providedIn: 'root'
})
export class InsuranceAPIService {

  baseURL='http://localhost:3000/';
  lifeInsURL = `${this.baseURL}lifeInsurance`;
header = new HttpHeaders().set('content-type','application/json');


  constructor(private http:HttpClient) { }

  findAllAdvisors(): Observable<InsuranceAdvisor[]>{
    //const adviseURL = this.baseURL+'advisors';
    const adviseURL = `${this.baseURL}advisors`;
    return this.http.get<InsuranceAdvisor[]>(adviseURL);
 }

 findAllPolicy(): Observable<PolicyDetailsFilter[]>{
  //const adviseURL = this.baseURL+'advisors';
  console.log(this.lifeInsURL);
  return this.http.get<PolicyDetailsFilter[]>(this.lifeInsURL);
}

addPolicy(policy:PolicyDetailsFilter):Observable<PolicyDetailsFilter>{
  return this.http.post<PolicyDetailsFilter>(this.lifeInsURL,policy,{headers:this.header});
}

updatePolicy(policy:PolicyDetailsFilter):Observable<PolicyDetailsFilter>{
  return this.http.put<PolicyDetailsFilter>(this.lifeInsURL+"/"+policy.id,policy,{headers:this.header});
}

deletePolicy(policy:PolicyDetailsFilter):Observable<PolicyDetailsFilter>{
  console.log(policy.id);
return this.http.delete<PolicyDetailsFilter>(this.lifeInsURL+"/"+policy.id,{headers:this.header});
}
}
