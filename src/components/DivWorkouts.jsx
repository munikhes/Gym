import React,{useState, useEffect} from 'react'
export default function DivWorkouts(props) {

  const [disabled, setDisabled] = useState(false);
  const [background, setBackground] = useState('white');



  
useEffect(()=>{
  
   if(props.e.don=='no'){
    setDisabled(false)
    setBackground('#dbeff5')
  }
  else{
    setDisabled(true)
    setBackground('white')
  }
   
},[])

const navigate = ()=>{
  props.changePage("WorkOutDetails")
  props.takeDetails(props.e.No,props.e.km)
}

  return (
    <div >
     <button onClick={navigate} disabled={disabled} style={{background:background}}>Workout N.O {props.e.No} {props.e.km}km</button>
    </div>
  )
};
