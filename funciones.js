//Funciones matemáticas
//Las función math nos permite hacer nuevos aleatorios y también trabajar con números
//tile es como se llama en el mundo de los videojuegos a ese formato de fondo o mapa
//Hacer un mapa donde los elementos aparezcan de forma aleatoria
//¿Cómo generar un número aleatorio? con las funciones de math
//Si asignamos eso a una variable esta siempre va a valer algo entre 0.000001 y 0.999999
//parseInt convertir a valor númerico
//floor redondear hacia abajo
//ceil aproximación decimal hacia arriba
//math.random() siempre devuelve un número aleatorio en el rango dicho anteriormente
//javascript funciona de esta ,anera
//va a leer todo el codigo, coge las funciones y las pone en random
//luego vuelve a leer todo y va ejecutando

//Nota: canvas siempre dibuja encima de la imagen anterior
let cows = document.getElementById("cows");
let pigs = document.getElementById("pigs");
let chickens = document.getElementById("chickens");
let dogs = document.getElementById("dogs");
let farmer = document.getElementById("farmer");


var vp = document.getElementById("villa");
var papel = vp.getContext("2d");
document.addEventListener("keydown", moverPastor);


//variable para el movimiento del perro
var movimiento = 20;

//Coordenadas del perro
var coordenadaspastor = {
  x: 240,
  y: 240
}

//Creamos los objetos de imagenes
var fondo = {
  url: "img/tile.png",
  cargaOK: false
}

var fondo2 = {
  url: "img/tile2.png",
  cargaOK: false
}

var vaca = {
  url: "img/vaca.png",
  cargaOK: false
};
var cerdo = {
  url: "img/cerdo.png",
  cargaOK: false
};
var pollo = {
  url: "img/pollo.png",
  cargaOK: false
};
var pastor = {
  url: "img/pastor2.png",
  cargaOK: false
};

var granjero = {
  url: "img/farmer2.png",
  cargaOK: false
};


var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
};


//rango de cantida de vacas
var cantidadcows = aleatorio(1, 10);
var cantidadpigs = aleatorio(1, 10);
var cantidadchickens = aleatorio(1, 10);
var cantidaddogs = 1;
var cantidadfarmers = aleatorio(0, 1);



function cargarContador() {
  cows.value = cantidadcows;
  pigs.value = cantidadpigs;
  chickens.value = cantidadchickens;
  dogs.value = cantidaddogs;
  farmer.value = cantidadfarmers;
}

//creamos las imagenes para poner en el canvas
//decimos que el bojeto imagen esta asociado a la variable fondo
//y ese objeto contiene la ruta de la imagen
//a ese objeto asociamos un evento, cargarFondo
//estamos agrgando nuevas variables a un objeto literal
fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

fondo2.imagen = new Image();
fondo2.imagen.src = fondo2.url;
fondo2.imagen.addEventListener("load", cargarFondo2);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdos);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollos);

pastor.imagen = new Image();
pastor.imagen.src = pastor.url;
pastor.imagen.addEventListener("load", cargarPastor);

granjero.imagen = new Image();
granjero.imagen.src = granjero.url;
granjero.imagen.addEventListener("load", cargarGranjero);

//Funciones para poner las imagenes o cargarlas
function cargarFondo() {
  fondo.cargaOK = true;
  dibujar();
}

function cargarFondo2() {
  fondo.cargaOK = true;
  dibujar();
}

function cargarVacas() {
  vaca.cargaOK = true;
  dibujar();
}

function cargarCerdos() {
  cerdo.cargaOK = true;
  dibujar();
}

function cargarPollos() {
  pollo.cargaOK = true;
  dibujar();
}

function cargarPastor() {
  pastor.cargaOK = true;
  dibujar();
}

function cargarGranjero() {
  granjero.cargaOK = true;
  dibujar();
}





//Función dibujar
function dibujar() {
  if (fondo.cargaOK || fondo2.cargaOK) {
    //para poner una imagen en el canvas usamos la función drawImage
    //si en las parámetros ponemos va a poner la imagen completa
    if (contdianoche >= 6 && contdianoche <= 18) {
      papel.drawImage(fondo.imagen, 0, 0);
    } else {
      papel.drawImage(fondo2.imagen, 0, 0);
    }
  }

  //para la función aleatoria pasamos el tamaño total menos las dimensiones de la imagen
  //De esta manera nos aseguramos de que no se salga del canvas
  if (vaca.cargaOK) {
    console.log(cantidadcows);
    for (var v = 0; v < cantidadcows; v++) {
      var x = aleatorio(0, 7);
      var y = aleatorio(0, 7);
      var x = x * 60;
      var y = y * 40;
      papel.drawImage(vaca.imagen, x, y);
    }
  }

  if (cerdo.cargaOK) {
    console.log(cantidadpigs);
    for (var v = 0; v < cantidadpigs; v++) {
      var x = aleatorio(0, 7);
      var y = aleatorio(0, 7);
      var x = x * 60;
      var y = y * 40;
      papel.drawImage(cerdo.imagen, x, y);
    }
  }

  if (pollo.cargaOK) {
    console.log(cantidadchickens);
    for (var v = 0; v < cantidadchickens; v++) {
      var x = aleatorio(0, 7);
      var y = aleatorio(0, 7);
      var x = x * 60;
      var y = y * 40;
      papel.drawImage(pollo.imagen, x, y);
    }
  }

  if (pastor.cargaOK) {
    papel.drawImage(pastor.imagen, coordenadaspastor.x, coordenadaspastor.y);
  }

  if (granjero.cargaOK) {
    if (cantidadfarmers == 1) {
      papel.drawImage(granjero.imagen, 420, 420);
    }
  }

  cargarContador();

}


//mover uno de los elementos

function moverPastor(evento) {

  switch (evento.keyCode) {
    case teclas.UP:
      coordenadaspastor.y = coordenadaspastor.y - movimiento;
      if (coordenadaspastor.y < -40) {
        coordenadaspastor.y = 500;
      }
      dibujar();
      break;
    case teclas.DOWN:
      coordenadaspastor.y = coordenadaspastor.y + movimiento
      if (coordenadaspastor.y > 500) {
        coordenadaspastor.y = 0;
      }
      dibujar();
      break;
    case teclas.LEFT:
      coordenadaspastor.x = coordenadaspastor.x - movimiento;
      if (coordenadaspastor.x < -40) {
        coordenadaspastor.x = 500;
      }
      dibujar();
      break;
    case teclas.RIGHT:
      coordenadaspastor.x = coordenadaspastor.x + movimiento;
      if (coordenadaspastor.x > 500) {
        coordenadaspastor.x = 0;
      }
      dibujar();
      break;
    default:
  }
}

//Función para generar números aleatorios
function aleatorio(min, maxi) {
  var resultado;
  resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
  return resultado;
}

//contador para dia y noche
let contdianoche = 1;

function contador() {
  if (contdianoche >= 24) {
    contdianoche = 1;
  }
  let contador = document.getElementById("contador");
  contador.value = contdianoche + ":00 hs";
  contdianoche++;
  console.log(contdianoche);
  if (contdianoche == 6 || contdianoche == 19) {
    dibujar();
  }
}

//intervalo de contador
setInterval('contador()', 1000);