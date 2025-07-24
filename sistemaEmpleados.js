
class empleado {
  constructor(nombre, edad, salarioBase) {
    this.nombre = nombre;
    this.edad = edad;
    this.salarioBase = salarioBase;
  }

  calcularSalario() {
    return this.salarioBase;
  }
}

class gerente extends empleado {
  constructor(nombre, edad, salarioBase, bonificacion) {
    super(nombre, edad, salarioBase);
    this.bonificacion = bonificacion;
  }

  calcularSalario() {
    return this.salarioBase + this.bonificacion;
  }
}

class desarrollador extends empleado {
  constructor(nombre, edad, salarioBase, lenguaje) {
    super(nombre, edad, salarioBase);
    this.lenguaje = lenguaje;
  }
}


const empleado1 = new empleado("Ana", 28, 3000);
const gerente1 = new gerente("Luis", 40, 5000, 1500);
const desarrollador1 = new desarrollador("Carlos", 25, 4000, "JavaScript");


console.log(`${empleado1.nombre}: $${empleado1.calcularSalario()}`);
console.log(`${gerente1.nombre}: $${gerente1.calcularSalario()}`);
console.log(`${desarrollador1.nombre}: $${desarrollador1.calcularSalario()}`);