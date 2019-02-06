var arrayEspecie = ["Periquito", "Pavo", "Gallo", "Buitre"];
var arrayPatas = [2,2,4,2];
var arrayGritito = ["Pio Pio", "Cuak", "qui quiri qui", null ];
var arrayVuela = [true, false, false, true];
var arrayColor = ["Amarillo", "Blanco", "Naranja", "Negro"];
var arrayAlas = ["Pequeñas", "Muslitos", "Jugosas", "Grandes"];

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
    let gato = crearGato(especie, patas, gritito, vuela, color, peso);
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
    let textoVolar = animal.getVuela ? "Ahora puedo volar": "Todavia no puedo volar";
    console.log(textoVolar);
}
////////////////////////////
class PajaroClass extends AnimalClass {
    constructor (especie, patas, gritito, vuela, color, alas){
    super (especie, patas, gritito, vuela)
    this.color= color;
    this.alas= alas;
}
volar(){}

planear(){
    console.log("soy capaz de planear");
}

cazar(){
    console.log("Soy un " + this.especie + " y puedo cazar gatos");
    console.log("Aquí tendría que ir la lógica de destruir un gato");
}
}
function crearPajaro (especie, patas, gritito, vuela, color, alas){
    return new pajaroClass (especie, patas, gritito, vuela, color, alas);
}
function nuevoPajaro(especie, patas, gritito, vuela, color, alas) {
    let pajaro = crearPajaro(especie, patas, gritito, vuela, color, alas);
    pajaro.planear();
}
function crearPajareria(){
    let pajareria = [];
    for (let index = 0; index < arrayEspecie.length; index++) {
        nuevoPajaro(especie, patas, gritito, vuela, color, alas)
      pajareria.push("")
        
    }
}
