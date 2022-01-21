//Código del cuadrado
console.group("cuadrados");
/* const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden " + ladoCuadrado + " cm");
 */
function perimetroCuadrado() {
    return ladoCuadrado * 4;
};
/* console.log("El erimetro del cuadrado es: " + perimetroCuadrado + " cm"); */

function areaCuadrado() {
    return ladoCuadrado * ladoCuadrado;
};
/* console.log("El área del cuadrado es: " + areaCuadrado + " cm");
console.groupEnd(); */

//Código tringulo
/* console.group("Triangulos");
const ladoTriangulo = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
console.log("Los lados del triángulo miden: " + ladoTriangulo + "cm, " + ladoTriangulo2 + "cm2 " + baseTriangulo + "cm");

const alturaTriangulo = 5.5;
console.log("la altura del triangulo es de: " + alturaTriangulo + "cm"); */

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
};
/* console.log("El perimetro del triangulo es: " + perimetroCuadrado + "cm"); */


function areaTriangulo(base, altura){
    retun (base * altura) / 2;
}
/* console.log(" El área del triangulo es: " + areaTriangulo + "cm");
 */
console.groupEnd();

//Código del círculo
console.group("Círculos");

//Radio
/* const radioCirculo = 4;
console.log("El radio del cículo es: " + radioCirculo + "cm"); */

//Diámetro
function diametroCirculo(radio) {
    return radio * 2;
};


//PI
const PI = Math.PI;
console.log("PI es: " + radioCirculo);

//Circunferencia
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
};

// Área

function areaCirculo(radio) {
    return (radio * radio) * PI;
};

console.groupEnd();