import { Component } from '@angular/core';
declare var google:any;
@Component({
  selector: 'app-pruebas',
  templateUrl: './pruebas.component.html',
  styleUrls: ['./pruebas.component.scss']
})
export class PruebasComponent {
  ngOnInit(): void {
    google.charts.load('current', {packages:['corechart']});
      google.charts.setOnLoadCallback(this.DrawChart);
  }
DrawChart() {
  
    var oldData = new google.visualization.DataTable();
    oldData.addColumn('string', 'Meses');
    oldData.addColumn({type: 'number',role:'annotationText'}, 'Datos');

    // primera recopilacion de datos
    var jsonData = [
      ['OE01', 100],
      ['OE02', 110],
      ['OE03', 120],
      ['OE04', 130],
      ['OE05', 140],
    ];
    oldData.addRows(jsonData);

    //////////////////////////////////////////////////////////

    // segundo recopilacion de datos

    var newData = new google.visualization.DataTable();
    newData.addColumn('string', 'Meses');
    newData.addColumn({type: 'number',role:'annotationText'}, 'datos');
    var jsonData2 = [
      ['OE01', 120],
      ['OE02', 130],
      ['OE03', 140],
      ['OE04', 150],
      ['OE05', 160]
    ];
    newData.addRows(jsonData2);

    var colChartDiff = new google.visualization.ColumnChart(document.getElementById('colchart_diff'));
  
    var options = { title: 
                          '',
                    legend: 
                         { position: 'top',textStyle: {color: '#EEEAEA', fontSize: 14}, alignment: 'center'}, 
                    diff:
                    {
                    newData:{widthFactor : 1, color:'white',tooltip:{prefix:'Avance'}, type:'number',role:'annotation'},
                    oldData:{color: '#EEEAEA',tooltip:{prefix:'Base'}}
                    }
                    ,
                    diffData:{1:{role:'annotation'}},
                    colors:['red'],
                    backgroundColor: 'black',
                    textStyle:{color:['white']},

                    displayAnnotationsFilter: true,

                    boxStyle: {stroke: 'white'},
                      hAxis: {
                        title: 'Objetivos Estratégicos',
                        
                        viewWindow: {
                        },
                        textStyle: {
                          fontSize: 14,
                          color: 'white',
                          bold: false,
                          italic: true
                        },
                        titleTextStyle: {
                          fontSize: 15,
                          color: 'white',
                          italic: true
                        },
                        
                      },
                      vAxis: {
                        title: '% de Avance',
                        textStyle: {
                          fontSize: 14,
                          color: 'white',
                          bold: false,
                          italic: true
                        },
                        titleTextStyle: {
                          fontSize: 15,
                          color: 'white',
                          bold: false,
                          italic: true
                        },
                      }

                 }
                 
                ;
    
    var diffData = colChartDiff.computeDiff(newData, oldData);
    colChartDiff.draw(diffData, options);
  }
}
