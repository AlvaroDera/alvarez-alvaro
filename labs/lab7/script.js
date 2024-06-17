// script.js
function generateFibonacci() {
    const n = parseInt(document.getElementById('inputNumber').value);
    const resultElement = document.getElementById('result');
    
    if (isNaN(n) || n <= 0) {
        resultElement.textContent = "Please enter a valid positive integer.";
        return;
    }
    
    const fibonacciSeries = getFibonacciSeries(n);
    const jsonResult = JSON.stringify(fibonacciSeries, null, 2);
    resultElement.textContent = jsonResult;
}

function getFibonacciSeries(n) {
    if (n === 1) return [0];
    if (n === 2) return [0, 1];
    
    const series = [0, 1];
    for (let i = 2; i < n; i++) {
        series.push(series[i - 1] + series[i - 2]);
    }
    return series;
}
