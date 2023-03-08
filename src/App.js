import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [data, setData]= useState([]);

  useEffect(()=>{
    loadUsersData();
  },[]);
  const loadUsersData = async () => {
    return await axios.get("http://localhost:5000/users")
    .then((response)=> setData(response.data))
    .catch((err)=> console.log(err))
  };

  console.log("data",data);


  return (
    <div className="App">
      
      <h1>Hello</h1>
    </div>
  );
}

export default App;
