const llenarArray = () => {
    var array = [];
    for(let j = 0; j < 2000; j++){
        array.push(Math.round(Math.random() * (2000 - 1) + 1));
    }
    return array;
}

const buscarMayor = () => {
    let listaDos = [];
    let numeroMayor;
    let lista = llenarArray();
    for (let h = 0; h < lista.length; h++) {
        numeroMayor = 0;
        for (let i = 0; i < lista.length; i++) {
            if (lista[i] > numeroMayor) {
                numeroMayor = lista[i];
            };
        }
        let ubicacion = lista.indexOf(numeroMayor);
        lista[ubicacion] = -1;
        listaDos.push(numeroMayor);
    }

    console.log("Lista de numeros mayores: ");
    console.log(listaDos)
    console.log("Lista inicial");
    console.log(lista);
}

buscarMayor();