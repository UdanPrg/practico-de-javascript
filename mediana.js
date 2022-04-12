// const lista = [200, 100, 300, 40000000]; --> Lista de pruebas

// Verificar si el tamaño('.length') es par o impar
function esPar(numerito){
    if (numerito % 2 === 0) {
        return true;
    }else{
        return false;
    }
}
// Calcular el 'index' promedio de la lista
function calcularPromedioAritmetica(listaPromedio){
    const sumaLista = listaPromedio.reduce(function(valorAcumulado = 0, nuevoElemento){
        return valorAcumulado + nuevoElemento;
    });
    const promedioLista = sumaLista / listaPromedio.length;
    return promedioLista;
}

// Calcular Mediana
function calcularMediana(lista){
    const listaOrdenada = lista.sort(function (x,y){return x - y;});
    const mitadLista = parseInt(listaOrdenada.length / 2);
    let mediana;
    
    if(esPar(listaOrdenada.length) == true){
        // necesitamos dos elementos
        const elemento1 = listaOrdenada[mitadLista - 1]
        const elemento2 = listaOrdenada[mitadLista]
        // -> el promedio
        const promedioElemento1y2 = calcularPromedioAritmetica([elemento1, elemento2]);
        // -> mediana
        mediana = promedioElemento1y2;
    }else{
        // posición mitadLista dentro de lista
        // -> mediana
        mediana = listaOrdenada[mitadLista];
    }
    return mediana;
}