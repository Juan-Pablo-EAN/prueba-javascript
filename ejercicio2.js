const crearEmpleados = () => {
    var array = [];
    var objeto;
    for (let j = 0; j < 173; j++) {
        objeto = {
            nombre: `Juanito${j + 1}`,
            sueldo: (Math.round(Math.random() * (2000000 - 1000000) + 1000000))
        }
        array.push(objeto);
    }
    return array;
}

const promedio = trabajadores => {
    let sueldos = [];
    let suma = 0;
    let promedio = 0;
    for (let i = 0; i < trabajadores.length; i++) {
        sueldos.push(trabajadores[i].sueldo);
    }

    for (let k = 0; k < sueldos.length; k++) {
        suma += sueldos[k];
    }

    promedio = suma / (sueldos.length);
    promedio = Math.round(promedio);
    return promedio;
}

const evaluarPromedios = () => {
    let empleados = crearEmpleados();
    let prom = promedio(empleados);
    let listaDeEmpleados = [];
    let cincoPorciento = prom - ((prom * 5) / 100);
    let diezPorciento = prom + ((prom * 10) / 100);

    for (let m = 0; m < empleados.length; m++) {

        if (empleados[m].sueldo < diezPorciento && empleados[m].sueldo > cincoPorciento) {
            console.log(empleados[m].sueldo)
            let empleado = {
                nombre: `${empleados[m].nombre}`,
                sueldo: empleados[m].sueldo
            }
            listaDeEmpleados.push(empleado);
        }
    }

    console.log("El promedio de sueldos es de " + prom );

    console.log("5% del promedio: " + cincoPorciento);

    console.log("10% del promedio: " + diezPorciento);

    console.log("Esta es la lista de empleados con un salario mayor al 5% y menor al 10% del promedio:");

    console.log(listaDeEmpleados);

    return listaDeEmpleados;
}

evaluarPromedios();
