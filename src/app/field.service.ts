import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class FieldService {
  private currentUser:any;
  constructor(private http: HttpClient, private route: Router) {

    let user=localStorage.getItem('currentUser');
    if(localStorage.getItem("currentUser"))
    this.setUser(JSON.parse(user?user:""))
   

  }
  private role: any;

  public requestOptions = {
    withCredentials: true 
  }

  public getRole(): string {
    if (this.currentUser) {
      let roles: [] = this.currentUser['roles'];
      //@ts-ignore
      this.role = roles[0];
    }
    return this.role;
  }

  private apiUrl: any = 'http://16.171.17.209:8888';
 
  public isloggedIn() {
    if (this.currentUser != null) return true;
    else return false;
  }

  public getUser() {
    return this.currentUser;
  }
  public setUser(user: any) {
    this.currentUser = user;
    localStorage.setItem("currentUser",JSON.stringify(user));
  }

  public registerUser(userDto: any): Observable<any> {
    return this.http.post<any>(
      `${this.apiUrl}/register/${userDto['roles']}`,
      userDto
    );
  }

  public logout() {
    window.localStorage.removeItem('currentUser');
    this.currentUser = null;
  }



  public signIn(loginDto: any): Observable<any> {
    const headers = new HttpHeaders({
      Authorization:
        'Basic ' + btoa(`${loginDto.username}:${loginDto.password}`),
    });

    return this.http.get(`${this.apiUrl}`, { headers });
  }

  public registerService(serviceData:any):Observable<any>{
    
    return this.http.post(this.apiUrl+'/addService',serviceData,this.requestOptions);
  }


  public getWorkerList():Observable<any>{

    return this.http.get(this.apiUrl+"/workerlist",this.requestOptions)
  }

  
  public getServiceList():Observable<any>{

    return this.http.get(this.apiUrl+"/servicelist",this.requestOptions)
  }


  public bookServiceOrWorker(book:any):Observable<any>{

    return this.http.post(this.apiUrl+"/bookWorkerOrService",book,this.requestOptions)
  }
}
