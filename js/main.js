const seleccionarPersonaje = document.querySelectorAll('.seleccionarPersonaje');

seleccionarPersonaje.forEach(button => {
  button.addEventListener('click', () => {
    const diceSection = document.querySelector('#diceSection');
    const personajeSection = button.closest('.personaje');
    personajeSection.appendChild(diceSection);
    diceSection.style.display = 'block';
  });
});

const cerrarDados = document.querySelector('.cerrarDados');
cerrarDados.addEventListener('click', () => {
  const diceSection = document.querySelector('#diceSection');
  diceSection.style.display = 'none';
});

const tirarDados = document.querySelector ('#tirarDados');

tirarDados.addEventListener ('click', () => {
  const vida = document.querySelector('#diceVida');
  const fuerza = document.querySelector('#diceFuerza');
  const defensa = document.querySelector('#diceDefensa');
  
  vida.textContent = 'Vida: ' + (Math.floor(Math.random() * 100) + 1);
  fuerza.textContent = 'Fuerza: ' + (Math.floor(Math.random() * 100) + 1);
  defensa.textContent = 'Defensa: ' + (Math.floor(Math.random() * 100) + 1);
});

const guardarValores = document.querySelector('#guardarValores');

guardarValores.addEventListener('click', () => {
  // Obtener los valores
  const vida = document.querySelector('#diceVida').textContent;
  const fuerza = document.querySelector('#diceFuerza').textContent;
  const defensa = document.querySelector('#diceDefensa').textContent;

   // Crear un objeto con los valores de vida, fuerza y defensa
   const valores = {
    vida: vida,
    fuerza: fuerza,
    defensa: defensa
  };

  // Convertir cada propiedad del objeto a una cadena de texto JSON
  const vidaJSON = JSON.stringify(valores.vida);
  const fuerzaJSON = JSON.stringify(valores.fuerza);
  const defensaJSON = JSON.stringify(valores.defensa);

  // Guardar cada cadena JSON en el localStorage con una clave única para cada propiedad
  localStorage.setItem('vidaPersonaje', vidaJSON);
  localStorage.setItem('fuerzaPersonaje', fuerzaJSON);
  localStorage.setItem('defensaPersonaje', defensaJSON);

  // alert("Los valores de tu personaje fueron guardados en el Local Storage")
  Swal.fire({
    title: 'Genial!',
    text: 'Los valores de tu personaje fueron guardados en el Local Storage!. Ahora pasarás a la segunda etapa de la creación de tu peronaje.',
    icon: 'success',
    confirmButtonText: '¡Sigamos!',
    background: 'black',
    color: 'white',
    confirmButtonColor: '#10DC86',
  })
  .then(() => {
    window.location.href = "demo2.html";
  });

});