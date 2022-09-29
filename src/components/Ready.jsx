import React,{useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';



export default function Ready(props) {
    const navigation =  useNavigate();
   
 
    const Yes = ()=>{
      navigation(`/training/`);
    
    };
    const No = ()=>{
      props.changePage("Details");
    };

  return (
    <div >
  <h1>Ready</h1>
  <br></br>
  <button onClick={Yes}>Yes</button><button onClick={No}>No</button>
    </div>
  )
};
