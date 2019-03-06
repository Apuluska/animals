var arrayEspecie = ["Periquito", "Pavo", "Gallo", "Buitre"];
var arrayPatas = [2, 2, 4, 2];
var arrayGritito = ["Pio Pio", "Cuak", "qui quiri qui", null];
var arrayVuela = [true, false, false, true];
var arrayColor = ["Amarillo", "Blanco", "Naranja", "Negro"];
var arrayAlas = ["Pequeñas", "Muslitos", "Jugosas", "Grandes"];

let pajareria = [];

class AnimalClass {

    constructor(especie = "perro", patas, gritito, vuela = false) {
        this.especie = especie;
        this.patas = patas;
        this.gritito = gritito;
        this.vuela = vuela;
    }

    get getVuela() { return this.vuela; }
    set setVuela(capacidadVolar) { this.vuela = capacidadVolar; }

    gritar() {
        console.log(`El sonido de la especie ${this.especie} es ${this.gritito}`);
    }

    tipoAlimentación(tipoAlimento) {
        console.log(`Este animal come: ${tipoAlimento}`);
    }

}

class GatoClass extends AnimalClass {
    constructor(especie, patas, gritito, vuela, color, peso) {
        super(especie, patas, gritito, vuela);
        this.color = color;
        this.peso = peso;
    }
    arañar() {
        console.log("Soy capaz de arañar");
    }
    saltar() {
        console.log("Doy saltos infinitos");
    }
    maullar() {
        this.gritar();
    }
}

function crearAnimal(especie, patas, gritito, vuela) {
    return new AnimalClass(especie, patas, gritito, vuela);
}

function crearGato(especie, patas, gritito, vuela, color, peso) {
    return new GatoClass(especie, patas, gritito, vuela, color, peso);
}

function nuevoAnimal(especie, patas, gritito, vuela) {
    let animal = crearAnimal(especie.value, patas.value, gritito.value, vuela.checked);
    animal.tipoAlimentación("carnivoro");
    animal.gritar();
    volar(animal, false);

}

function nuevoGato(especie, patas, gritito, vuela, color, peso) {
    let gato = new GatoClass(especie, patas, gritito, vuela, color, peso);
    gato.arañar();
    gato.maullar();
    gato.saltar();
    gato.tipoAlimentación("Quiero comerme un lindo gatito");
    volar(gato, true);
}

function volar(animal, puedoVolar) {
    if (animal.getVuela) {
        console.log("Ya puedo volar por mi mismo");
        return;
    }
    animal.setVuela = puedoVolar;
    let textoVolar = animal.getVuela ? "Ahora puedo volar" : "Todavia no puedo volar";
    console.log(textoVolar);
}
////////////////////////////
class PajaroClass extends AnimalClass {
    constructor(especie, patas, gritito, vuela, color, alas) {
        super(especie, patas, gritito, vuela)
        this.color = color;
        this.alas = alas;
    }

    volar() { }

    planear() {
        console.log("mmm hay muchos pajaritos por aquí");
    }

    cazar() {
        console.log("Soy un " + this.especie + " y puedo cazar gatos");
        console.log("Aquí tendría que ir la lógica de destruir un gato");
    }
}
function crearPajaro(especie, patas, gritito, vuela, color, alas) {
    return new PajaroClass(especie, patas, gritito, vuela, color, alas);
}
function nuevoPajaro(especie, patas, gritito, vuela, color, alas) {
    return crearPajaro(especie, patas, gritito, vuela, color, alas);
}
function nuevaPajareria() {
    let pajaro;
    for (let index = 0; index < arrayEspecie.length; index++) {
        pajaro = nuevoPajaro(arrayEspecie[index], arrayPatas[index], arrayGritito[index], arrayVuela[index], arrayColor[index], arrayAlas[index]);
        pajaro.planear();
        pajareria.push(pajaro);

    }
}
/////////// Ejercicio pair programming
let planta;

class Planta {
    constructor(alimentacion, horasDeLuz, tipoFlor) {
        this.alimentacion = alimentacion;
        this.horasDeLuz = horasDeLuz;
        this.tipoFlor = tipoFlor;
        console.log("Hola soy Audrey, tengo hambre. Dame de comer");
    }
    alimentarse() { }
    iluminar(horasDeLuz) { }


}
class PlantaCarnivora extends Planta {
    constructor(alimentacion = "carne", horasDeLuz, tipoFlor) {
        super(alimentacion, horasDeLuz, tipoFlor);
    }

    mover() {
        console.log("Me estoy moviendo");
    }
    alimentarse(bichito) {
        let manger = pajareria[pajareria.length - 1].especie;
        delete pajareria[pajareria.length - 1];
        pajareria.length --;
        console.log( "Me he comido un : "+ manger);
    }
}

function creaPlantaCarnivora(alimentacion = "carne", horasDeLuz, tipoFlor) {
    planta = new PlantaCarnivora(alimentacion = "carne", horasDeLuz, tipoFlor);
    document.getElementById("imagenPlanta").innerHTML = `<img src= "plantaCarnivora.jpg" alt="Hola soy Audrey">`;
}

function alimentaAudry() {
    planta.alimentarse(pajareria[pajareria.length - 1]);
}