import React,{useState} from 'react'
import DivWorkouts from './DivWorkouts';



export default function Trainer(props) {


  const [results, setResults] = useState(true);
  let years = props.training.yearsOfWorkout;
  let weeks = props.training.workoutsPerWeek;

  let km = (years*5)/weeks;


  const makeWorkoutsProgres = ()=>{
    if(props.training.workoutsProgres.length == 0 ){
    let workouts = props.training.workoutsPerWeek;
    for(let i=0; i<workouts; i++){
    
      if(props.training.workoutsProgres.length == 0){
        props.training.workoutsProgres.push({No:i+1,km:Math.round(km), don: "no"})
      }
      else
      props.training.workoutsProgres.push({No:i+1,km:Math.round(km*1.15), don: "no"})
    }
    setResults(false)
  }};

  const startGame = ()=>{
    
    for(let i=0; i<props.training.workoutsProgres.length; i++){
    if(props.training.workoutsProgres[i].don == "no"){
      props.takeDetails(props.training.workoutsProgres[i].No,props.training.workoutsProgres[i].km)
      props.changePage("WorkOutDetails")
      break;
    }}
  };

  return (
    <div >
      <h1>Welcome Trainer</h1>
     <button onClick={startGame}>Start</button>
     { props.training.workoutsProgres.map((e)=>{
       return <DivWorkouts e = {e} changePage={props.changePage} takeDetails={props.takeDetails} training={props.training}  />

     })}
    {makeWorkoutsProgres()}
 
    </div>
  )
};
