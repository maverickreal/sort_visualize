import { sort } from "./utility/sort/index.js";

const refreshChart = () => {
    const chart = document.getElementById('chart');
    chart.innerHTML = '';
    for (let i = 0; i < 100; i++) {
        const randNum = Math.random() * 300;
        const barDiv = document.createElement('div');
        barDiv.className = 'bar'
        barDiv.style.height = `${randNum}px`;
        barDiv.style.width = '0.5em';
        barDiv.style.backgroundColor = 'mediumaquamarine';
        barDiv.style.border = '1px solid black';
        chart.appendChild(barDiv);
    }
}

document.addEventListener('DOMContentLoaded', refreshChart);
document.getElementById('refresh').addEventListener('click', refreshChart);
document.getElementById('sort').addEventListener('click', () => {
    sort(document.getElementsByClassName('bar'), 'insertion');
});