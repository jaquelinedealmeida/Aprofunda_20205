//Todas as classes têm o método fazerSom(),
// mas cada uma implementa de forma diferente.

class Animal {
  fazerSom() {
    console.log("Som genérico de animal");
  }
}

class Cachorro extends Animal {
  fazerSom() {
    console.log("Au au!");
  }
}

class Gato extends Animal {
  fazerSom() {
    console.log("Miau!");
  }
}

const animais = [new Animal(), new Cachorro(), new Gato()];

animais.forEach((animal) => {
  animal.fazerSom(); // Cada objeto executa sua versão do método
});
