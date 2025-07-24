class Vehiculo {
    constructor(marca, modelo, año) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
    }

    obtenerDetalles() {
        return 'Marca: ' + this.marca + ', Modelo: ' + this.modelo + ', Año: ' + this.año;
    }
}

class carro extends Vehiculo {
    constructor(marca, modelo, año, numeroPuertas) {
        super(marca, modelo, año);
        this.numeroPuertas = numeroPuertas;
    }

    obtenerDetalles() {
        return super.obtenerDetalles() + ', Número de puertas: ' + this.numeroPuertas;
    }
}

class Moto extends Vehiculo {
    constructor(marca, modelo, año, cilindrada) {
        super(marca, modelo, año);
        this.cilindrada = cilindrada;
    }

    obtenerDetalles() {
        return super.obtenerDetalles() + ', Cilindrada: ' + this.cilindrada + 'cc';
    }
}

const miCarro = new carro('Toyota', 'Corolla', 2020, 4);
const miMoto = new Moto('Honda', 'NX190', 2022, 180);

console.log('Mi carro: ', miCarro.obtenerDetalles());
console.log('Mi carro: ', miMoto.obtenerDetalles());