var c = toCelsius();
 var ctext = "the temperature is " + c + " celsius";
 var f = toFahrenheit();
 var ftext ="the temperature is " + f + " fahrenheit";


function toCelsius(fahrenheit) {
return(5/9) * (fahrenheit-32);

}

function toFahrenheit(celsius) {
return (5/9) * (celsius + 32)
}


function convertTemp(temp, unit) {
  if(unit === "c") {
    return (temp - 32) * 5/9;
  }

    else (unit === "f"); {
      return (temp * 9/5) + 32;}

}




console.log(convertTemp(212, "c"))
console.log(convertTemp(32, "c"))
console.log(convertTemp(65, "c"))
console.log(convertTemp(100, "f"))
console.log(convertTemp(-40, "f"))
