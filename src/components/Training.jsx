import React,{useState} from 'react'
import WorkOutDetails from './WorkOutDetails';
import Trainer from './Trainer';

export default function Training(props) {


  const [number, setNumber] = useState("");
  const [km, setKm] = useState("");
  const [counter, setCounter] = useState(props.training.workoutsPerWeek-1);
  console.log('before',props.training.workoutsProgres)

  const apdateCounter = ()=>{
    setCounter(counter-1)
    let arr = props.training.workoutsProgres
    if(counter==0){
    console.log(counter)
    for(let i=0; i<arr.length; i++){
      console.log(arr.length)
      arr[i].don='no' 
      arr[i].km=Math.round(arr[i].km*1.15)
      setCounter(props.training.workoutsPerWeek-1)
    }
    console.log('after',props.training.workoutsProgres)

  }}
  const takeDetails =(num,km)=>{
    setNumber(num);
    setKm(km);
  };


  const pages = {
    trainer: "Trainer",
    workOutDetails: "WorkOutDetails",
  };
 

  const [CurrentPage, setCurrentPage] = useState(pages.trainer);
  const changePage = page=> setCurrentPage(page)
  const selectPage = ()=>{
    switch(CurrentPage){
      case pages.trainer:
      return  <Trainer changePage={changePage} training={props.training} takeDetails={takeDetails} />
      case pages.workOutDetails:
      return <WorkOutDetails changePage={changePage} training={props.training} workoutsProgres={props.workoutsProgres} number={number} km={km}  apdateCounter={apdateCounter} /> 
    }}


  return (
    <div >
    {selectPage()}
    </div>
  )
};
