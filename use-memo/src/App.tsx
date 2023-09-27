import { useMemo, useState } from "react";
import "./App.css";

// Just to simulate a slow function
function slowFunction(num: number): number {
  console.log("Running slow function");
  for (let i = 0; i <= 1000000000; i++) {}
  return num * 2;
}

console.log(
  "useMemo -> guarda o resultado de um cálculo em memória, para não precisar refazer o cálculo a cada vez que o component re-renderiza.\n\n-> Experimente retirar o useMemo para ver o que acontece."
);

export default function App() {
  const [inputValue, setInputValue] = useState(() => {
    return 0;
  });
  const [dark, setDark] = useState(() => {
    return true;
  });
  const doubleNumber = useMemo(() => {
    return slowFunction(inputValue);
  }, [inputValue]);
  const themeStyles = () => {
    return {
      backgroundColor: dark ? "#414042" : "#e3e3e3",
      color: dark ? "#fafafa" : "#000",
      border: "none",
      padding: "0.2rem",
    };
  };

  return (
    <>
      <h1>Hook: useMemo</h1>
      <br />
      <input
        type="number"
        value={inputValue}
        onChange={(e) =>
          setInputValue(() => {
            return e.target.value ? parseInt(e.target.value) : 0;
          })
        }
      />
      <br />
      <button
        onClick={() =>
          setDark(() => {
            return !dark;
          })
        }
        style={{ margin: "1rem", fontSize: ".9rem" }}
      >
        Toggle Output Theme
      </button>
      <br />
      <input
        style={themeStyles()}
        type="number"
        value={doubleNumber}
        readOnly
      />
      <p>PS: check the console</p>
    </>
  );
}
