import Chart from 'chart.js/auto';
import pobranyJson from 'http://imiki.pl/cf/' assert { type: 'json' };

// Przetworzenie danych pobranych z API w celu wyodrębnienia temperatur
const labels = pobranyJson.data.map(item => item.timestamp_local);
const temperatures = pobranyJson.data.map(item => item.state.temperature);

// Utworzenie elementu canvas, na którym będzie rysowany wykres
const canvas = document.createElement('canvas');
document.body.appendChild(canvas);

// Utworzenie instancji wykresu
const chart = new Chart(canvas, {
  type: 'line',
  data: {
    labels: labels,
    datasets: [
      {
        label: 'Temperatura',
        data: temperatures,
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }
    ]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});
