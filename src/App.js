
import { useState } from 'react';
import './App.css';
import { useEffect } from 'react';
import { createContext } from 'react';
import Gallery from './Components/Gallery';
export const GlobalData =createContext();
function App() {
  const[data,setData]=useState([])
  async function getDetails(){
    const streamFunction=await fetch(`https://api.unsplash.com/photos/?client_id=mDT_AAjs9Wtv7YQFpijEFRDbUSF4QECATNTT8djHILY`);
    const textResponse=await streamFunction.text()
    const jsonData= JSON.parse(textResponse)
    // console.log('data',jsonData)
    setData(jsonData)
  }

  useEffect(() => {
    getDetails()
  }, [])
  return (
    <div className="App">
    <h3 style={{
      textAlign:"center",
      fontSize:"30px",
      color:"green"
    }}>Geeks Gallery</h3>
      <GlobalData.Provider value={{data}}>
        <Gallery/>
      </GlobalData.Provider>
    </div>
  );
}

export default App;
