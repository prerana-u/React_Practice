import { useState, useEffect , useRef } from "react";
import "./App.css";

function App() {
  const [bl, setBl] = useState(5);
  const [sl, setSl] = useState(25);
  const [pause, setPause] = useState(false);
  const [secLeft, setSecLeft] = useState(sl-1+':59');
  const previousInputValue = useRef(sl-1+":00");
  const Ref = useRef(null);
  var id;
  // The state for our timer
  const [timer, setTimer] = useState(sl+':00');

  const play = () => {
    var audio = document.getElementById("beep");
    audio.play();
  };

  const getTimeRemaining = (e) => {
    const total = Date.parse(e) - Date.parse(new Date());
    //console.log( Date.parse(e));
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    
    return {
        total, minutes, seconds
    };
}

const startTimer = (e) => {
  let { total, minutes, seconds }
              = getTimeRemaining(e);
  console.log(minutes, total, seconds);

  if (total >= 0) {

      setTimer(

          (minutes > 9 ? minutes : '0' + minutes) + ':'
          + (seconds > 9 ? seconds : '0' + seconds)
      )
  }
  else{
    console.log("hi");
    stopTimer();
    play();
    setSecLeft(bl-1+':59');
    console.log(secLeft);
    clearTimer(getDeadTime());
  }
}
const stopTimer=()=>
{
    
    setSecLeft(timer);
  //  console.log(secLeft);
    clearInterval(Ref.current);
  
}
const clearTimer = (e) => {
  
 console.log(pause);
 if(!pause)
 {
  var a=secLeft;
  setTimer(a);
  console.log(a);
    if (Ref.current) clearInterval(Ref.current);
    id = setInterval(() => {
    
        startTimer(e);
       // setSecLeft(timer);
      
      
    }, 1000)
    Ref.current = id;

    
 }
 else{
  stopTimer();
 }
  

}


const getDeadTime = () => {
  let deadline = new Date();
  let text = previousInputValue.current;
  const myArray = text.split(":");
  // This is where you need to adjust if
  // you entend to add more time
  deadline.setSeconds(deadline.getSeconds() +60);
  deadline.setMinutes(deadline.getMinutes() + sl-1);
  return deadline;
}
  // const startTimer=()=>{

  // }
  const incsession=()=>{
    var s=sl;
   
    if (s<60)
    {
      s=s+1;
      setSl(s);
      setTimer(

        (s > 9 ? s : '0' + s) + ':'
        + '00'
    )
     

    }
   
  }
  const decsession=()=>{
    var s=sl;
   
    if (s>1)
    {
      s=s-1;
      setSl(s);
      setTimer(

        (s > 9 ? s : '0' + s) + ':'
        + '00'
    )
 

    }
   
  }
//   useEffect(() => {
//     clearTimer(getDeadTime());
// }, []);

const onClickStart = () => {
  setPause(!pause);
  clearTimer(getDeadTime());
}

const onClickReset = () => {
  var s=25;
  var b=5;
  setBl(b);
  setSl(s);
  setTimer(

    (s > 9 ? s : '0' + s) + ':'
    + '00'
)

  
}

useEffect(() => {
  previousInputValue.current = timer;
}, [timer]);


// const stopTimer = () => {
//   clearInterval(setSeconds(0))
//   document.querySelector('#counter').remove()
// }

  return (
    <div
      className="App"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        fontFamily: "Times New Roman",
      }}
    >
      <div
        className="d-flex flex-column justify-content-center align-items-center flex-wrap"
        style={{ width: "700px" }}
      >
         <audio id="beep" class="clip" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" type="audio/mp3" ></audio>
        <h1 style={{ color: "white", fontSize: "50px" }}>25 + 5 Clock</h1>
        <h2>Previous Value: {previousInputValue.current}</h2>
        <div className="d-flex flex-row">
          <h2 id="break-label">Break Length</h2>
          <h2 id="session-label">Session Length</h2>
        </div>
        <div className="d-flex flex-row">
          <div
            className="d-flex flex-row align-self-start"
            style={{
              color: "white",
              margin: "10px 20px 10px 130px",
              fontWeight: "bold",
            }}
          >
            <i
              className="fa-solid fa-arrow-up fa-xl"
              id="break-increment"
              style={{ marginTop: "20px" }}
              onClick={() => {
                bl < 60 ? setBl(bl + 1) : setBl(bl);
              }}
            ></i>
            <p
              id="break-length"
              style={{ fontSize: "30px", margin: "0px 20px" }}
            >
              {" "}
              {bl}{" "}
            </p>
            <i
              className="fa-solid fa-arrow-down fa-xl"
              id="break-decrement"
              style={{ marginTop: "22px" }}
              onClick={() => {
                bl > 1 ? setBl(bl - 1) : setBl(bl);
              }}
            ></i>
          </div>

          <div
            className="d-flex flex-row align-self-start"
            style={{ color: "white", margin: "10px 130px", fontWeight: "bold" }}
          >
            <i
              className="fa-solid fa-arrow-up fa-xl"
              id="session-increment"
              style={{ marginTop: "20px" }}
              onClick={() => {
                incsession();
              }}
            ></i>
            <p
              id="session-length"
              style={{ fontSize: "30px", margin: "0px 20px" }}
            >
              {" "}
              {sl}{" "}
            </p>
            <i
              className="fa-solid fa-arrow-down fa-xl"
              id="session-decrement"
              style={{ marginTop: "22px" }}
              onClick={() => {
               decsession();
               
              }}
            ></i>
          </div>
        </div>

        <div
          className="div-flex flex-column justify-content-center align-items-center "
          style={{
            border: "solid 4px teal",
            borderRadius: "10px",
            margin: "30px 0px",
            padding: "20px",
          }}
        >
          <h2
            style={{ alignItems: "center", textAlign: "center" }}
            id="timer-label"
          >
            Session
          </h2>
          <h2 style={{ fontSize: "60px" }} id="time-left">
           {timer}
          </h2>
        </div>

        <div
          className="d-flex flex-row"
          style={{ color: "white", marginTop: "10px" }}
        >
          <i className="fa-solid fa-play fa-2xl" id="start_stop"
          onClick={onClickStart}
          ></i>
          <i className="fa-solid fa-pause fa-2xl" id="start_stop"
            onClick={onClickStart}
          ></i>
          <i
            className="fa-solid fa-rotate-right fa-2xl"
            style={{ marginLeft: "30px" }}
            id="reset"
            onClick={onClickReset}
          ></i>
        </div>
      </div>
    </div>
  );
}

export default App;
