import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import {Fragment} from 'react';

  export const App=()=>{
    return( 

      <Fragment> 
           <Home/>
           <Home/>
      </Fragment>
       );
  };
// }
export const Home=()=>{
  const name="Avengers: Infinity War (2018)";
  const rating="Rating:8.5";
  const types=()=>{
    const type='Action';
    return type;
  }
      return(<div class="bg-black shadow-inner rounded-lg h-auto w-96 ml-96 ">
            <div class=" m-5">
              <div class="m-5 pt-5 mb-5 "> 
            <img class="rounded-lg shadow-lg h-80 border border-white" src="image.png" alt="" />
            <h1 class="bg-orange-300 rounded-lg mb-5 mt-3">{name}{5+3.2}</h1>
            <h2 class="bg-orange-300 rounded-lg mb-5 mt-3">{rating}</h2>
            <h2 class="bg-orange-300 rounded-lg mb-5 mt-3">{types()}</h2>

            </div>
            </div>
          </div>);
}

export default App

//we can access multiple data by printing this above part multiple times 
//but thois violate the rule of DNT(Do Not Repeate)

// Dynamic Values in JSX

// You can add any variables of your component in JSX using {} syntax.

// JavaScript
// function MyComponent(){
//     const value = "Hey";
//     return <p>{value}</p>;
// }

// JSX allows you to write JavaScript expressions inside curly braces. This includes operations, function calls, and other JavaScript expressions that produce a value.

// JavaScript
// return <div>The result is: {1 + 2 + 3}</div>;

// 1. Variables
//? You can embed any JavaScript variable within JSX by enclosing it in curly braces. The value of the variable will be inserted into the DOM at the respective location.

// 2: Expressions
//? JSX allows you to write JavaScript expressions inside curly braces. This includes operations, function calls, and other JavaScript expressions that produce a value.
// 3. Function Calls

//? Functions, especially those that return JSX, can be invoked directly within your JSX.

// **Conditionals in JSX**

// * You can either return a JSX early or you can use ternary operators for conditionals in JSX.
// * `return <p>{ age >= 18 ? "Adult" : "Minor" }</p>`
// * `return <p>{ age >= 18 && "You can vote" }</p>`
// * `return <p>{ username || "Guest" }</p>`
