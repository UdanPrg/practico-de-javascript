# Respuestas Clase 2

Responde las siguientes preguntas en la sección de comentarios:

¿Qué es una variable y para qué sirve?: Es un espacio en memoria en el que se puede guardar datos y/o estructuras de datos
¿Cuál es la diferencia entre declarar e inicializar una variable?: Declarar le da un valor a la variable e inicializarla solo nos reserva el espacio para asignarle un valor después.
¿Cuál es la diferencia entre sumar números y concatenar strings?: La diferencia es que uno utiliza el operador "+" para realizar la operación aritmética y la otra para "pegar" una cadena con otra.
¿Cuál operador me permite sumar o concatenar?: +

2️⃣ Determina el nombre y tipo de dato para almacenar en variables la siguiente información:
3️⃣ Traduce a código JavaScript las variables del ejemplo anterior y deja tu código en los comentarios:

```js
// respuesta de punto 2 y 3
Nombre: 'string'--> var = nombre: "Uriel";
Apellido: 'string'--> var apellido = "Arana";
Nombre de usuario en Platzi: 'string'--> var userNamePlatzi = "udanPrg";
Edad: 'number'--> var edad = 25;
Correo electrónico: 'string'--> var email = "example@example.com";
Mayor de edad: 'boolean'--> var mayorEdad = edad >= 18 ? true : false;
Dinero ahorrado: 'number'--> var totalAhorros = 1000.00;
Deudas: 'number'--> var deudas = 100.00;
```


4️⃣ Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:

Nombre completo (nombre y apellido):
// Forma 1: si reutilizaré, es buena práctica guardarlo en una variable, para no repetir código.
var fullName = nombre + " " + apellido;
console.log(fullName);
// Forma 2: si no volveré a usar, mejor solo imprimirlo directamente.
console.log(nombre + " " + apellido);
// Forma 3: "templizar" también puede ser buena práctica
console.log(`${nombre} ${apellido}`);

Dinero real (dinero ahorrado menos deudas):
// Forma 1
console.log("Dinero real: " + (totalAhorros - deudas));
// Forma 2
var dineroReal = totalAhorros - deudas;
console.log("Dinero real: " + dineroReal);

Funciones
1️⃣ Responde las siguientes preguntas en la sección de comentarios:

¿Qué es una función?: Una porción de código que realiza una tarea específica dada por nosotros.
¿Cuándo me sirve usar una función en mi código?: cuando deseo realizar una tarea específica y también no repetir código.
¿Cuál es la diferencia entre parámetros y argumentos de una función?: Los parametrós son los datos que se le asignan a la función, los cuales se usaran como los argumentos para ejecutar la función. 

2️⃣ Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:

const name = "Juan David";
const lastname = "Castro Gallego";
const completeName = name + lastname;
const nickname = "juandc";

console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");
// respuesta
function miNombreNickname(names, lastsname, nickname){
    let completeName = names + " " + lastsname;
    return console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");
};

Condicionales
1️⃣ Responde las siguientes preguntas en la sección de comentarios:

¿Qué es una condicional?: Es una estructura de código que me permite ejecutar una porción de código si se cumple una condición que sea verdadera.
¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias?: Estructura IF, ELSE, ELSE IF(estructura que busca la condición que es verdadera y ejecuta el código dentro de ella) - SWITCH(opera por casos, si un caso se cumple, se para la ejecución y realiza operación) - OPERADOR TERNARIO(si la condición dada es verdadera, se ejecute el código correspondiente a si es verdadero, y si es falso el correspondiente a ello se pueden operar ternarios en ternarios)
¿Puedo combinar funciones y condicionales?: Si.

2️⃣ Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:

const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "ExpertPlus":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
}
// Respuesta
const tipoDeSuscripcion = "Basic";

if(tipoDeSuscripcion == "Free"){
    console.log("Solo puedes tomar los cursos gratis");
}else if(tipoDeSuscripcion == "Expert"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
}else if(tipoDeSuscripcion == "ExpertPlus"){
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}else{
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
}

3️⃣ Replica el comportamiento de tu condicional anterior con if, else y else if, pero ahora solo con if (sin else ni else if).

Bonus: si ya eres una experta o experto en el lenguaje, te desafío a comentar cómo replicar este comportamiento con arrays y un solo condicional. 😏

--/-/-/-/-/-/-


Ciclos
1️⃣ Responde las siguientes preguntas en la sección de comentarios:

¿Qué es un ciclo?: es uns estructura de código que nos permite repetir una tarea/acción, cuantas veses nostros designemos que lo repita.
¿Qué tipos de ciclos existen en JavaScript?: While, For, Fof of.
¿Qué es un ciclo infinito y por qué es un problema?: Es un ciclo que nunca se 'rompe', por lo tanto a la hora de seguir ejecutandose llega un momento en el que se satura la capacidad de computo par continuar ejecutandose.
¿Puedo mezclar ciclos y condicionales?: Si.

2️⃣ Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:

for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}
// respuesta
var numeros = [0, 1, 2, 3, 4];
function minusNumber(number){
    console.log("El valor de i es: " + number);
}
while(numeros.length > 0){
    var numero = numeros.shift();
    minusNumber(numero);
}

for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}
// repuesta
var numeros = [10, 9, 8, 7, 6, 5, 4, 3, 2];
function minusNumber(number){
    console.log("El valor de i es: " + number);
}
while(numeros.length > 0){
    var numero = numeros.shift();
    minusNumber(numero);
}


3️⃣ Escribe un código en JavaScript que le pregunte a los usuarios cuánto es 2 + 2. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.

Pista: puedes usar la función prompt de JavaScript.

var respuesta = prompt('¿Cuánto es 2 + 2?');
while(respuesta != 4){
    respuesta = prompt('¿Cuánto es 2 + 2?');
    if(respuesta == 4){
        alert('Felicitaciones, es la respuesta correcta');
    }
}


Listas
1️⃣ Responde las siguientes preguntas en la sección de comentarios:

¿Qué es un array?: Es un tipo de estructura de dato que nos permite declara una serie de elementos como lista.
¿Qué es un objeto?: Es un tipo de estructura de dato, que nos permite declarar en base a una palabra clave o sin ella una lista de elementos.
¿Cuándo es mejor usar objetos o arrays?: Cuando necesitamos guardar un conjunto de elementos.
¿Puedo mezclar arrays con objetos o incluso objetos con arrays?: Si.

2️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.
function firstElement(lista){
    return lista[0];
}

3️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).
function allElement(lista){
    for(let i = 0; i < lista.length; i++){
        console.log("Elemento en el Indice " + lista.indexOf(lista[i]) + " es : " + lista[i]);
    }
}

4️⃣ Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).
function printAllObject(objeto){
    objeto.forEach(function(elemento){
        console.log(elemento)
    });
}