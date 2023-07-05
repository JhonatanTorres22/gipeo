import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { AccionesModelI } from 'src/app/core/models/acciones.interface';
import { DetalleAccionesModelI } from 'src/app/core/models/detalle-acciones.interface';
import { environment } from '../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AccionesService {

  private urlListar: string;
  private urlEnviero:string;

  constructor(private httpclient: HttpClient) {
    this.urlEnviero = environment.EndPoint;
    this.urlListar = 'api/AccionEstrategica/ListarxObjetivoEstrategico?iDobjetivoEstrategico='
   }

  // getAllAcciones(): Observable<any> {
  //   return this.httpclient.get(`${this.urlListar}1`).pipe(
  //     map(({ data }: any) => {
  //       return data;
  //     })
  //   );
  // }

  
  getAcciones(id:number):Observable<AccionesModelI>{
    return this.httpclient.get<AccionesModelI>(this.urlEnviero+this.urlListar+id);
  }

}
