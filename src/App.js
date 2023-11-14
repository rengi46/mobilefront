import './App.css';
import { io } from "socket.io-client";
import { useEffect, useState } from "react";
import gatos from "./images/gato.jpg";

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
        <img src={gatos} onClick={() => {
          socket.emit("videoChange", "gatos");
        }}/>
        <img src={gatos} onClick={() => {
          socket.emit("videoChange", "perros");
        }}/>
        <img src={gatos} onClick={() => {
          socket.emit("videoChange", "niños");
        }}/>
        <img src={gatos} onClick={() => {
          socket.emit("videoChange", "moments");
        }}/>
      </div>
    </div>
  );
}

export default App;
