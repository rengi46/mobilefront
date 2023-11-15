import './App.css';
import { io } from "socket.io-client";
import { useEffect, useState } from "react";
import gatos from "./images/gato.jpg";
import perros from "./images/perro.jpg";
import niños from "./images/niños.jpg";
import moments from "./images/gracios.jpg";

const socket = io("http://localhost:3001");
function App() {
  const [conect, setConect] = useState(false);
  const [color, setColor] = useState("red");
  
  useEffect(() => {
    socket.on("connect", () => {
      setConect(true);
    });
  }, []);

  return (
    <div className="App">
     {/* <h2>{conect ? "conectado":"no conectado"}</h2> */}
      {/* <input type="color" onChange={(e) => {
        socket.emit("colorChange", e.target.value);
      }
      }/> */}
      <div className='selectVideo'>
        <div className='titulo'>
          <h2>Que quieres ver ?</h2>
        </div>
        <img src={gatos} onClick={() => {
          socket.emit("videoChange", "gatos");
        }}/>
        <img src={perros} onClick={() => {
          socket.emit("videoChange", "perros");
        }}/>
        <img src={niños} onClick={() => {
          socket.emit("videoChange", "niños");
        }}/>
        <img src={moments} onClick={() => {
          socket.emit("videoChange", "moments");
        }}/>
      </div>
    </div>
  );
}

export default App;
