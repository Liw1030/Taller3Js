class producto {
  constructor(nombre, precio, marca) {
    this.nombre = nombre;
    this.precio = precio;
    this.marca = marca;
  }

  descripcion() {
    return `${this.nombre} de la marca ${this.marca} cuesta $${this.precio}.`;
  }
}

class telefono extends producto {
  constructor(nombre, precio, marca, almacenamiento, ram) {
    super(nombre, precio, marca);
    this.almacenamiento = almacenamiento;
    this.ram = ram;
  }

  descripcion() {
    return `${this.nombre} (${this.marca}) tiene ${this.almacenamiento}GB de almacenamiento y ${this.ram}GB de RAM. Precio: $${this.precio}.`;
  }
}

class laptop extends producto {
  constructor(nombre, precio, marca, procesador, pulgadas) {
    super(nombre, precio, marca);
    this.procesador = procesador;
    this.pulgadas = pulgadas;
  }

  descripcion() {
    return `${this.nombre} (${this.marca}) con procesador ${this.procesador} y pantalla de ${this.pulgadas}" cuesta $${this.precio}.`;
  }
}

const producto1 = new producto("Audífonos Bluetooth", 120, "Sony");
const telefono1 = new telefono("Galaxy S21", 900, "Samsung", 128, 8);
const laptop1 = new laptop("MacBook Air", 1200, "Apple", "M2", 13);

console.log(producto1.descripcion());
console.log(telefono1.descripcion());
console.log(laptop1.descripcion());