import { sort } from "./utility/sort/index.js";

const sortButton = document.getElementById('sort');
const refreshButton = document.getElementById('refresh');

const refreshChart = () => {
    const size = parseInt(document.getElementById('size').value) || 100;
    const chart = document.getElementById('chart');
    chart.innerHTML = '';
    for (let i = 0; i < size; i++) {
        const randNum = Math.random() * 300;
        const barDiv = document.createElement('div');
        barDiv.className = 'bar'
        barDiv.style.height = `${randNum}px`;
        barDiv.style.width = '0.5em';
        barDiv.style.backgroundColor = 'mediumaquamarine';
        barDiv.style.border = '1px solid black';
        chart.appendChild(barDiv);
    }
    sortButton.disabled = false;
}
document.addEventListener('DOMContentLoaded', refreshChart);
refreshButton.addEventListener('click', refreshChart);

sortButton.addEventListener('mouseup', () => {
    const selectedAlgo = document.getElementsByTagName('select')[0].value;
    if (selectedAlgo == 0) {
        return alert('Select a sorting algorithm first!');
    }
    sort(document.getElementsByClassName('bar'), selectedAlgo);
    Array.from(document.getElementsByClassName('clickable')).forEach(clickable => clickable.disabled = true);
});