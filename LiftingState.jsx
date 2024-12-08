import { useState } from "react";
export const LiftingState=()=>{
    const [inputValue,setInputValue]=useState("");

 return(
    <>   
    <InputComponent inputValue={inputValue} setInputValue={setInputValue} />
    <DisplayComponent inputValue={inputValue}/>
    </>
 );
};
const InputComponent=({inputValue,setInputValue})=>{
 return(
 
 <input type="text" 
 placeholder="enter text"
  value={inputValue} 
  onChange={(e)=>setInputValue(e.target.value)}
  />
 
 );
};
const DisplayComponent=({inputValue})=>{
   return <p>input value is current :{inputValue}</p>
};

// Lifting the State Up in React
// Lifting State Up is a pattern in React where you move the state from child components to a common parent component so that multiple child components can share and synchronize this state. This ensures that the state is managed at a higher level in the component hierarchy, allowing data to flow down as props and actions (such as events) to flow up.
// Use Case:
// When you have two or more components that need to share the same state, you should lift the state up to their nearest common ancestor. This allows these components to stay in sync and ensures that the state is managed in a single place.