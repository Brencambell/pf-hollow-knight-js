//Llamadas fetch: parte 2 del juego

//amuletos
fetch('../accesorios.json')
  .then(response => response.json())
  .then(data => {
    const tituloAmuleto = document.querySelector('#tituloAmuleto');
    tituloAmuleto.querySelector('h2').textContent = data.equipamiento1.title;
    tituloAmuleto.querySelector('p').textContent = data.equipamiento1.description;

    const bug = data.equipamiento1.items[0];
    const amuleto1 = document.querySelector('#amuleto1');
    amuleto1.querySelector('i').className = bug.icon;
    amuleto1.querySelector('h3').textContent = bug.name;
    amuleto1.querySelector('p').textContent = bug.description;

    const gem = data.equipamiento1.items[1];
    const amuleto2 = document.querySelector('#amuleto2');
    amuleto2.querySelector('i').className = gem.icon;
    amuleto2.querySelector('h3').textContent = gem.name;
    amuleto2.querySelector('p').textContent = gem.description;

    const capsule = data.equipamiento1.items[2];
    const amuleto3 = document.querySelector('#amuleto3');
    amuleto3.querySelector('i').className = capsule.icon;
    amuleto3.querySelector('h3').textContent = capsule.name;
    amuleto3.querySelector('p').textContent = capsule.description;

    const chain = data.equipamiento1.items[3];
    const amuleto4 = document.querySelector('#amuleto4');
    amuleto4.querySelector('i').className = chain.icon;
    amuleto4.querySelector('h3').textContent = chain.name;
    amuleto4.querySelector('p').textContent = chain.description;
  })

  .catch(error => {
    console.error('Ha ocurrido un error:', error);
  });

//Hechizos
fetch('../accesorios.json')
.then(response => response.json())
.then(data => {
  const tituloHechizo = document.querySelector('#tituloHechizo');
  tituloHechizo.querySelector('h2').textContent = data.equipamiento2.title;
  tituloHechizo.querySelector('p').textContent = data.equipamiento2.description;

  const droplet = data.equipamiento2.items[0];
  const hechizo1 = document.querySelector('#hechizo1');
  hechizo1.querySelector('i').className = droplet.icon;
  hechizo1.querySelector('h3').textContent = droplet.name;
  hechizo1.querySelector('p').textContent = droplet.description;

  const fire = data.equipamiento2.items[1];
  const hechizo2 = document.querySelector('#hechizo2');
  hechizo2.querySelector('i').className = fire.icon;
  hechizo2.querySelector('h3').textContent = fire.name;
  hechizo2.querySelector('p').textContent = fire.description;

  const hurricane = data.equipamiento2.items[2];
  const hechizo3 = document.querySelector('#hechizo3');
  hechizo3.querySelector('i').className = hurricane.icon;
  hechizo3.querySelector('h3').textContent = hurricane.name;
  hechizo3.querySelector('p').textContent = hurricane.description;

  const lightning = data.equipamiento2.items[3];
  const hechizo4 = document.querySelector('#hechizo4');
  hechizo4.querySelector('i').className = lightning.icon;
  hechizo4.querySelector('h3').textContent = lightning.name;
  hechizo4.querySelector('p').textContent = lightning.description;
})

.catch(error => {
  console.error('Ha ocurrido un error:', error);
});

//Armas
fetch('../accesorios.json')
.then(response => response.json())
.then(data => {
  const tituloArma = document.querySelector('#tituloArma');
  tituloArma.querySelector('h2').textContent = data.equipamiento3.title;
  tituloArma.querySelector('p').textContent = data.equipamiento3.description;

  const hammer = data.equipamiento3.items[0];
  const arma1 = document.querySelector('#arma1');
  arma1.querySelector('i').className = hammer.icon;
  arma1.querySelector('h3').textContent = hammer.name;
  arma1.querySelector('p').textContent = hammer.description;

  const arrow = data.equipamiento3.items[1];
  const arma2 = document.querySelector('#arma2');
  arma2.querySelector('i').className = arrow.icon;
  arma2.querySelector('h3').textContent = arrow.name;
  arma2.querySelector('p').textContent = arrow.description;

  const shield = data.equipamiento3.items[2];
  const arma3 = document.querySelector('#arma3');
  arma3.querySelector('i').className = shield.icon;
  arma3.querySelector('h3').textContent = shield.name;
  arma3.querySelector('p').textContent = shield.description;

  const wand = data.equipamiento3.items[3];
  const arma4 = document.querySelector('#arma4');
  arma4.querySelector('i').className = wand.icon;
  arma4.querySelector('h3').textContent = wand.name;
  arma4.querySelector('p').textContent = wand.description;
})

