import "./App.css";
import {useEffect, useState} from 'react';
function App() {
  const [value, setValue]=useState("0");
  const [conValue, setconValue]=useState("0");
  const operators =  ['+', '-', '*', '/'];
  const isOperator = (e) => operators.includes(e);  
  var str1="",str2="";
  const calc=(e)=>
  {
      if(e.target.value==="AC")
      {
        setconValue("0");
        setValue("0");
      }

      else if(e.target.value==="=")
      {
        const myArray=conValue.split(" ");
       
        for (let i = 0; i < myArray.length; i++)
        {
          console.log("hi");
          if(isOperator(myArray[i]) && isOperator(myArray[i+1]) && myArray[i+1]!=="-")
          {
            myArray.splice(i,1);
            str1=myArray.join(" ");
            setconValue(myArray.join(" "));
            console.log(conValue);
            str2=eval(str1);
          }
        }
        //setconValue("");
        if(str2==="")
        {
          setValue(eval(conValue));
          setconValue(conValue+" = "+eval(conValue));
        }
        else
        {
          setValue(str2);
          setconValue(conValue+" = "+str2);
        }
       
       
      }

      else
      {
        if(conValue==="0")
        {
          setconValue(e.target.value);
          setValue(e.target.value);
        }
        else{

          if(isOperator(e.target.value) || isOperator(value))
          {
            setconValue(conValue+" "+e.target.value);
            setValue(e.target.value);
          }
         
          else
          {
            setconValue(conValue+e.target.value);
            setValue(value+e.target.value);
          }
        
        }
       
      }
     
  }
  useEffect(() => {
   console.log(conValue);
    }, [conValue]);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <div
        className="d-flex flex-column justify-content-center align-items-center flex-wrap"
       
        style={{ backgroundColor: "black", width: "400px", padding: "10px -10px", color:'white' }}
      >
           <div
          className="d-flex flex-column"
          style={{ marginTop: "10px", width:"90%"}}
        >
          <input type="text" style={{width:'100%', border:'none', backgroundColor:'black', textAlign:'right', fontSize:'16px',height:'20px',fontFamily:'Orbitron, sans-serif',fontWeight:'bold', color:'orange'}} id="display2" value={conValue} disabled></input>
         <input type="text" style={{width:'100%', border:'none', backgroundColor:'black', textAlign:'right', fontSize:'20px',height:'40px',fontFamily:'Orbitron, sans-serif',fontWeight:'bold', color:'white'} } id="display" value={value}  disabled></input>
        </div>
        <div
          className="d-flex"
          style={{ marginTop: "0px", width:"95%", backgroundColor:'black' }}
        >
           <button id="clear" value="AC" className="flex-fill" style={{padding:'15px 44px',backgroundColor:'#ac3939'}} onClick={(e)=>{calc(e)}}>
            {" "}
            AC
          </button>
          <button id="divide" className="flex-fill" value="/" style={{padding:'15px 8px',backgroundColor:'#666666'}} onClick={(e)=>{calc(e)}}>
            {" "}
            / 
          </button>
          
        <button id="multiply" className="flex-fill" value="*" style={{backgroundColor:'#666666'}} onClick={(e)=>{calc(e)}}>
            {" "}
           *
          </button>
        </div>
        <div
          className="d-flex"
          style={{ marginTop: "0px", width:"95%", backgroundColor:'black' }}
        >
           <button id="seven" className="w-100" value="7" style={{padding:'15px 0px'}} onClick={(e)=>{calc(e)}}>
            {" "}
            7
          </button>
          <button id="eight" className="w-100" value="8" style={{padding:'15px 7px'}} onClick={(e)=>{calc(e)}}>
            {" "}
            8
          </button>
          
          <button id="nine" className="w-100" value="9" style={{padding:'15px 6px'}} onClick={(e)=>{calc(e)}}>
            {" "}
           9
          </button>
          <button id="subtract" className="w-100" value="-" style={{padding:'15px 4px',backgroundColor:'#666666'}} onClick={(e)=>{calc(e)}}>
            {" "}
           -
          </button>
        </div>
        <div
          className="d-flex"
          style={{ marginTop: "0px", width:"95%", backgroundColor:'black' }}
        >
           <button id="four" className="w-100" value="4" style={{padding:'15px 0px'}} onClick={(e)=>{calc(e)}}>
            {" "}
            4
          </button>
          <button id="five" className="w-100"  value="5" style={{padding:'15px 7px'}} onClick={(e)=>{calc(e)}}>
            {" "}
            5
          </button>
          
          <button id="six" className="w-100" value="6" style={{padding:'15px 6px'}} onClick={(e)=>{calc(e)}}>
            {" "}
           6
          </button>
          <button id="add" className="w-100" value="+" style={{padding:'15px 4px',backgroundColor:'#666666'}} onClick={(e)=>{calc(e)}}>
            {" "}
           +
          </button>
        </div>


        <div className="d-flex flex-column"   style={{backgroundColor:'black', width:'95%', marginBottom:'10px'}}>

        <div
          className="d-flex"
          style={{backgroundColor:'red'}}
        >
           <button id="one" className=" w-100" value="1" style={{padding:'15px 0px'}} onClick={(e)=>{calc(e)}}>
            {" "}
            1
          </button>
          <button id="two" className=" w-100" value="2" style={{padding:'15px 7px'}} onClick={(e)=>{calc(e)}}>
            {" "}
            2
          </button>
          
          <button id="three" className=" w-100" value="3" style={{padding:'15px 6px'}} onClick={(e)=>{calc(e)}}>
            {" "}
           3
          </button>
          {/* <button id="add" className="w-100" style={{padding:'15px 4px'}}>
            {" "}
           =
          </button> */}
           
        <button id="equals" className=" w-100 align-self-stretch" value="=" style={{padding:'15px 4px',borderBottom:'none', textAlign:'center',backgroundColor:'#004466'}} onClick={(e)=>{calc(e)}}>
            {" "}
            =
          </button>
        
          
        </div>
       
        <div
          className="d-flex"
          style={{backgroundColor:'black'}}
          // style={{ marginTop: "0px", width:"68%", marginLeft:'-89px', backgroundColor:'black' }}
        >
           <button id="zero" className=" w-100" value="0" style={{padding:'15px 65px'}} onClick={(e)=>{calc(e)}}>
            {" "}
            0
          </button>
          <button id="decimal" className=" w-100" value="." style={{padding:'15px 7px'}} onClick={(e)=>{calc(e)}}>
            {" "}
            .
          </button>
          <button id="equals" className=" w-100 align-self-stretch" style={{padding:'15px 5px', borderTop:'none',backgroundColor:'#004466'}}>
            {" "}
           
          </button>
        
  
        </div>
      
       
        </div>


      </div>
    </div>
  );
}

export default App;
