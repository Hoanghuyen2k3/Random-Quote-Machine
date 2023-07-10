
import './App.scss';
import axios from 'axios';
import React, {useState} from 'react';
import Quote from './components/Quote';
import FallingFlower from './components/Fallingflower';

function App() {
  const [data, setData] = useState({
    quote: 'It is never too late to be what you might have been.',
    author: 'George Eliot'
  });
  
const options = {
  method: 'GET',
  url: 'https://quotes-by-api-ninjas.p.rapidapi.com/v1/quotes',
  headers: {
    'X-RapidAPI-Key': 'fb77e70d05msh3e19fe112808da5p15d508jsna481a122fd4f',
    'X-RapidAPI-Host': 'quotes-by-api-ninjas.p.rapidapi.com'
    }
  };

  const quote = async(e)=>{
    e.preventDefault();
    try {
    const response = await axios.request(options);
    console.log(response.data[0]);
    setData(response.data[0]);
  } catch (error) {
    console.error(error);
  }}
 
  console.log(data);
  return (
    <div className="container" >
      <FallingFlower />
      <Quote data = {data}
             quote ={quote} />
      <p>by Thi Huyen Hoang</p>
    </div>
  );
}

export default App;
