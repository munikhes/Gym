import React,{useState, useEffect} from 'react'


export default function Week(props) {

   const weeks = [];
   for(let i=1; i<8; i++){
    weeks.push(i);
   }
  return (
    <React.Fragment>
            {weeks.map((num)=>{
                return <option>{num}</option>              
             })}
    </React.Fragment>      
  )};

