import { Component } from '@angular/core';
import { style } from '@angular/animations';
declare var google:any;

@Component({
  selector: 'app-graficos',
  templateUrl: './graficos.component.html',
  styleUrls: ['./graficos.component.scss']
})
export class GraficosComponent {

  ngOnInit(): void {
    // google.charts.load('current', {packages:['corechart']});
    //   google.charts.setOnLoadCallback(this.DrawChart);

    // google.charts.load('current', {'packages':['corechart']});
    // google.charts.setOnLoadCallback(this.drawChart);

  }


  drawChart() {
    // Realiza la petición a la API de CoinGecko para obtener los datos de precios
    fetch('https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=7')
      .then(response => response.json())
      .then(data => {
        // Extrae los datos de precios de Bitcoin (BTC) y Ethereum (ETH)
        const btcPrices = data.prices.map((price: any[]) => price[1]);
        const ethPrices = data.prices.map((price: number[]) => price[1] * 2); // Solo como ejemplo, multiplicamos por 2 los precios de ETH

        // Crea una matriz con los datos del gráfico
        const chartData = [['Día', 'Bitcoin (BTC)', 'Ethereum (ETH)']];
        for (let i = 0; i < btcPrices.length; i++) {
          chartData.push([`Día ${i+1}`, btcPrices[i], ethPrices[i]]);
        }

        // Crea una tabla de datos de Google Charts
        const dataTable = google.visualization.arrayToDataTable(chartData);

        // Configura las opciones del gráfico
        const options = {
          title: 'Precios de Bitcoin (BTC) y Ethereum (ETH)',
          hAxis: {title: 'Día'},
          vAxis: {title: 'Precio (USD)'},
          seriesType: 'bars',
          series: {1: {type: 'line'}}
        };

        // Crea el gráfico de diferencia de columnas
        var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
        chart.draw(dataTable, options);
      });
  }
}
