import React from 'react'


export default function WorkOutDetails(props) {


  const failure = ()=>{
    props.changePage("Trainer")
  };

  const success = ()=>{
    props.workoutsProgres.forEach((e)=>{
      if(e.No == props.number && e.don =="no")
        e.don = "yes"
    })
    props.apdateCounter()
    props.changePage("Trainer")
  }
  return (
    <div >
      <h1>Workout No: {props.number}</h1>
      <br></br>
      <br></br>
      <h1>Km: {props.km} </h1>
      <br></br>
      <br></br>
    <button onClick={success}>success</button>
    <br></br>
    <br></br>
    <button onClick={failure}>failure</button>
    <br></br>
    <br></br>
    </div>
  )
};
