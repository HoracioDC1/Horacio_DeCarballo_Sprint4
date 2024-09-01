const characters = [
  {
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    eye_color: "blue",
    gender: "male",
  },
  {
    name: "Darth Vader",
    height: "202",
    mass: "136",
    eye_color: "yellow",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: "150",
    mass: "49",
    eye_color: "brown",
    gender: "female",
  },
  {
    name: "Anakin Skywalker",
    height: "188",
    mass: "84",
    eye_color: "blue",
    gender: "male",
  },
];

// Challenge `getCharacterNameByIndex`
function getCharacterNameByIndex(characters, array) {
  const character = characters[array];
  return `El personaje es: ${character.name}`;
}

// 1 Obtener caracteres con masa superior a 100
const massGreaterThan100 = characters.filter((c) => c.mass > 100);
console.log(massGreaterThan100);

// 2 Obtener personajes con altura inferior a 200 
const heightLessThan200 = characters.filter((b) => b.height < 200);
console.log(heightLessThan200);

// 3 Obtener una matriz con todos los nombres 
const nombres = characters.map((a) => a.name);
console.log(nombres);

//4 Obtener un array de objetos con sólo las propiedades nombre y altura
const nameAndHeigt = characters.map((a) => {
  return {name: a.name, height: a.height};
});
console.log(nameAndHeigt);

//5 Encontrar el primer personaje con ojos marrones.
const personajeOjosMarrones = characters.find((d) => d.eye_color === 'brown');
console.log(personajeOjosMarrones);

//6 Obtener todos los personajes masculinos
const personajesMasculinos = characters.filter((e) => e.gender === 'male');
console.log(personajesMasculinos);

// 7 Obtener todos los personajes femeninos
const personajesFemeninos = characters.filter((e) => e.gender === 'female');
console.log(personajesFemeninos);

// 9 Obtener una matriz con todas las alturas
const heights = characters.map((b) => b.height);
console.log(heights);

// 10 Imprimir en la consola los nombres de todos los personajes.
characters.forEach((character) => {
  console.log(character.name);
});

// 11 Encontrar el primer personaje que tenga ojos de color azul y que su peso sea mayor a 80
const primerPersonajeOjosAzules = characters.find((d) => d.eye_color === 'blue' && d.mass > 80);
console.log(primerPersonajeOjosAzules);

// 12 Verificar si todos los personajes con ojos azules tienen una altura mayor a 170.
const altosConOjosAzules = characters
.filter((characters) => characters.eye_color === 'blue')
.every((characters) => characters.height > 170);
console.log(altosConOjosAzules);