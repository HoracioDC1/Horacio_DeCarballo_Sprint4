// Challenge `sayGoodbye`
function sayGoodbye(nombre) {
  return `Adíos, ${nombre}. Que tengas un buen día!`;
}
console.log(sayGoodbye('Ernesto'));





// Challenge `temperatureInC`
function fahrenheitACelsius(fahrenheit) {
  return Math.round((fahrenheit - 32)* 5/9 );
}

function temperaturaEnC(temp, unit) {
  if(unit === 'F'){
    return `${fahrenheitACelsius(temp)}C`; 
}
   else if (unit === 'C') {
    return `${temp}F`;
   } else {
    return 'Unidad no válida';
  }
}
console.log(temperaturaEnC(88, 'F'));
console.log(temperaturaEnC(24, 'C'));





/*  * ### Challenge `makePersonObject` */
function makePersonObject(id, name, email) {
  return (`
          id: ${id}, 
          name: ${name},
          email: ${email}`)
}
const persona = makePersonObject(1, 'Ronaldinho', 'Ronaldinho@jogabonito.com');
console.log (persona);






/*** ### Challenge `getName`*/
function getName(name) { 
  return `Hola, mi nombre es ${person.name}`;
}

const person = { id: 1, name: 'Lionel', email: 'liomessi@gmail.com' };
console.log(getName(person))






/*** ### Challenge `appleIndex`*/
function appleIndex(array) {
  return array.indexOf('mango');
}

const frutas = [ 'naranja', 'uva', 'manzana', 'plátano', 'mango' ];
console.log(appleIndex(frutas));






/*** ### Challenge `isItAnApple` **/
function isItAnApple(array) {
  return array.map(frutitas => frutitas ==='apple');
}

const frutitas = [ 'orange', 'apple', 'banana', 'apples', 'apple', 'mango' ]
const resultado = isItAnApple(frutitas);
console.log(resultado)



