import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { AccionesModelI } from 'src/app/core/models/acciones.interface';
import { environment } from '../../../environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class DetalleAccionesService {

  private urlListar: string;
  private urlEnviro:string;

  constructor(private httpclient: HttpClient) { 
    this.urlListar = 'api/DetalleAccionEstrategica/ListarxAccionEstrategica?idAccionEstrategica=';
    this.urlEnviro=environment.EndPoint;
  }

  // getAllDetalleAcciones(): Observable<any> {
  //   return this.httpclient.get(`${this.urlListar}1`).pipe(
  //     map(({ data }: any) => {
  //       return data;
  //     })
  //   );
  // }

  getDetalleAcciones(id:number): Observable<AccionesModelI>{ 
  return this.httpclient.get<AccionesModelI>(this.urlEnviro+this.urlListar+id);
  }
  // error => {
  //   console.error(error);
  // }
}
