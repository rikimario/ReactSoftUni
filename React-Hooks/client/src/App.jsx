import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "./components/Navigatio";
import CardContainer from "./components/CardContainer";

const baseUrl = "http://localhost:3030/jsonstore/todos";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch(baseUrl)
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        setTodos(Object.values(result));
      });
  }, []);

  const onSubmitHandler = async (value) => {
    const response = await fetch(baseUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...value, isFinish: "false" }),
    });

    const data = await response.json();
    setTodos((state) => [...state, data]);
  };

  return (
    <>
      <Nav />
      <CardContainer todos={todos} onSubmitHandler={onSubmitHandler} />
    </>
  );
}

export default App;
