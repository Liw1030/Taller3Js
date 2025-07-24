class figura {
  constructor(color) {
    this.color = color;
  }

  area() {
    return 0;
  }
}

class rectangulo extends figura {
  constructor(color, base, altura) {
    super(color);
    this.base = base;
    this.altura = altura;
  }

  area() {
    return this.base * this.altura;
  }
}

class circulo extends figura {
  constructor(color, radio) {
    super(color);
    this.radio = radio;
  }

  area() {
    return Math.PI * this.radio * this.radio;
  }
}

const figura1 = new figura("transparente");
const rectangulo1 = new rectangulo("rojo", 10, 5);
const circulo1 = new circulo("azul", 7);

console.log(`figura genérica (${figura1.color}): área = ${figura1.area()}`);
console.log(`Rectángulo (${rectangulo1.color}): área = ${rectangulo1.area()}`);
console.log(`Círculo (${circulo1.color}): área ≈ ${circulo1.area().toFixed(2)}`);