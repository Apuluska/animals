/* DEFINICION DEL EJERCICIO BASICO POR PAREJAS
   ESTA PARTE DEL EJERCICIO VA A IR GUIADA */
/* RECORDATORIO: DEFINIR PRIMERO TODAS LAS CLASES.
    AUNQUE SE PIDAN EN EJERCICIOS POSTERIORES
 */

/* DEFINIMOS LA CLASE */
// Crea aqui una clase que se llame AnimalClass
/* Crea un constructor con los parametros con valores por defecto:
 especie->perro, patas->, gritito->, vuela-> false
 */
/* Crea un modificador de la propiedad vuela con nombres:
getVuela
setVuela
*/
/* Añade el metodo gritar
   El metodo logeara en consola lo siguiente
   El sonido de la especie "valor de especie" es "valor de gritito"
*/
/* Añade el metodo tipoAlimentación que tenga un parametro
  El metodo logeara en consola lo siguiente
  Este animal come: "valor del parametro"
*/  
/* DEFINIMOS LAS FUNCIONES*/
// Define la funcion crearAnimal que es la que retorna un nuevo animal.
/* Esta funcion solo retornara un nuevo AnimalClass
 */
// Define la funcion nuevoAnimal la cual es llamada en el html por el boton
/* Tiene que crear un nuevo animal. Pensar ¿Como creamos un nuevo animal?
   Este nuevo animal va a ser carnivoro.
   Este animal va a gritar.
  Atencion: hay que pasar los parametros con los valores correctos
  Atencion: fijarse bien que envia el html a la funcion y mirar si es lo que necesitamos
 */

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







/* DEFINICION DEL EJERCICIO AVANZADO POR PAREJAS
   ESTA PARTE DEL EJERCICIO IRA MENOS GUIADA
   SIMPLEMENTE SE DESCRIBE QUE SE PIDE Y LOS NOMBRES QUE USAR */
/* RECORDATORIO: DEFINIR PRIMERO TODAS LAS CLASES.
    AUNQUE SE PIDAN EN EJERCICIOS POSTERIORES
 */

/* DEFINIMOS LA CLASE */
// Crea aqui una clase que se llame GatoClass Y herede de AnimalClass
/* Debe de tener dos parametros color y peso
 */

/* El gato debe saber hacer: arañar, saltar, maullar
  Arañar y saltar deben logear el siguiente texto respectivamete.
  Soy capaz de arañar. Doy saltos infinitos
  Maullar debe de hacer lo mismo que gritar.
*/

/* DEFINIMOS LAS FUNCIONES*/
// Define la funcion crearGato que retorna un nuevo gato.

// Define la funcion nuevoGato la cual es llamada en el html por el boton
/* Tiene que crear un nuevo animal. Pensar ¿Como creamos un nuevo animal?
   Aparte de crar un nuevo gato debera de hacer lo siguiente
   Arañar
   Maullar
   Saltar
   Alimentacion: Quiero comerme un lindo gatito
   Debe de aprender a volar
 */

 // ¿Como aprende a volar un gato?
/* Si animal ya sabe volar logeara, y acabara ahi,: Ya puedo volar por mi mismo.
   Debemos de poder modificar la capacidad de vuelo
   Si despues de la modificacion puede volar hay que logear: Ahora puedo volar.
   Por el contrario si todavia no puede volar: Todavia no puedo volar
 */
