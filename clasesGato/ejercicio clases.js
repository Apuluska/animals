class AnimalClass {
  constructor(especie = "perro", patas, gritito, vuela = false) {
    this.especie = especie;
    this.patas = patas;
    this.gritito = gritito;
    this.vuela = vuela;
  }
  set setVuela(fly) {
    this.vuela = fly;
  }
  get getVuelta() {
    return this.vuela;
  }

  gritar() {
    console.log("El sonido de la especie" + this.especie + "es" + this.gritito);
  }
  tipoAlimentación(food) {
    console.log("Este animal come" + food);
  }
}
function crearAnimal(especie, patas, gritito, vuela){
return new AnimalClass(especie, patas, gritito, vuela);
}

function nuevoAnimal(especie, patas, gritito, vuela){
  let animal = crearAnimal(especie, patas, gritito, vuela);
    animal.tipoAlimentación("carnivoro");
    animal.gritar();
}
class GatoClass extends AnimalClass {
  constructor(especie, patas, gritito, vuela, color, peso) {
      super(especie, patas, gritito, vuela, color, peso);
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
      super.gritar();
  }
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
  if (animal.getVuela) {
      console.log("Ahora puedo volar");    
  }
  else {
      console.log("Todavia no puedo volar");
  }
}

