// Desafio 1
function compareTrue(param1, param2) {
  // seu código aqui
  if (param1 && param2){
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  const sentence = string;
  return sentence.split(" ");
}

// Desafio 4
function concatName(array) {
  // seu código aqui
  const name = array;
  let result;

  return result = `${name[name.length - 1]}, ${name[0]}`
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  const lost = 0;
  return (wins * 3) + (ties * 1) + lost;
}

// Desafio 6
function highestCount(array) {
  // seu código aqui
    let higherNumber = Math.max(...array);
    let count = [];
    for (let index = 0; index < array.length; index += 1) {
      if (array[index] === higherNumber) {
        count.push(array[index]);
      }
    }
    return count.length;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  if (Math.abs(mouse - cat1) < Math.abs(mouse - cat2)) {
    return 'cat1';
  } if (Math.abs(mouse - cat1 === Math.abs(mouse - cat2))) {
    return 'os gatos trombam e o rato foge';
  }
  return 'cat2';
}

// Desafio 8
function fizzBuzz(array) {
  // seu código aqui
  let arrayFizzBuzz = [];
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] % 3 === 0 && array[index] % 5 === 0) {
      arrayFizzBuzz.push('fizzBuzz');
    } else if (array[index] % 3 === 0) {
      arrayFizzBuzz.push('fizz');
    } else if (array[index] % 5 === 0) {
      arrayFizzBuzz.push('buzz');
    } else {
      arrayFizzBuzz.push('bug!');
    }
  }
  return arrayFizzBuzz;  
}

// Desafio 9
function encode(string) {
  // seu código aqui
  let string2 = string;
  string2 = string2.replace(/a/g, '1');
  string2 = string2.replace(/e/g, '2');
  string2 = string2.replace(/i/g, '3');
  string2 = string2.replace(/o/g, '4');
  string2 = string2.replace(/u/g, '5');
  return string2;
}
function decode(string) {
  // seu código aqui
  let string2 = string;
  string2 = string2.replace(/1/g, 'a');
  string2 = string2.replace(/2/g, 'e');
  string2 = string2.replace(/3/g, 'i');
  string2 = string2.replace(/4/g, 'o');
  string2 = string2.replace(/5/g, 'u');
  return string2;
}