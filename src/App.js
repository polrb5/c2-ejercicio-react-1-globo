import { useState } from "react";

function App() {
  const vWidth = window.innerWidth;
  const vHeight = window.innerHeight;
  const top = Math.floor(Math.random() * vHeight);
  const left = Math.floor(Math.random() * vWidth);

  const getRandomPosition = () => ({
    top: top,
    left: left,
  });

  const [posicionActual, setPosicionActual] = useState(getRandomPosition());
  const [points, setPoints] = useState(0);

  const aleatoryPosition = () => {
    setTimeout(() => {
      setPosicionActual(getRandomPosition());
    }, 300);
  };
  const countPoints = () => {
    setPoints(points + 1);
  };

  return (
    <>
      <p>Puntos: {points}</p>
      <i
        className="icono fab fa-fly"
        style={{ top: posicionActual.top, left: posicionActual.left }}
        onMouseOver={aleatoryPosition}
        onClick={countPoints}
      ></i>
    </>
  );
}

export default App;