.catch(error => {
  console.error('Ha ocurrido un error:', error);
});

//Habilidades
fetch('../accesorios.json')
.then(response => response.json())
.then(data => {
  const tituloHabilidad = document.querySelector('#tituloHabilidad');
  tituloHabilidad.querySelector('h2').textContent = data.equipamiento4.title;
  tituloHabilidad.querySelector('p').textContent = data.equipamiento4.description;

  const hearing = data.equipamiento4.items[0];
  const habilidad1 = document.querySelector('#habilidad1');
  habilidad1.querySelector('i').className = hearing.icon;
  habilidad1.querySelector('h3').textContent = hearing.name;
  habilidad1.querySelector('p').textContent = hearing.description;

  const hypnotize = data.equipamiento4.items[1];
  const habilidad2 = document.querySelector('#habilidad2');
  habilidad2.querySelector('i').className = hypnotize.icon;
  habilidad2.querySelector('h3').textContent = hypnotize.name;
  habilidad2.querySelector('p').textContent = hypnotize.description;

  const radioactive = data.equipamiento4.items[2];
  const habilidad3 = document.querySelector('#habilidad3');
  habilidad3.querySelector('i').className = radioactive.icon;
  habilidad3.querySelector('h3').textContent = radioactive.name;
  habilidad3.querySelector('p').textContent = radioactive.description;

  const tornado = data.equipamiento4.items[3];
  const habilidad4 = document.querySelector('#habilidad4');
  habilidad4.querySelector('i').className = tornado.icon;
  habilidad4.querySelector('h3').textContent = tornado.name;
  habilidad4.querySelector('p').textContent = tornado.description;
})

.catch(error => {
  console.error('Ha ocurrido un error:', error);
});


//Seleccionar y habilitar el container para seguir
let contador = 0;

function seleccionEquipamiento(seccion) {
  const buttons = seccion.querySelectorAll('.buttonSeleccionar');

  buttons.forEach(boton => {
    boton.addEventListener('click', () => {
      // Si el botón está seleccionado, deseleccionarlo
      if (boton.classList.contains('buttonSeleccionado')) {
        boton.classList.remove('buttonSeleccionado');
        boton.classList.add('buttonPrincipal');
        contador--;
      } else if (contador < 4) {
        // Seleccionar botón actual
        boton.classList.remove('buttonPrincipal');
        boton.classList.add('buttonSeleccionado');
        contador++;
      } else {
        // Deseleccionar botón más antiguo y seleccionar el actual
        const botonesSeleccionados = seccion.querySelectorAll('.buttonSeleccionado');
        botonesSeleccionados[0].classList.remove('buttonSeleccionado');
        botonesSeleccionados[0].classList.add('buttonPrincipal');
        boton.classList.remove('buttonPrincipal');
        boton.classList.add('buttonSeleccionado');
      }

      // Ejecuto función para comprobar selección
      comprobarSeleccion();
    });
  });
};

// Función para comprobar selección
function comprobarSeleccion() {
  if (contador === 4) {
    document.querySelector(".seccionSiguiente").style.display = "block";
  } else {
    document.querySelector(".seccionSiguiente").style.display = "none";
  }
}

// Llamo a la función para aplicarla en cada sección de equipamiento
const seccionAmuleto = document.querySelector('.seccionAmuleto');
seleccionEquipamiento(seccionAmuleto);

const seccionHechizo = document.querySelector('.seccionHechizo');
seleccionEquipamiento(seccionHechizo);

const seccionArma = document.querySelector('.seccionArma');
seleccionEquipamiento(seccionArma);

const seccionHabilidad = document.querySelector('.seccionHabilidad');
seleccionEquipamiento(seccionHabilidad);