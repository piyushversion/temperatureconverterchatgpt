document.getElementById('convertButton').addEventListener('click', convertTemperature);

function convertTemperature() {
  const temperatureInput = document.getElementById('temperatureInput').value.trim();
  const unitSelect = document.getElementById('unitSelect').value;
  const resultArea = document.getElementById('resultArea');

  // Validate input: Check if the temperature input is a number
  if (!isNaN(temperatureInput)) {
    const temperature = parseFloat(temperatureInput);

    // Perform conversion based on selected unit
    if (unitSelect === 'celsius') {
      const convertedTemperature = (temperature * 9/5) + 32;
      resultArea.textContent = `Converted Temperature: ${convertedTemperature.toFixed(2)}°F`;
    } else {
      const convertedTemperature = (temperature - 32) * 5/9;
      resultArea.textContent = `Converted Temperature: ${convertedTemperature.toFixed(2)}°C`;
    }
  } else {
    resultArea.textContent = 'Invalid input. Please enter a valid number.';
  }
}
