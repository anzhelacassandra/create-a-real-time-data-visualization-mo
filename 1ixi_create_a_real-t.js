// 1ixi_create_a_real-t.js

// Data Model
class RealtimeMonitor {
  constructor(id, name, datatype, units, maxValue, maxValueColor, minValue, minValueColor) {
    this.id = id;
    this.name = name;
    this.datatype = datatype;
    this.units = units;
    this.maxValue = maxValue;
    this.maxValueColor = maxValueColor;
    this.minValue = minValue;
    this.minValueColor = minValueColor;
    this.values = [];
  }

  addValue(value) {
    this.values.push({ timestamp: Date.now(), value: value });
    if (this.values.length > 100) { // keep last 100 values
      this.values.shift();
    }
  }

  getLatestValue() {
    return this.values[this.values.length - 1].value;
  }

  getValues() {
    return this.values;
  }
}

// Sample monitors
const temperatureMonitor = new RealtimeMonitor('temperature', 'Temperature', 'number', '°C', 40, 'red', 0, 'blue');
const humidityMonitor = new RealtimeMonitor('humidity', 'Humidity', 'number', '%', 80, 'orange', 30, 'green');

// Simulate data generation
setInterval(() => {
  temperatureMonitor.addValue(Math.random() * 40);
  humidityMonitor.addValue(Math.random() * 100);
}, 1000);

// Real-time visualization (to be implemented using library like D3.js or Chart.js)
document.addEventListener('DOMContentLoaded', () => {
  // Render initial charts
  renderChart(temperatureMonitor);
  renderChart(humidityMonitor);

  // Update charts in real-time
  setInterval(() => {
    updateChart(temperatureMonitor);
    updateChart(humidityMonitor);
  }, 1000);
});

function renderChart(monitor) {
  // TO DO: implement chart rendering using D3.js or Chart.js
  console.log(`Render chart for ${monitor.name}`);
}

function updateChart(monitor) {
  // TO DO: implement chart updating using D3.js or Chart.js
  console.log(`Update chart for ${monitor.name}`);
}