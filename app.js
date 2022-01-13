const celciusInput = document.querySelector("#celcius");
const fahrehInput = document.querySelector("#fahrenheit");
const kelvinInput = document.querySelector("#kelvin");
const tempInputs = document.querySelectorAll("input");

tempInputs.forEach(function(input) {
  input.addEventListener("input", function(e) {
    let tempValue = parseInt(e.target.value);
    // console.log(typeof tempValue);
    let inputName = e.target.name;

    if (e.target.value === "") {
      celciusInput.value = null;
      fahrehInput.value = null;
      kelvinInput.value = null;

      return;
    } 

    if (inputName === "celcius") {
      // Celsius To Fahrenheit
      let fahrehValue = (tempValue * 1.8) + 32;
      fahrehInput.value = fahrehValue.toFixed(2);
      // Celsius To Kelvin
      kelvinInput.value = tempValue + 273.15;

    } else if (inputName === "fahrenheit") {
      // Fahrenheit To Celcius
      let celciusValue = (tempValue - 32) / 1.8;
      celciusInput.value = celciusValue.toFixed(2);
      // Fahrenheit To Kelvin
      let kelvinValue = (tempValue - 32) / 1.8 + 273.15;
      kelvinInput.value = kelvinValue.toFixed(2);

    }  else if (inputName === "kelvin") {
      // Kelvin To Celcius
      let celciusValue = tempValue - 273.15;
      celciusInput.value = celciusValue.toFixed(2);
      // Kelvin To Fahrenheit
      let fahrenheitValue = (tempValue -273.15) * 1.8 + 32
      fahrehInput.value = fahrenheitValue.toFixed(2);
    }
  })
})