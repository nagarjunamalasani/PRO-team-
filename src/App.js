
import './App.css';
import React, {useState} from 'react';
import HomeDefault from './HomeDefault';
import SplashScreen from './splashscreen';
//this app.js file
function App() {
  const[loading,setLoading]=useState(true);
  return (
    <>
    {loading ? <SplashScreen onFinish={()=>setLoading(false)}/> : <HomeDefault/>}
    </>
  );
}

export default App;
