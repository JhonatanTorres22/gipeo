import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-indicador-poa',
  templateUrl: './indicador-poa.component.html',
  styleUrls: ['./indicador-poa.component.scss']
})
export class IndicadorPoaComponent implements OnInit {

  selectedId: number | null = null;

  selectButton(id: number) {
    this.selectedId = id;
  }


  indicador: { poa: Array<any> } = { poa: []}
  constructor(){}

  ngOnInit(): void {
    

    this.indicador.poa = [
      {
        "indicador": "Nº de capacitaciones",
        "alcance": "SL01",
        "meta": "3",
        "avance":"44.43",
        "url": "https://miro" 
    },

    {
      "indicador": "Nivel de satisfacción de la actividad ",
      "alcance": "SL01",
      "meta": "90",
      "avance":"92",
      "url": "https://miro" 
  },

  {
    "indicador": "%  de colaboradores que logran un aprendizaje satisfactorio",
    "alcance": "SL01",
    "meta": "75",
    "avance":"0",
    "url": "https://miro" 
},
  ]
  }

}
