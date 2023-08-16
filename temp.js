function convertCelsiusToFahrenheit() {
    var celsiusInput = document.getElementById("celsius");
    var fahrenheitInput = document.getElementById("fahrenheit");
    var resultElement = document.getElementById("result");

    if (celsiusInput.value !== "") {
      var celsius = parseFloat(celsiusInput.value);
      var fahrenheit = (celsius * 9/5) + 32;
      fahrenheitInput.value = fahrenheit.toFixed(2);
      resultElement.textContent = celsius.toFixed(2) + " Celsius = " + fahrenheit.toFixed(2) + " Fahrenheit";
    } else if (fahrenheitInput.value !== "") {
      var fahrenheit = parseFloat(fahrenheitInput.value);
      var celsius = (fahrenheit - 32) * 5/9;
      celsiusInput.value = celsius.toFixed(2);
      resultElement.textContent = fahrenheit.toFixed(2) + " Fahrenheit = " + celsius.toFixed(2) + " Celsius";
    } else {
      resultElement.textContent = "Please enter a temperature.";
    }
  }