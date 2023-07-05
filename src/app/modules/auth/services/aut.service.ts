import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { LoginModelI } from 'src/app/core/models/auth.models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutService {

  private urlEnviro:string;
  private urlLogin:string



  constructor(private httpclient:HttpClient) {

    this.urlEnviro = environment.EndPoint ;
  this.urlLogin =  'api/Persona/Autenticar';
   }

  logIn(form:LoginModelI): Observable<LoginModelI>{
    let direccion = this.urlEnviro+this.urlLogin
    return this.httpclient.post<LoginModelI>(direccion,form);

  }
}
