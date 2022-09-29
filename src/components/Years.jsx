import React,{useState, useEffect} from 'react'


export default function Years(props) {
   let years = [];
   for(let i=1; i<31; i++){
    years.push(i);
   }

  return (
    <React.Fragment>
            {years.map((num)=>{
                return <option>{num}</option>              
             })}
    </React.Fragment>
  )
};

