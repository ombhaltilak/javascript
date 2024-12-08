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
  const watching=()=>{
    if(age>=18) return "Watch Now";
    return "Restrict";
  }
  let age=19;
  let watch;

  // if (age<18){
  //    watch="Not Available";
  // }
  // else{
  //   watch="Watch Now";
  // }
  let Watch="Restricted";
  if(age>=18)"Watch Now";

      return(<div class="bg-black shadow-inner rounded-lg h-auto w-96 ml-96 ">
            <div class=" m-5">
              <div class="m-5 pt-5 mb-5 "> 
            <img class="rounded-lg shadow-lg h-80 border border-white" src="image.png" alt="" />
            <h1 class="bg-orange-300 rounded-lg mb-5 mt-3">{name}{5+3.2}</h1>
            <h2 class="bg-orange-300 rounded-lg mb-5 mt-3">{rating}</h2>
            <h2 class="bg-orange-300 rounded-lg mb-5 mt-3">{types()}</h2>
            <button class=" p-2 bg-gray-200 rounded-sm transition duration-1000 hover:scale-110 hover:bg-red-800">{watching()}</button>

            {/* <button class=" p-2 bg-gray-200 rounded-sm transition duration-1000 hover:scale-110 hover:bg-red-800">{Watch}</button> */}
            {/* <button class=" p-2 bg-gray-200 rounded-sm transition duration-1000 hover:scale-110 hover:bg-red-800">{age>=18?"Watch Now":"Restricted"}</button> */}

            </div>
            </div>
          </div>);
}

export default App
