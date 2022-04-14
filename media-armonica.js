//* const lista1 = [100,200,300,500]; // --> Lista de pruebas
let sumaReciprocos = 0;

function calcularMediaArmonica(lista){
    //! --> Solución con FOR LOOP
    // for (let i = 0; i < lista.length; i++) {
    //     const reciproco = 1 / lista[i];
    //     sumaReciprocos += reciproco;
    // }
    // console.log(sumaReciprocos);
    // const mediaArmonicaLista = lista.length / sumaReciprocos;
    // return mediaArmonicaLista;

    //! --> Solución con metodo '.reduce()'
    const sumaReciprocosLista = lista.reduce(function(valorAcumulado = 0, nuevoElemento){
        if(valorAcumulado == lista[0]){
            return (1 / valorAcumulado) + (1 / nuevoElemento);
        }else{
            return valorAcumulado + (1 / nuevoElemento);
        }
    });
    const mediaArmonica = lista.length / sumaReciprocosLista;

    return  mediaArmonica;
}