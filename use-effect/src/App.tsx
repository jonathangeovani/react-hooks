import { useEffect, useState } from "react";
import "./App.css";

console.log(
  "useEffect -> recebe uma função que será executada assim que o component é renderizado (on mount), e uma lista de valores, que executarão a função novamente se um deles for alterado.\n\n-> o retorno é usado para limpar o useEffect (unmount) antes de executá-lo novamente. Ex.: desconectar-se de uma api antes de fazer a requisição (que se conectaria novamente)"
);

export default function App() {
  const [resourceType, setResourceType] = useState(() => {
    return "posts";
  });

  useEffect(() => {
    console.log("resource changed, useEffect runs");

    return () => {
      console.log("return from resource change, useEffect was cleaned up");
    };
  }, [resourceType]);

  return (
    <>
      <h1>Hook: useEffect</h1>
      <br />
      <div>
        <button
          onClick={() => {
            setResourceType("posts");
          }}
        >
          Posts
        </button>
        <button
          onClick={() => {
            setResourceType("users");
          }}
        >
          Users
        </button>
        <button
          onClick={() => {
            setResourceType("comments");
          }}
        >
          Comments
        </button>
      </div>
      <h2>{resourceType}</h2>
      <p>PS: check the console</p>
    </>
  );
}
