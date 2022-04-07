// Código del cuadrado
function perimetroCuadrado(lado){
    return lado * 4;
}
function areaCuadrado(lado){
    return lado * lado;
};

function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    let perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    let area = areaCuadrado(value);
    alert(area);
}

// Código del triángulo
function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}
function areaTriangulo(base, altura){
    return (base * altura) / 2;
}

function calcularPerimetroTriangulo(){
    const base = document.getElementById("baseTriangulo");
    const ladoIzq = document.getElementById("ladoIzqTriangulo");
    const ladoDer = document.getElementById("ladoDerTriangulo");

    let perimetro = perimetroTriangulo(Number(ladoIzq.value), Number(ladoDer.value), Number(base.value));
    alert(perimetro);
}

function calcularAreaTriangulo(){
    const base = document.getElementById("baseTriangulo");
    const altura = document.getElementById("alturaTriangulo");

    let area = areaTriangulo(Number(base.value), Number(altura.value));
    alert(area);
}

// Código del círculo
// PI
const PI = Math.PI;
// Diámetro
function diametroCirculo(radio){
    return radio * 2;
}
// Circunferencia
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}
// Área
function areaCirculo(radio){
    return (radio * radio) * PI;

}

function calcularDiametroCirculo(){
    const radio = document.getElementById("radioCirculo");
    
    const diametro = diametroCirculo(radio.value);
    alert(diametro);
}

function calcularPerimetroCirculo(){
    const radio = document.getElementById("radioCirculo");
    
    let perimetro = perimetroCirculo(radio.value);
    alert(perimetro);
}

function calcularAreaCirculo(){
    const radio = document.getElementById("radioCirculo");

    let area = areaCirculo(radio.value);
    alert(area);
}
// Altura Triangulo Isósceles
function alturaTrianguloIsosceles(lado, base){
    return Math.sqrt((lado*lado) - ((base*base)/4))
}

function calcularAlturaTrianguloIsosceles(){
    const lado = document.getElementById("ladoTriangulo");
    const base = document.getElementById("longBaseTriangulo");

    const altura = alturaTrianguloIsosceles(lado.value, base.value);
    alert(altura);
}