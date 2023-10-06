import {useEffect, useState} from "react";
import "./App.css";


function App() {
 
  const play = (a) => {
    var audio = document.getElementById(a);
    if(a==="Q")
    document.getElementById("display").innerHTML = "Heater 1";
    else if(a==="W")
    {
      document.getElementById("display").innerHTML = "Heater 2";
    }
    else if(a==="E")
    {
      document.getElementById("display").innerHTML = "Heater 3";
    }
    else if(a==="A")
    {
      document.getElementById("display").innerHTML = "Heater 4";
    }
    else if(a==="S")
    {
      document.getElementById("display").innerHTML = "Clap";
    }
    else if(a==="D")
    {
      document.getElementById("display").innerHTML = "Open HH";
    }
    else if(a==="Z")
    {
      document.getElementById("display").innerHTML = "Kick n' Hat";
    }
    else if(a==="X")
    {
      document.getElementById("display").innerHTML = "Kick";
    }
    else if(a==="C")
    {
      document.getElementById("display").innerHTML = "Closed HH";
    }
  
    audio.play();
  };

  const handleUserKeyPress=(e)=>{
   // console.log(e.key);
    if(e.key ==='q' || e.key ==='Q')
    play("Q");
    else if(e.key ==='w'|| e.key ==='W')
    play("W");
    else if(e.key ==='e'|| e.key ==='E')
    play("E");
    else if(e.key ==='a'|| e.key ==='A')
    play("A");
    else if(e.key ==='s'|| e.key ==='S')
    play("S");
    else if(e.key ==='d'|| e.key ==='D')
    play("D");
    else if(e.key ==='z'|| e.key ==='Z')
    play("Z");
    else if(e.key ==='x'|| e.key ==='X')
    play("X");
    else if(e.key ==='c'|| e.key ==='C')
    play("C");
  }
  
  useEffect(() => {
    window.addEventListener("keydown", handleUserKeyPress);
    return () => {
        window.removeEventListener("keydown", handleUserKeyPress);
    };
}, [handleUserKeyPress]);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
      id="maindiv"
    
    >
      <div
        className="d-flex flex-column justify-content-center align-items-center flex-wrap"
        style={{
          backgroundColor: "#b3b3b3",
          width: "400px",
          padding: "10px -10px",
          color: "white",
          border: "2px solid orange",
        }}
        id="drum-machine"
       
        // onKeyPress={(e) => {
        //   if (e.keyCode === 81) {
        //     play("Q");
        //   }
        // }}
      >
        <div
          
          style={{
            width: "70%",
            border: "none",
            backgroundColor: "black",
            textAlign: "right",
            fontSize: "20px",
            height: "40px",
            fontFamily: "Orbitron, sans-serif",
            fontWeight: "bold",
            color: "white",
            marginTop: "20px",
            marginBottom: "20px",
          }}
          id="display"
         
          
        ></div>
        <div
          className="d-flex"
          style={{ marginTop: "0px", width: "95%", backgroundColor: "#b3b3b3" }}
        >
          <div
            className="flex-fill drum-pad"
            style={{
              padding: "15px 6px",
              marginLeft: "20px",
              backgroundColor: "#808080",
              fontWeight: "bold",
              border: "none",
              borderRadius: "5px",
            }}
            id="heater1"
            onClick={() => {
              play("Q");
              
            }}
            
          >
            {" "}
            Q
            <audio id="Q" class="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" type="audio/mp3" >
            
            </audio>
          </div>
          <div
          
            className="flex-fill drum-pad"
            style={{
              padding: "15px 5px",
              marginLeft: "5px",
              backgroundColor: "#808080",
              fontWeight: "bold",
              border: "none",
              borderRadius: "5px",
            }}
            id="heater2"
            onClick={() => {
              play("W");
            }}
          >
            {" "}
            W
            <audio id="W" class="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" type="audio/mp3" > 
            
            </audio>
          </div>

          <div
           
            className="flex-fill drum-pad"
            style={{
              backgroundColor: "#808080",
              marginLeft: "5px",
              marginRight: "20px",
              fontWeight: "bold",
              border: "none",
              borderRadius: "5px",
            }}
            id="heater3"
            onClick={() => {
              play("E");
            }}
          >
            {" "}
            E
            <audio id="E" class="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" type="audio/mp3">
            
            </audio>
          </div>
        </div>

        <div
          className="d-flex"
          style={{
            marginTop: "10px",
            width: "95%",
            backgroundColor: "#b3b3b3",
          }}
        >
          <div
           
            className="flex-fill drum-pad"
            style={{
              padding: "15px 8px",
              marginLeft: "20px",
              backgroundColor: "#808080",
              fontWeight: "bold",
              border: "none",
              borderRadius: "5px",
            }}
            id="heater4"
            onClick={() => {
              play("A");
            }}
          >
            {" "}
            A
            <audio id="A" class="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" type="audio/mp3">
             
            </audio>
          </div>
          <div
          
            className="flex-fill drum-pad"
            style={{
              padding: "15px 8px",
              marginLeft: "5px",
              backgroundColor: "#808080",
              fontWeight: "bold",
              border: "none",
              borderRadius: "5px",
            }}
            id="clap"
            onClick={() => {
              play("S");
            }}
          >
            {" "}
            S
            <audio id="S" class="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" type="audio/mp3">
           
            </audio>
          </div>

          <div
            id="openhh"
            className="flex-fill drum-pad"
            style={{
              backgroundColor: "#808080",
              marginLeft: "5px",
              marginRight: "20px",
              fontWeight: "bold",
              border: "none",
              borderRadius: "5px",
            }}
            onClick={() => {
              play("D");
            }}
          >
            {" "}
            D
            <audio id="D" class="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" type="audio/mp3">
             
            </audio>
          </div>
        </div>
        <div
          className="d-flex"
          style={{
            marginTop: "10px",
            width: "95%",
            backgroundColor: "#b3b3b3",
            marginBottom: "20px",
          }}
        >
          <div
            id="kicknhat"
            className="flex-fill drum-pad"
            style={{
              padding: "15px 8px",
              marginLeft: "20px",
              backgroundColor: "#808080",
              fontWeight: "bold",
              border: "none",
              borderRadius: "5px",
            }}
            onClick={() => {
              play("Z");
            }}
          >
            {" "}
            Z
            <audio id="Z" class="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" type="audio/mp3" >
             
            </audio>
          </div>
          <div
            id="kick"
            className="flex-fill drum-pad"
            style={{
              padding: "15px 8px",
              marginLeft: "5px",
              backgroundColor: "#808080",
              fontWeight: "bold",
              border: "none",
              borderRadius: "5px",
            }}
            onClick={() => {
              play("X");
            }}
          >
            {" "}
            X
            <audio id="X" class="clip" src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" type="audio/mp3" >
            
            </audio>
          </div>

          <div
            id="closedhh"
            className="flex-fill drum-pad"
            style={{
              backgroundColor: "#808080",
              marginLeft: "5px",
              marginRight: "20px",
              fontWeight: "bold",
              border: "none",
              borderRadius: "5px",
            }}
            onClick={() => {
              play("C");
            }}
          >
            {" "}
            C
            <audio id="C" class="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" type="audio/mp3" >
             
            </audio>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
