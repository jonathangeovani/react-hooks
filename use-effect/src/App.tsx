import { useEffect, useState } from "react";
import "./App.css";

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
