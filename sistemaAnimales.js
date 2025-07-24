class animal {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  emitirSonido() {
    return "El animal hace un sonido.";
  }
}

class perro extends animal {
  emitirSonido() {
    return `${this.nombre} dice: Guau`;
  }
}

class gato extends animal {
  emitirSonido() {
    return `${this.nombre} dice: Miau`;
  }
}

const animal1 = new animal("Jacob", 3);
const perro1 = new perro("Toby", 5);
const gato1 = new gato("Mussi", 2);

console.log(animal1.emitirSonido());
console.log(perro1.emitirSonido());
console.log(gato1.emitirSonido());