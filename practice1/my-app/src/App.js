
import './App.css';
import $ from 'jquery';
import { useEffect, useState } from "react";
function App() {
  const [author,setAuthor]=useState("");
  const [quote,setQuote]=useState("");
  const settings = {
    async: true,
    crossDomain: true,
    url: 'https://quotes-by-api-ninjas.p.rapidapi.com/v1/quotes',
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '1ad09260f8msh07042f1f656b901p14f31bjsncedbc0882e53',
      'X-RapidAPI-Host': 'quotes-by-api-ninjas.p.rapidapi.com'
    }
  };
 
  const genquote=()=>{
    $.ajax(settings).done(function (response) {
      console.log(response[0].author);
      setAuthor(response[0].author);
      setQuote(response[0].quote);
      const randomColor = Math.floor(Math.random()*16777215).toString(16);
      document.body.style.backgroundColor = "#" + randomColor;
      document.getElementById('text').style.color="#" + randomColor;
      document.getElementById('author').style.color="#" + randomColor;
      document.getElementById('adiv').style.backgroundColor="#" + randomColor;
      document.getElementById('new-quote').style.backgroundColor="#" + randomColor;
    });
  }

  useEffect(() =>{
    genquote();
  }, []);

  return (
    <div
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
     
    }}

  >
    <div className="d-flex flex-column justify-content-center align-items-center flex-wrap" id="quote-box" style={{backgroundColor:'white', width:'600px',padding:'40px'}}>
      <h4 id="text"><i className="fa-sharp fa-solid fa-quote-left"></i> {quote}</h4>
      <h6 id="author">- {author}</h6>
      <div className='d-flex flex-row justify-content-around align-items-center flex-wrap' style={{marginTop:'30px'}}>
      <div  id="adiv"><a id="tweet-quote" className='me-auto p-2' href='https://www.twitter.com/intent/tweet' target="_blank"><i className="fa-brands fa-twitter" style={{color: "#ffffff"}}></i></a></div>
      <button id="new-quote"  onClick={genquote}> New Quote</button>
    
      </div>
   
    </div>
    
  </div>
);
}

export default App;
