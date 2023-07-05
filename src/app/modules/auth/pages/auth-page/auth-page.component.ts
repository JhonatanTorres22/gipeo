import { Component, OnInit } from '@angular/core';
import { AutService } from '../../services/aut.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginModelI } from 'src/app/core/models/auth.models';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss']
})
export class AuthPageComponent implements OnInit {

  formLogin: FormGroup = new FormGroup ({});
  constructor(private authService: AutService, private router:Router){}

  errorStatus: boolean = false;
  errorMsj: any =  "DATOS SON INCORRECTOS VUELVA A INTENTARLO";

  ngOnInit(): void {
    this.formLogin = new FormGroup(
      {
        nombreDeUsuario: new FormControl( ''  , [
          Validators.required,

        ]),
        contrasenia: new FormControl('',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(9)
        ]) ,
        rol: new FormControl('',[
          Validators.required,
        ]),
      }
    )
    
  }

  onLogin(form: LoginModelI):void{
    this.authService.logIn(form)
    .subscribe((data:any) =>{
      let dataResponse:LoginModelI = data.data.menus;
      console.log(dataResponse);
      this.router.navigate(['dashboard'])
      console.log('Sesión iniciada correctamente');
      
      
    },
    err => {
    this.errorStatus = true
    console.log('Ocurrió un error');
    
  }
    )

  }

}
