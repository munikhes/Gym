import React from 'react'
import { useState } from 'react';


export default function Details(props) {


  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");


const getId=(e)=>{
const idValid = e.target.value;
if((idValid>999999999 || idValid<100000000) && isNaN(idValid) == false){
 setId(idValid);
}};

const getName=(e)=>{
const nameValid = e.target.value;
  if(nameValid.length<5){
    return false
  };

  let counter = 0;
  if(nameValid.indexOf(" ")>0){
    counter++
  }
  if(counter !== 1){
    return false
  }

for(let i=0; i<nameValid.length; i++){
  if((nameValid.charAt(i)<'a' || nameValid.charAt(i)>'z') && nameValid.charAt(i) !== " "){
    return false
  }
}
setName(nameValid)
};

const getGender=(e)=>{
const genderValid = e.target.value;
if(genderValid !== " "){
  setGender(genderValid)
}
};

  const nextPage=()=>{
    if(!id){
      alert ("your id details are not valid")
      return false
    };
    if(!name){
      alert ("your name details are not valid")
      return false
    };
    if(!gender){
     alert ("please select gender")
     return false
    };
    props.newTraining({
      id:id,
      name:name,
      gender: gender,
      //workouts
    })
    props.changePage("Workouts");
  }
 
 
  return (
    <div >
  <h1>Enter your details</h1>
  <br></br>
  <input type="text" id='id' onChange={getId} placeholder='Enter your id'/>
  <input type="text" id='name'  onChange={getName} placeholder='Enter you fullname'/>
  <select name="gender" id="gender"  onChange={getGender}>
    <option value="blank"></option>
    <option value="male">male</option>
    <option value="female">female</option>
  </select>
  <button onClick={nextPage}>Next</button>
    </div>
  )
}
