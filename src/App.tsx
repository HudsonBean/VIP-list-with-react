import { useState } from 'react'
import './App.css'

function VipList () {
  const [namesList, setNamesList] = useState(["Hudson", "John", "Fred", "Bill"]);
  const [name, setName] = useState("");

  function addName() {
    if (name == "" || name == " ") {
      return;
    }
    for (let i = 0; i < namesList.length; i++) {
      if (namesList[i] == name) {
        return;
      }
    }
    let _a = [... namesList, name];
    setNamesList(_a);
    setName("");
  }

  return (
    <>
      <ul>
        {namesList.map(name =>
          <li key={name}>
            {name}
          </li>
        )}
      </ul>
      <input type='text' value={name} onChange={(e) => {setName(e.target.value); console.log('da');} }></input>
      <button className='addNameButton' onClick={addName}>Add Name</button>
    </>
  )
}

function App() {
  return (
    <>
      <div className="container">
        <h1>Club V.I.P List</h1>
        <VipList />
      </div>
    </>
  )
}

export default App
