const arguments = process.argv.slice(2);
const name = '';
const lang = '';

function greet(name, lang) {

  if (lang === 'en') {
    console.log(`Hello, ${name}!`);
  } else if (lang === "es") {
    console.log(`Hola, ${name}!`);
  } else if (lang === "fr") {
    console.log(`Bonjour, ${name}!`);
  } else if (lang === "ch") {
    console.log(`Nihao, ${name}!`);
  } else {
    console.log('language not defined.');
  }
}

greet(arguments[0], arguments[1]);