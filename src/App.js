import React, {useState,useEffect} from 'react';
import {HashRouter as Router, Routes , Route} from 'react-router-dom'
import Training from './components/Training';
import Details from './components/Details';
import Ready from './components/Ready';
import Workouts from './components/Workouts';


import './App.css';

function App() {

  const [training, setTraining] = useState({});

  const newTraining = (trainer)=>{
    setTraining(trainer);
  };

  const newWorkouts = (week,year)=>{
    const workoutDetails = {
      id: training.id,
      name:training.name,
      gender:training.gender,
      workoutsPerWeek:week,
      yearsOfWorkout:year,
      workoutsProgres:[]
    };
    setTraining(workoutDetails)
  };
 
  const pages = {
    details: "Details",
    workouts: "Workouts",
    ready: "Ready",
  };
  const [CurrentPage, setCurrentPage] = useState(pages.details)

  const changePage = page=> setCurrentPage(page)
  const selectPage = ()=>{
    switch(CurrentPage){
      case pages.details:
      return  <Details changePage={changePage} newTraining={newTraining} />
      case pages.workouts:
      return <Workouts  changePage={changePage} newWorkouts={newWorkouts} /> 
      case pages.ready:
        return <Ready  changePage={changePage} fullname={training.name} />
    }}
  
 
 


  return (
    <div className="App">
    <Router> 
      <Routes>
         <Route path={'/'} element={selectPage()}/>
         <Route path={`/training/`} element={<Training  training={training} workoutsProgres={training.workoutsProgres} />}/>
      </Routes>
     </Router>
    </div>
  );
}

export default App;
