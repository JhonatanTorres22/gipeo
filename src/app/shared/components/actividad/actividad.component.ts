import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-actividad',
  templateUrl: './actividad.component.html',
  styleUrls: ['./actividad.component.scss']
})
export class ActividadComponent implements OnInit {

  // activacion del boton
  selectedId: number | null = null;

  selectButton(id: number) {
    this.selectedId = id;
  }

  actividad: { poa: Array<any> } = { poa: []}
  constructor(){}

  ngOnInit(): void {
    
      this.actividad.poa = [
        {
          "id":"1",
          "codigo": "OE01.03.03.001 ",
          "actividad": "Habilitar implementos para el servicio",
          "alcance": "SL01",
          "uen": "Institucional",
          "avance":"45.48",
          "presupuesto": "553'430.00",
          "gasto": "94'840.00",
          "informacion":"fa fa-book",
          "mejora": "fa fa-book"
         
      },

      {
        "codigo": "OE01.03.03.002 ",
        "actividad": "Habilitar implementos para el servicio",
        "alcance": "SL02",
        "uen": "Escuela Posgrado",
        "avance":"0.00",
        "presupuesto": "553'430.00",
        "gasto": "94'840.00",
        "informacion":"fa fa-book",
        "mejora": "fa fa-book"
       
    },

    {
      "codigo": "OE01.03.03.003 ",
      "actividad": "Habilitar implementos para el servicio",
      "alcance": "F01L0",
      "uen": " Ingeniería de sistemas",
      "avance":"0.00",
      "presupuesto": "553'430.00",
      "gasto": "94'840.00",
      "informacion":"fa fa-book",
      "mejora": "fa fa-book"
  },

  {
    "codigo": "OE01.03.03.004 ",
    "actividad": "Capacitar al personal de seguridad",
    "alcance": "SL01",
    "uen": " Institucional",
    "avance":"51.30",
    "presupuesto": "553'430.00",
    "gasto": "94'840.00",
    "informacion":"fa fa-book",
    "mejora": "fa fa-book"
},

{
  "codigo": "OE01.03.03.005 ",
  "actividad": "Capacitar al personal de seguridad",
  "alcance": "SL02",
  "uen": " Institucional",
  "avance":"83.00",
  "presupuesto": "553'430.00",
  "gasto": "94'840.00",
  "informacion":"fa fa-book",
  "mejora": "fa fa-book"
},

{
  "codigo": "OE01.03.03.006 ",
  "actividad": "Capacitar al personal de seguridad",
  "alcance": "F01L0",
  "uen": " Institucional",
  "avance":"0.00",
  "presupuesto": "553'430.00",
  "gasto": "94'840.00",
  "informacion":"fa fa-book",
  "mejora": "fa fa-book"
},



      ]
  }
}
