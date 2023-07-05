import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { DaumDetalleObjetivo, MetaOe } from 'src/app/core/models/detalleObjetivo.interface';
import { environment } from '../../../environments/environment.prod';
import { Root, ObjetivoModelI } from '../../core/models/objetivos.interfaces';
import { ObjetivoDeleteI } from '../../core/interfaces-crud/objetivo-post';


@Injectable({
  providedIn: 'root'
})
export class ObjetivosService {
  
  
  private urlEnviro:string;
  private urlListar: string ;
  private urlListarxId: string;
  private urlPost:string;
  private urlDelete:string;

  constructor(private httpclient: HttpClient) 
  { 
  this.urlEnviro = environment.EndPoint ;
  this.urlListar='api/ObjetivoEstrategico/ListarxEstado?estado=';
  this.urlListarxId='api/ObjetivoEstrategico/ListarxID?id=';
  this.urlPost='api/ObjetivoEstrategico/Insertar';
  this.urlDelete='api/ObjetivoEstrategico/Eliminar';
  }

  getAllObjetivo(): Observable<any> {
    return this.httpclient.get(`${this.urlEnviro+this.urlListar}1`).pipe(
      map(({ data }: any) => {
        return data;
      })
    );
  }
  // getAllObjetivo(): Observable<any[]> {
  //   return this.httpclient.get<any[]>(this.urlapp+this.urlapi)
  // }
  //listar por id
  
  getObjetivo(id:number):Observable<DaumDetalleObjetivo>{
    return this.httpclient.get<DaumDetalleObjetivo>(this.urlEnviro+this.urlListarxId+id);
  }

  postObjetivo(post:ObjetivoModelI):Observable<ObjetivoModelI>
  {
    return this.httpclient.post<ObjetivoModelI>(this.urlEnviro+this.urlPost,post) 
  }


  deleteObjetivo(id:number,usuarioModificacion:1) 
  {
   const requestbody:ObjetivoDeleteI={id,usuarioModificacion}

  return this.httpclient.delete(this.urlEnviro+this.urlDelete,{body:requestbody})
  }

  
}
