// 🎮 Juego: Adivina el número
function iniciarJuego() {
  console.clear();
  console.log("🟢 El juego ha comenzado: Adivina el número del 1 al 10");

  const numeroSecreto = Math.floor(Math.random() * 10) + 1;
  let intentos = 3;

  const nombreJugador = prompt("👋 ¡Hola! ¿Cuál es tu nombre?");

  while (intentos > 0) {
    let intento = prompt(`${nombreJugador}, tienes ${intentos} intento(s). Ingresa un número entre 1 y 10:`);

    if (intento === null || intento.trim() === "" || isNaN(intento)) {
      alert("⚠️ Por favor ingresa un número válido.");
      continue;
    }

    intento = Number(intento);

    if (intento < 1 || intento > 10) {
      alert("⚠️ El número debe estar entre 1 y 10.");
      continue;
    }

    if (intento === numeroSecreto) {
      alert(`🎉 ¡Felicidades, ${nombreJugador}! Adivinaste el número secreto ${numeroSecreto}.`);
      console.log("✅ El jugador ganó el juego.");
      break;
    } else if (intento < numeroSecreto) {
      alert("📉 Demasiado bajo. Intenta con un número mayor.");
    } else {
      alert("📈 Demasiado alto. Intenta con un número menor.");
    }

    intentos--;
  }

  if (intentos === 0) {
    alert(`💀 Lo siento, ${nombreJugador}. Se acabaron tus intentos. El número secreto era ${numeroSecreto}.`);
    console.log("❌ El jugador no adivinó el número.");
  }

  console.log("🔴 El juego ha finalizado.");

  // Preguntar si desea jugar de nuevo
  const reiniciar = confirm("¿Quieres jugar otra vez?");
  if (reiniciar) {
    iniciarJuego();
  } else {
    alert("👋 Gracias por jugar, ¡hasta la próxima!");
  }
}

// Iniciar el juego por primera vez
iniciarJuego();