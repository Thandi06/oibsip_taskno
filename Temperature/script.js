function convertTemperature() {
    let inputTemp = document.getElementById('inputTemp').value;
    let inputUnit = document.getElementById('inputUnit').value;
    let resultDiv = document.getElementById('result');

    if (isNaN(inputTemp)) {
        resultDiv.textContent = 'Please enter a valid number';
        return;
    }

    let temp = parseFloat(inputTemp);
    let convertedTemp;

    if (inputUnit === 'C') {
        // If input is in Celsius, no conversion needed
        convertedTemp = temp;
        resultDiv.textContent = `${convertedTemp.toFixed(2)} °C`;
    } else if (inputUnit === 'F') {
        // Convert Fahrenheit to Celsius
        convertedTemp = (temp - 32) * 5/9;
        resultDiv.textContent = `${convertedTemp.toFixed(2)} °C`;
    } else if (inputUnit === 'K') {
        // Convert Kelvin to Celsius
        convertedTemp = temp - 273.15;
        resultDiv.textContent = `${convertedTemp.toFixed(2)} °C`;
    }
}
