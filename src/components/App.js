import React, {useState} from 'react'
import '../styles/App.css';

const App = () => {
//code here
const [preValue, newvalue]=useState("redColor");
let temp=1;
function fun(){
  if(temp){
    temp=0;
  newvalue('blueColor');
 
  // console.log(temp);
  }else{
newvalue('redColor');
temp=1;
//console.log(temp);
  }
}
  return (
    <div id="main">
      <p className={preValue} >Newton School</p>
      <button id='button' onClick={fun}>Change Style</button>
    </div>
  )
}


export default App;
