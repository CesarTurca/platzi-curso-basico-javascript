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

function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}