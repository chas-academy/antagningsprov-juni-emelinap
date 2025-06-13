

function uppg8(){

// skapa en array med fem person obkjet
// varje person objekt ska ha två properties, name och age
  const people = [
    { name: "Anna", age: 24 },
    { name: "Erik", age: 34 },
    { name: "Sara", age: 45 },
    { name: "Oskar", age: 22 },
    { name: "Lisa", age: 32 }
  ];

// skapa en fuktion som tar in en array som argument
// skapa ett konditionsvillkor som gör att det bara är namnet på personerna som är
//  över 30 år som skrivs ut i konsolen
  function printOver30(array) {
    array.forEach(person => {
      if (person.age > 30) {
        console.log(person.name);
      }
    });
  }

// anropa funktionen och skicka med arrayen som argument

  printOver30(people);


}

module.exports = { uppg8 };