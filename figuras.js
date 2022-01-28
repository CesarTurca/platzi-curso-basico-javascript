    //Código del cuadrado
console.group("cuadrados");

 
function perimetroCuadrado(lado) {
    return lado * 4;
}


function areaCuadrado(lado) {
    return lado * lado;
}

console.groupEnd();

    //Código tringulo
console.group("Triangulos");

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}



function areaTriangulo(base, altura){
    retun (base * altura) / 2;
}

console.groupEnd();

    //Código del círculo
console.group("Círculos");

//Radio
/* const radioCirculo = 4;
console.log("El radio del cículo es: " + radioCirculo + "cm"); */

//Diámetro
function diametroCirculo(radio) {
    return radio * 2;
}


//PI
const PI = Math.PI;


//Circunferencia
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

// Área

function areaCirculo(radio) {
    return (radio * radio) * PI;
}

console.groupEnd();


    // Aquí interactuamos con el HTML

// Cuadrado
function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado"); //nos permite aobtener el valor del documento HTML
    const value = input.value; //guardamos el input del HTML

    const perimetro = perimetroCuadrado(value); //constante que llama la funcion que ejecuta la aritmética con valor de "value"
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

// Triangulo
function calcularPerimetroTriangulo() {
    let inputLado1 = document.getElementById("InputLado1-Triangulo");
    let inputLado2 = document.getElementById("InputLado2-Triangulo");
    let inputBase = document.getElementById("inputBase-Triangulos")
    let valueLado1 = number(inputLado1.value);
    let valueLado2 = number(inputLado2.value);
    let valueBase = number(inputBase.value);

    let perimetro = perimetroTriangulo(valueLado1, valueLado2, valueBase);

    alert(perimetro);
}

function calcularAreaTriangulo() {
    let inputBase = document.getElementById("inputBase-Triangulo");
    let inputAltura = document.getElementById("inputAlto-Triangulo");
    let valueBase = inputBase.value;
    let valueAltura = inputAltura.value;
    
    const area = areaTriangulo(valueBase, valueAltura);

    alert(area);
}

// Circulo
function calcularPerimetroCirculo() {
    const input = document.getElementById("inpuCirculo");
    const value = input.value;
    const perimetro = perimetroCirculo(value);

    alert(perimetro);
}

function calcularAreaCirculo() {
    const input = document.getElementById("inputCirculo");
    const value = input.value;
    const area = areaCirculo(value);
    alert(area);
}