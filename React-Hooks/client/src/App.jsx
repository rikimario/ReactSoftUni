import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "./components/Navigatio";
import CardContainer from "./components/CardContainer";

const baseUrl = "http://localhost:3030/jsonstore";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch(`${baseUrl}/todos`);
  }, []);
  return (
    <>
      <Nav />
      <CardContainer />
    </>
  );
}

export default App;
