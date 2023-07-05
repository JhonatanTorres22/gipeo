import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from '../../../../environments/environment.prod';
@Injectable({
  providedIn: 'root'
})
export class DashboardService {
private Listar:string = "api/ObjetivoEstrategico/ListarxEstado?estado="
  constructor(private http:HttpClient) { }

  
}
