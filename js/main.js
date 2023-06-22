function calcularCuotas(cantidad, interes) {
    var saldoTotal = cantidad * (1 + interes / 100);

    var cuotas = [2, 3, 4, 6, 8, 12, 24];
    var resultados = cuotas.map(function(cuota) {
        var saldoCuota = saldoTotal / cuota;
        return saldoCuota.toFixed(2);
    });

    return resultados;
}

alert("Calculadora de Interés");
var cantidad = parseFloat(prompt("Ingrese la cantidad de dinero:"));
var interes = parseFloat(prompt("Ingrese el porcentaje de interés:"));

var cuotasResultantes = calcularCuotas(cantidad, interes);

var cuotas = {
    2: {
        valor: cuotasResultantes[0],
        total: Math.round(cuotasResultantes[0] * 2),
    },
    3: {
        valor: cuotasResultantes[1],
        total: Math.round(cuotasResultantes[1] * 3),
    },
    4: {
        valor: cuotasResultantes[2],
        total: Math.round(cuotasResultantes[2] * 4),
    },
    6: {
        valor: cuotasResultantes[3],
        total: Math.round(cuotasResultantes[3] * 6),
    },
    8: {
        valor: cuotasResultantes[4],
        total: Math.round(cuotasResultantes[4] * 8),
    },
    12: {
        valor: cuotasResultantes[5],
        total: Math.round(cuotasResultantes[5] * 12),
    },
    24: {
        valor: cuotasResultantes[6],
        total: Math.round(cuotasResultantes[6] * 24),
    },
};

alert("Saldo en cuotas:");
for (var key in cuotas) {
    alert(key + " cuotas: $" + cuotas[key].valor + " Total " + cuotas[key].total);
}

alert("Cuarta parte");
alert("Promedio de un Estudiante");

function crearEstudiante() {
    class Estudiante {
        constructor(nombre, apellido, notas) {
            this.nombre = nombre;
            this.apellido = apellido;
            this.notas = notas;
        }

        calcularPromedio() {
            let suma = this.notas.reduce(function(acumulador, nota) {
                return acumulador + nota;
            }, 0);
            return suma / this.notas.length;
        }
    }

    let nombre = prompt("Ingrese el nombre del estudiante:");
    let apellido = prompt("Ingrese el apellido del estudiante:");

    let notas = [];
    for (let i = 1; i <= 4; i++) {
        let nota = parseFloat(prompt("Ingrese la nota " + i + " del estudiante:"));
        notas.push(nota);
    }

    let estudiante = new Estudiante(nombre, apellido, notas);

    alert(
        "Nombre completo del estudiante: " +
        estudiante.nombre +
        " " +
        estudiante.apellido
    );
    alert("Promedio de notas: " + estudiante.calcularPromedio());
    if (estudiante.calcularPromedio() > 4) {
        alert(
            "¡¡¡Felicidades: " +
            estudiante.nombre +
            " " +
            estudiante.apellido +
            ", estás aprobado!!!"
        );
    } else {
        alert(
            "Lo lamento: " +
            estudiante.nombre +
            " " +
            estudiante.apellido +
            ", estás desaprobado :,c. ¡Suerte para la próxima!"
        );
    }
}

crearEstudiante();

let grupo = [
    { nombre: "Juan", sexo: "Mas" },
    { nombre: "María", sexo: "Fem" },
    { nombre: "Pedro", sexo: "Mas" },
    { nombre: "Daniel", sexo: "Mas" },
];

function verificarUsuario(nombre) {
    return grupo.some(function(usuario) {
        return usuario.nombre.toLowerCase() === nombre.toLowerCase();
    });
}

function registrarUsuario(nombre, sexo) {
    grupo.push({ nombre, sexo });
    alert("¡Te has registrado exitosamente!");
}

function interactuar() {
    const opcion = prompt("¿Eres un usuario registrado? (Sí/No)").toLowerCase();

    if (opcion === "si") {
        const nombre = prompt("Por favor, ingresa tu nombre");
        const sexo = prompt("Por favor, ingresa tu sexo (Mas/Fem)");

        if (verificarUsuario(nombre)) {
            alert(
                "¡Bienvenido/a de nuevo, " +
                nombre +
                "! Estás registrado/a en el grupo."
            );
        } else {
            alert("Lo siento, no estás registrado/a en el grupo.");
        }
    } else if (opcion === "no") {
        const nombre = prompt("Por favor, ingresa tu nombre");
        const sexo = prompt("Por favor, ingresa tu sexo (Mas/Fem)");

        registrarUsuario(nombre, sexo);
        alert("¡Te has registrado exitosamente!");
    }
}

interactuar();

const usuariosMasculinos = grupo.filter(function(usuario) {
    return usuario.sexo.toLowerCase() === "mas";
});
alert("Usuarios masculinos:");
usuariosMasculinos.forEach(function(usuario) {
    alert("Nombre: " + usuario.nombre + ", Sexo: " + usuario.sexo);
});

const usuariosFemeninos = grupo.filter(function(usuario) {
    return usuario.sexo.toLowerCase() === "fem";
});
alert("Usuarios femeninos:");
usuariosFemeninos.forEach(function(usuario) {
    alert("Nombre: " + usuario.nombre + ", Sexo: " + usuario.sexo);
});
