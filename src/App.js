import { useState } from "react";

function App() {
  const iconSize = 100;
  const vWidth = window.innerWidth;
  const vHeight = window.innerHeight;
  const top = Math.floor(Math.random() * vHeight);
  const left = Math.floor(Math.random() * vWidth);

  const getRandomPosition = () => ({
    top: top - iconSize,
    left: left - iconSize,
  });

  const [posicionActual, setPosicionActual] = useState(getRandomPosition());

  const aleatoryPosition = () => {
    setTimeout(() => {
      setPosicionActual(getRandomPosition());
    }, 300);
  };

  return (
    <div className="contenedor">
      <i
        className="icono fab fa-fly"
        style={{ top: posicionActual.top, left: posicionActual.left }}
        onMouseOver={aleatoryPosition}
      ></i>
    </div>
  );
}

export default App;
