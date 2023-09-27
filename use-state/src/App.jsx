import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(() => {
    return 0;
  });
  const [text, setText] = useState({
    title: "velho titulo",
    description: "velho descrição",
  });

  function incrementCount() {
    setCount((prevCount) => prevCount + 1);
  }

  function decrementCount() {
    setCount((prevCount) => prevCount - 1);
  }

  return (
    <>
      <h1>Hook: useState</h1>
      <button onClick={incrementCount}>Increment</button>
      <h2>Count: {count}</h2>
      <button onClick={decrementCount}>Decrement</button>
      <br />
      <h2>Titulo: {text.title}</h2>
      <h2>Descrição: {text.description}</h2>
      <button
        onClick={() =>
          text.title !== "novo titulo"
            ? setText((prevText) => {
                return { ...prevText, title: "novo titulo" };
              })
            : setText((prevText) => {
                return { ...prevText, title: "velho titulo" };
              })
        }
      >
        Alterar Título
      </button>
      &nbsp;&nbsp;
      <button
        onClick={() =>
          text.description !== "nova descrição"
            ? setText((prevText) => {
                return { ...prevText, description: "nova descrição" };
              })
            : setText((prevText) => {
                return { ...prevText, description: "velha descrição" };
              })
        }
      >
        Alterar Descrição
      </button>
    </>
  );
}

export default App;
