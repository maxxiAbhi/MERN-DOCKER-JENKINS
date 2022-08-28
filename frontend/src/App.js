import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [data, setdata] = useState([]);
  const BASE_URL = process.env.REACT_APP_BASE_URL;
  const getTodos = async () => {
    const response = await axios.get(`${BASE_URL}/getalltodos`);
    if (response.data.status === 200) {
      setdata(response.data.data);
    }
  };
  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div className="App">
      <h1>Todosssssy yo yo</h1>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">TITLE</th>
            <th scope="col">DISCRIPTION</th>
          </tr>
        </thead>
        <tbody>
          {data.map((todo) => {
            return (
              <tr key={todo._id}>
                <th scope="row">{todo._id}</th>
                <td>{todo.title}</td>
                <td>{todo.description}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
