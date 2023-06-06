alert("Primera parte");
alert("Suma todos los números que hay desde 1 hasta N");

var num = parseInt(prompt("Ingrese el número N:"));

function sumahastaN(num) {
    if (num <= 0 || isNaN(num)) {
        alert("Por favor ingrese números positivos.");
    } else {
        var suma = 0;
        for (var i = 1; i <= num; i++) {
            suma += i;
        }
        alert("El valor es " + suma);
        // Carl Friedrich Gauss también conocido como el príncipe de las matemáticas inventó la fórmula ((x*(1+x))/2) cuando tenía 8 años y
        // es otra forma de resolver este tipo de ejercicio.
        alert("El valor es " + (num * (1 + num)) / 2 + " Por Gauss");
    }
}

sumahastaN(num);

alert("Segunda Parte");
alert("Características de un número");
var x = parseInt(prompt("Ingrese un número: "));

var numero = {
    valor: x,
    verificarCaracteristicas: function () {
        // Agregué los case para complicarme la vida.
        switch (true) {
            case this.esPar():
                alert("El valor es par");
                break;
            case this.esPrimo():
                alert("El valor es primo");
                break;
            case this.esPerfecto():
                alert("El valor es un número perfecto");
                break;
            default:
                alert("El valor no tiene características especiales");
                break;
        }
    },
    esPar: function () {
        return this.valor % 2 === 0;
    },
    esPrimo: function () {
        var esPrimo = true;
        if (this.valor <= 1) {
            esPrimo = false;
        } else {
            for (var i = 2; i <= Math.sqrt(this.valor); i++) {
                if (this.valor % i === 0) {
                    esPrimo = false;
                    break;
                }
            }
        }
        return esPrimo;
    },
    esPerfecto: function () {
        var sumaDivisores = 0;
        for (var i = 1; i < this.valor; i++) {
            if (this.valor % i === 0) {
                sumaDivisores += i;
            }
        }
        return sumaDivisores === this.valor;
    },
};

numero.verificarCaracteristicas();

numero.esPar();
alert("x es un número perfecto: " + numero.esPerfecto());
alert("x es un número primo: " + numero.esPrimo());

function calcularCuotas(cantidad, interes) {
    var saldoTotal = cantidad * (1 + interes / 100);

    var cuotas = [2, 3, 4, 6, 8, 12, 24];
    var resultados = [];

    for (var i = 0; i < cuotas.length; i++) {
        var cuota = cuotas[i];
        var saldoCuota = saldoTotal / cuota;
        resultados.push(saldoCuota.toFixed(2));
    }

    return resultados;
}
alert("Tercera Parte");
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
            let suma = 0;
            for (let i = 0; i < this.notas.length; i++) {
                suma += this.notas[i];
            }
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
        alert("¡¡¡Felicidades: " + estudiante.nombre + " " + estudiante.apellido + ", estás aprobado!!!");
    }else {
        alert("Lo lamento: " + estudiante.nombre + " " + estudiante.apellido + ", estás desaprobado :,c. ¡Suerte para la próxima!");

    }
}

crearEstudiante();
