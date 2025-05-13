import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Location } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { CookieService } from 'ngx-cookie-service';

declare var $: any
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  res: any;
  UserType: any = '';
  errorEsist: boolean = false;
  isClicked: boolean = false;
  permissions: any = false;
  constructor(private location: Location, private _AuthService: AuthService, private _CookieService: CookieService, private _Router: Router) {
  }

  loginForm: FormGroup = new FormGroup({
    'userName': new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(22)]),
    'password': new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(22)])
  });

  redirectTo(uri: string) {
    this._Router.navigateByUrl('/', { skipLocationChange: true }).then(() =>
      this._Router.navigate([uri]));
  }
  async submitLoginForm() {
    this.isClicked = true;
    let Model = this.loginForm.value;
    this._AuthService.logInForm(Model).subscribe(async (res: any) => {
      console.log(res);
      await localStorage.setItem("userType", window.atob(res.token?.split('.')[1]))  ///
      //  Coocie 
      this._CookieService.set('MedicalToken', res.token)
      if (this.loginForm.get('userName')?.value == 'User@123') {
        await this._Router.navigate(['/products'])
      } else {
        await this._Router.navigate(['/productsAdmin'])
      }


      await window.location.reload()
      this.isClicked = false;
    }, error => {
      this.errorEsist = true;
      // this._ToastrService.error('Invalid User Name Or Password', "Error Occurred");
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error.error,
      })
      this.isClicked = false;
    })
  }


  ngOnInit(): void {
  }
}
