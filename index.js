const input = document.getElementById("input");
const toCelsius = document.getElementById("toCelsius");
const toFahrenheit = document.getElementById("toFahrenheit");
const butn = document.getElementById("butn");
const result = document.getElementById("result");
let temp;

function btn() {
    if (toCelsius.checked) {
        temp=Number(input.value);
        temp = (temp - 32) * (5/9);
        result.textContent=temp.toFixed(1)+"°F";
    }
    else if(toFahrenheit.checked){
        temp=Number(input.value);
        temp = temp * 1.8 + 32;
        result.textContent=temp.toFixed(1)+"°C";
    }
    else{
        result.textContent="Select one conversion!"
    }
}