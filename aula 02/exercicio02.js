function Converter() {
    
    let fahrenheit = Number(document.getElementById("tempF").value);
    

    let celsius = ((fahrenheit - 32) * 5) / 9;


    document.getElementById("resultado").innerHTML = 
        "A temperatura em Celsius é: " + celsius.toFixed(1) + "°C";
}