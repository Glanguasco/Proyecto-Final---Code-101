# 🎮 Proyecto Final – Code 101: Adivina el Número

Este proyecto consiste en un pequeño juego interactivo por consola donde el usuario debe adivinar un número secreto generado por el programa.

---

## 🚀 Descripción del juego

- El juego genera un número secreto entre 1 y 10.
- El jugador tiene **3 intentos** para adivinarlo.
- El juego indica si el intento es:
  - 📉 Demasiado bajo
  - 📈 Demasiado alto
  - ✅ Correcto
- Al finalizar, se pregunta si desea **jugar nuevamente** sin recargar la página.

---

## 🛠️ Tecnologías usadas

- **HTML** – estructura básica.
- **JavaScript** – lógica del juego.
- **Console / Prompt / Alert** – interacción básica.

---

## 🧠 Lógica implementada

- Uso de `Math.random()` para generar el número secreto.
- Uso de `prompt()`, `alert()` y `confirm()` para interacción.
- Condicionales (`if/else`) para verificar el intento.
- Bucle `while` para controlar los 3 intentos.
- Validación de entrada de datos con `isNaN` y límites.
- Función `iniciarJuego()` para reiniciar sin recargar la página.

---

## 🖥️ Instrucciones para jugar

1. Abre el archivo `index.html` en tu navegador.
2. Responde al prompt con tu nombre.
3. Ingresa un número del 1 al 10.
4. Sigue las pistas hasta ganar o perder.
5. Al final, podrás jugar de nuevo si lo deseas.

---