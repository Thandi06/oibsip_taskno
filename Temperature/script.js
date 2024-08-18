function convertTemperature() {
    const inputTemp = document.getElementById('inputTemp').value;
    const inputUnit = document.getElementById('inputUnit').value;
    const resultDiv = document.getElementById('result');

    if (isNaN(inputTemp)) {
        resultDiv.textContent = 'Please enter a valid number';
        return;
    }

    const temp = parseFloat(inputTemp);
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
