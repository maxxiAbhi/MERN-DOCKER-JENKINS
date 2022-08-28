import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [title, setTitle] = useState('');
  const [discription, setDiscription] = useState('');
  const BASE_URL = process.env.REACT_APP_BASE_URL;

  const addTodo = async (e) => {
    e.preventDefault()
    const config = {
      headers: {
        'Content-Type': 'application/json',
      }

    }
    console.log(BASE_URL)
    const response = await axios.post(`${BASE_URL}/addtodo`,{title,description:discription},config);
   if(response.data.status===200){
    setTitle('')
    setDiscription('')
   }
  };

  return (
    <div className="App">
      <h1>Todos Abhinandan</h1>
     <div className="container">
     <form>
        <div className="mb-3">
          <label className="form-label">
            Title
          </label>
          <input
            type="text"
            value={title}
            className="form-control"
            onChange={(e)=>setTitle(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">
            Discription
          </label>
          <input
            type="text"
            value={discription}
            className="form-control"
            onChange={(e)=>setDiscription(e.target.value)}
          />
        </div>
        <button type="submit" 
         className="btn btn-primary"
         onClick={(e)=>addTodo(e)}
         >
          Add Todo
        </button>
      </form>
     </div>
    </div>
  );
}

export default App;
