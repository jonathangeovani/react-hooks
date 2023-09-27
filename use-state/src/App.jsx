import { useState } from "react";
import "./App.css";

console.log(
  "Ao passar um valor direto na inicialização do useState, ele aplica essa inicialização novamente toda vez que o component re-renderiza. Para evitar isso, passar uma função que retorna o valor de inicialização. Assim ele será aplicado só na primeira vez\n\nEx.: useState(0) // inicializa com o valor zero sempre que o component re-renderiza.\n     useState(() => {return 0}) // incializa com valor zero apenas na primeira renderização do component.\n\nEssa técnica é importante apenas quando se quer evitar processamento desnecessário na re-renderização."
);

console.log(
  'Para alterar apenas um parametro de um objeto com useState, é preciso acessá-lo assim: "...prevParametro". Caso contrário o useState vai sobrescrever todos os parametros.\n\nVer exemplo no código e tentar tirar os ... para ver o que acontece'
);

function App() {
  // Não necessário! Apenas exemplo.
  const [count, setCount] = useState(() => {
    return 0;
  });
  // Exemplo com objetos no useState
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
      <p>PS: check the console</p>
    </>
  );
}

export default App;
