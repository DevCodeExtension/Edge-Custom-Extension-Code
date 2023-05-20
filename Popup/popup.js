document.addEventListener('DOMContentLoaded', function() {

  // Selección de elementos del DOM
  var closeBtn = document.getElementById('cerrarextencion');
  var botoninfo = document.getElementById('botoninfo');
  var infoBox = document.getElementById("infoBox");
  var cerrarBtn = document.getElementById("botoncerrarinfo");
  var botonconfig = document.getElementById("botonconfig");
  var cerrarBtnConfig = document.getElementById("botoncerrarconfig");
  var configBox = document.getElementById("configBox");
  var btn = document.getElementById("botonfoldergame");
  var modal = document.getElementById("gamesBox");
  var botonCerrar = document.getElementById("cerrarcarpetadejuegos");
  var abrirSistemaSolarClick = document.getElementById("abrirclicksistemasolargame");
  var pantallaClickJuegoSistemaSolar = document.getElementById("pantalladeljuegosistemsolarclick");
  var cerrarSistemaSolarClick = document.getElementById("cerrarclicksistemasolargame");
  var sunsolar = document.getElementById("sunsolar");
  var abrirSnakeGame = document.getElementById("abrirjuegosnake");
  var pantallaDelJuegoSnake = document.getElementById("pantalladeljuegosnake");
  var cerrarSnakeGame = document.getElementById("cerrarjuegodelsanke");
  var abrirCalculator = document.getElementById("botoncalculadora");
  var pantallaCalculator = document.getElementById("calculatorBox");
  var cerrarCalcualtor = document.getElementById("cerrarcalculatorBox");
  var botonAbrirSecreto = document.getElementById("motivacionaltext");
  var secretBox = document.getElementById("systemExtencionBox");
  var cerrarSecretBox = document.getElementById("cerrarSystemBoxExtencion");
  var abrirInfoTierra = document.getElementById("botonconoceelmundo");
  var infoTierraBox = document.getElementById("conocetierraBox");
  var cerrarInfoTierra = document.getElementById("cerrarinfotierra");
  var abrirPanelDestrucion = document.getElementById("botonwebdestruirpanel");
  var webDestructionBox = document.getElementById("paneldestructionBox");
  var cerrarPanelDestruction = document.getElementById("cerrarpaneldestrction");
  var abrirSalvaPlaneta = document.getElementById("botondecuidaalplaneta");
  var salvaPlanetaBox = document.getElementById("planetsavetreeBox");
  var cerrarSalvaPlaneta = document.getElementById("cerraraplanetsaveBox");
  var abrirClockBox = document.getElementById("clockboton");
  var clockBox = document.getElementById("clockBox");
  var cerrarClockBox = document.getElementById("closeclockBox");
  var abrirJuegoTexto = document.getElementById("abrirsimuladordetexto");
  var textoGameBox = document.getElementById("textoBox");
  var rectanguloEscribir = document.getElementById('escriturarectangulardetexto');
  var cerrarTextoGame = document.getElementById("closetextBox");
  var openReadmebox = document.getElementById("abrirReadme");
  var readmeBox = document.getElementById('readmeBox');
  var closeReadmebox = document.getElementById("closeReadmeBox");
  var openDetailBox = document.getElementById("appCustomEdge");
  var DetailInfoBox = document.getElementById('DetailsBox');
  var closeDetailBox = document.getElementById("closeDetailBox");
  const appleCount = document.getElementById("contadorManzanas");
  const manzanaElemento = document.getElementById("manzananormal");
  const dialog = document.querySelector('.dialog');
  let hr = document.querySelector("#hr");
  let mn = document.querySelector("#mn");
  let sc = document.querySelector("#sc");
  let contador = 0;
  let contadorManzanas = 0

  // Eventos de los botones y elementos de la página web

  openDetailBox.onclick = function() {
    DetailInfoBox.style.display = "block";
  };

  closeDetailBox.addEventListener("click", function() {
    DetailInfoBox.style.display = "none";
  });

  openReadmebox.onclick = function() {
    readmeBox.style.display = "block";
  };

  closeReadmebox.addEventListener("click", function() {
    readmeBox.style.display = "none";
  });

  abrirJuegoTexto.onclick = function() {
    textoGameBox.style.display = "block";
  };

  cerrarTextoGame.addEventListener("click", function() {
    textoGameBox.style.display = "none";
  });

  abrirClockBox.onclick = function() {
    clockBox.style.display = "block";
  };

  cerrarClockBox.addEventListener("click", function() {
    clockBox.style.display = "none";
  });

  abrirSalvaPlaneta.onclick = function() {
    salvaPlanetaBox.style.display = "block";
  };

  cerrarSalvaPlaneta.addEventListener("click", function() {
    salvaPlanetaBox.style.display = "none";
  });

  abrirPanelDestrucion.onclick = function() {
    webDestructionBox.style.display = "block";
  };

  cerrarPanelDestruction.addEventListener("click", function() {
    webDestructionBox.style.display = "none";
  });

  abrirInfoTierra.onclick = function() {
    infoTierraBox.style.display = "block";
  };

  cerrarInfoTierra.addEventListener("click", function() {
    infoTierraBox.style.display = "none";
  });

  botonAbrirSecreto.onclick = function() {
    secretBox.style.display = "block";
  };

  cerrarSecretBox.addEventListener("click", function() {
    secretBox.style.display = "none";
  });


  abrirCalculator.onclick = function() {
    pantallaCalculator.style.display = "block";
  };

  cerrarCalcualtor.addEventListener("click", function() {
    pantallaCalculator.style.display = "none";
  });

  abrirSnakeGame.onclick = function() {
    pantallaDelJuegoSnake.style.display = "block";
  };

  cerrarSnakeGame.addEventListener("click", function() {
    pantallaDelJuegoSnake.style.display = "none";
  });

  abrirSistemaSolarClick.onclick = function() {
    pantallaClickJuegoSistemaSolar.style.display = "block";
  };

  cerrarSistemaSolarClick.addEventListener("click", function() {
    pantallaClickJuegoSistemaSolar.style.display = "none";
  });

  btn.onclick = function() {
    modal.style.display = "block";
  };

  botonCerrar.addEventListener("click", function() {
    modal.style.display = "none";
  });

  botonconfig.onclick = function() {
    configBox.style.display = 'block';
    dialog.showModal();
  };

  cerrarBtn.addEventListener('click', function() {
    infoBox.style.display = 'none';
    dialog.close();
  });

  cerrarBtnConfig.addEventListener('click', function() {
    configBox.style.display = 'none';
    dialog.close();
  });

  botonconfig.addEventListener("click", function() {
    configBox.classList.toggle("visible");
  });

  botoninfo.addEventListener("click", function() {
    infoBox.classList.toggle("visible");
    infoBox.style.display = 'block';
  });

  closeBtn.addEventListener('click', function() {
    window.close();
  });

  sunsolar.addEventListener('click', function() {
    contador++;
    document.getElementById('contador').innerHTML = contador;
    sunsolar.style.transform = 'scale(1.1)';
  });

  sunsolar.addEventListener('click', function() {
    contador++;
    document.getElementById('contador').innerHTML = contador;
    sunsolar.style.animationPlayState = "running"; /* activa la animación al hacer clic */
    setTimeout(function() {
      sunsolar.style.animationPlayState = "paused"; /* detiene la animación después de 1 segundo */
    }, 1000);
  });

  manzanaElemento.addEventListener("click", function() {
    let puntos = 1;
    const random = Math.random();
  
    if (random < 0.3) { // probabilidad del 30%
      puntos = 2;
    } else if (random < 0.303) { // probabilidad del 0.3%
      puntos = 10;
    } else if (random < 0.30305) { // probabilidad del 0.005%
      puntos = 30;
    }
  
    contadorManzanas += puntos;
    appleCount.textContent = contadorManzanas;
  
    manzanaElemento.classList.add("animacion");
    setTimeout(function() {
      manzanaElemento.classList.remove("animacion");
    }, 300);

    if (contadorManzanas % 100 === 0) {
      const sound = document.getElementById("sound");
      sound.play();
    }    
  });

    rectanguloEscribir.addEventListener('input', function() {
    // Establecer el tipo de letra del rectángulo como "Press Start 2P"
      rectanguloEscribir.style.fontFamily = '"Press Start 2P", cursive';
      rectanguloEscribir.style.fontSize = '15px';
  }); 
  
})

//* Copyright (c) 2023 DanDev
