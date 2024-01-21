
import { useRef, useState } from 'react';
import './App.css';

function App() {
  const[todos, setodos]=useState([]);
 const inputRef =useRef();
const handelclick=()=>{
  const text=inputRef.current.value;
const newiteam = {complet:false,text};
  setodos([...todos,newiteam])
  inputRef.current.value="";
}
const handeldone=(index)=>{
  const newtodos = [...todos];
  newtodos[index].complet=!newtodos[index].complet;
  setodos(newtodos);
}

const handldelete=(index)=>{
  const newtodos = [...todos];
  newtodos.splice(index,1);
  setodos(newtodos);


}


  return (
    <div className="App">
      <h2>welcom tudo list</h2>
      <p>
        iam so happy to create this app
      </p>
      <div className='continer'>
        <ul>
        {todos.map(({text,complet },index)=>{
          return <div className='item'>
            <li key={index} onClick={()=>handeldone(index)} className={complet? "done" : "null"}> {text}</li>
            <span className='trach' onClick={()=>handldelete(index)}>❌</span>

          </div> 
        })}
      </ul>
      <input ref={inputRef} placeholder='add iteam....'></input>
      <button onClick={handelclick}>Add</button>

      </div>
      <div className='img'>
      </div>
    </div>
  );
}

export default App;
