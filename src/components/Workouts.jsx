import React from 'react'
import { useState } from 'react';
import Week from './Week';
import Years from './Years';


export default function Workouts(props) {

    const [week, setWeek] = useState("");
    const [year, setYear] = useState("");


    const getWeek = (e)=>{
      const weeks = e.target.value;
      setWeek(weeks)
    }
    const getYear =(e)=>{
      const years = e.target.value;
      setYear(years)
    }

  const nextPage=()=>{
    props.newWorkouts(week,year)
    props.changePage("Ready");
  }


  return (
    <div >
  <h4>How many workouts a week</h4>
  <br></br>
  <select onChange={getWeek} name="week" id="week">
   <Week/>
  </select>
  <br></br>
  <h4>How many years have you been training</h4>
  <br></br>
  <select onChange={getYear} name="years" id="years">
  <Years/>
  </select>
  <br></br>
  <button onClick={nextPage}>Next</button>
    </div>
  )
}
