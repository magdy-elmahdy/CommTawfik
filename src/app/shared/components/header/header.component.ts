import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
      UserType:any='';
      constructor(public _CookieService:CookieService, public _AuthService:AuthService, private _Router:Router){
        this.UserType = JSON.parse(this._AuthService.getUserType()!)
        // this.UserType  =this.UserType.sub
        if(this.UserType==null){
        }else{
          this.UserType  =this.UserType.sub
        }
      }
      logOut(){
    localStorage.removeItem('MedicalToken')
    this._CookieService.delete('MedicalToken')
    localStorage.removeItem('userType');
    this._Router.navigate(['/login']);
  }
}
