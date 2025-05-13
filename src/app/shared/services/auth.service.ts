import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { CookieService } from 'ngx-cookie-service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
      token:any = localStorage.getItem("MedicalToken");
      httpOptions:any = {
          headers: new HttpHeaders({
            'Authorization': 'Bearer ' +this.token
          }).set("ngrok-skip-browser-warning", "true")
      };
  baseUrl:any
  configGet:any ={headers: new HttpHeaders().set("ngrok-skip-browser-warning", "true")}
  ConfigPost:any = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
  _JwtHelperService =new JwtHelperService()
  constructor(private _HttpClient:HttpClient, private _Router:Router,private _CookieService:CookieService) {
    // this.user = this.getUser(localStorage.getItem('TOKEN')!)
    if(localStorage.getItem('url')==null){
      this.baseUrl = "http://97.74.82.75:9586/api/"
    }else{
      this.baseUrl = ''
      this.baseUrl = 'https://'+localStorage.getItem('url')
    }
   }
  logInForm(Model:any){
    // this.user = this.getUser(localStorage.getItem('TOKEN')!) 
    return this._HttpClient.post(this.baseUrl+'Users/Login' , Model );
  }


    //    Change Password

  redirectTo(uri: string) {
    this._Router.navigateByUrl('/', { skipLocationChange: true }).then(() =>
    this._Router.navigate([uri]));
 }
  isLoggedIn(){
    // var token = localStorage.getItem("MedicalToken");
    var token = this._CookieService.get('MedicalToken')
    return !this._JwtHelperService.isTokenExpired(token);
    // return JSON.parse(token); 

    }
  getUserType(){
    return localStorage.getItem('userType')
    }

}


