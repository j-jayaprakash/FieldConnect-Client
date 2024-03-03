import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class FieldService {
  constructor(private http: HttpClient,private route:Router) {}

  private apiUrl: any = 'http://www.localhost:8888';

  private currentUser = {};

  public getUser() {
    return this.currentUser;
  }
  

  public registerUser(userDto: any): Observable<any> {
    return this.http.post<any>(
      `${this.apiUrl}/register/${userDto['roles']}`,
      userDto
    );
  }

  public logout(){
   
    window.sessionStorage.removeItem("currentUser");
    
  }

  public signIn(loginDto: any):Observable<any>{
    const headers = new HttpHeaders({
      Authorization:
        'Basic ' + btoa(`${loginDto.username}:${loginDto.password}`),
    });

  let res=  this.http.get(`${this.apiUrl}`, { headers })
    .subscribe(
      response=> {
        // @ts-ignore
      if (response['statusCode'] == 200) {
        // @ts-ignore 
        let currentUser = response['data'];
        sessionStorage.setItem('currentUser', JSON.stringify(currentUser));
        if(sessionStorage.getItem("currentUser")) this.route.navigate(['/dashboard']);
        return currentUser;
      }
    } 
    );

   return new Observable();
  }
}
