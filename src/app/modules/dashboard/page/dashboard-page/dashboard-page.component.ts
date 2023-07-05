import { Component, OnInit, Input } from '@angular/core';
import { ObjetivoModelI } from 'src/app/core/models/objetivos.interfaces';

import { ObjetivosService } from 'src/app/shared/services/objetivos.service';


@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent{

  objetivos:Array<ObjetivoModelI> = []

  constructor (private objetivoService: ObjetivosService ){}

  ngOnInit(): void {
   
    this.objetivoService.getAllObjetivo().subscribe(
      e=>this.objetivos =e
    )
  }
}
