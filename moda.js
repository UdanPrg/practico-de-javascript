// const lista = [4,5,6,4,2,5,2,8,2,9,2,7,3,7,2,3,]; // --> Lista de pruebas

// Función Calcular Moda
function calcularModa(lista){
    const lista1Count = {};
    lista.map(function(elemento){
        if(lista1Count[elemento]){
            lista1Count[elemento] += 1;
        }else{
            lista1Count[elemento] = 1;
        }
    });
    const lista1Array = Object.entries(lista1Count).sort(function(x,y){
        return  x[1] - y[1];
    });;
    
    const moda = lista1Array[lista1Array.length - 1];
    return moda;
}