import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import {Fragment} from 'react';
// export const App=()=>{
  // return React.createElement("h1",null,"hello world");
//OR  
  // return <h1> hello world</h1>;
  export const App=()=>{
    return( 
      //WAY 1{GOOD}
      // <div>  
      //   <Home/>
      //   <Home/>
      // </div>
      //yaha extra div deni padrahi hai niche usko avoid kiya gya hai fragment ka use karke
      
      
      //WAY2{BETTER}
      <Fragment> 
           <Home/>
           <Home/>
      </Fragment>
      //yaha ham fragment ko ek jo extra div dene hoti hai usko avoid karne keliye karte hai taki ham extra node cancle kar sake
      //ham fragment ko simple<></> asebhi likh sakte hai usme fragment name use karneki bhi jarurat nahi hoti
      


      //WAY 3 {BEST}
      // [<Home key={1}/>,<Home key={2}/>]
       );
       //fragment ke alava ham ise Array ke form me bhi likh sakte hai lekin fragment BETTER tarika hai.
  };
// }




//ISE HAM EK COMPONENT ME BHILIKHKE UPAR COMPONENT IMPORT KAR SAKTE HAI
export const Home=()=>{
      return(<div class="bg-black shadow-inner rounded-lg h-96 w-96 ml-96 ">
            <div class=" m-5">
              <div class="m-5 pt-5 "> 
            <img class="rounded-lg shadow-lg h-80 border border-white" src="image.png" alt="" />
            <h1 class="bg-orange-300 rounded-lg mt-3">Avengers: Infinity War (2018)</h1>
            </div>
            </div>
          </div>);
}

export default App





// **Our First React.js Component**

// * In React, a component is essentially a JavaScript function or class that returns JSX (JavaScript XML), a syntax extension that allows you to write HTML-like code inside JavaScript. Components are the building blocks of any React application, allowing for the creation of complex and interactive user interfaces through the assembly of isolated, reusable pieces.
// * You can also use .js extension with React.js components but it's recommended to use .jsx to differentiate between regular JavaScript Files and React.js components.
// * There are two ways to create components in React.js:
//     * Class Based Components
//         * This is how components were created before functional components.

// **Functional Components**

// * This is modern and recommended way of writing React.js components.
// * We will follow through functional components in this course as that's what is used in modern React.js development.
// * If you find class-based components in legacy codebases, you can research online about the differences between the two. There are some differences, but the main concept is the same.


// Class Based Components
// import React, { Component } from 'react';

// export class Welcome extends Component {

//     render() {
//         return <h1>Hello, {this.props.name}!</h1>;
//     }
// }

// Functional Components
// JavaScript
// export function Welcome({ name }) {
//   return <h1>Hello, {name}!</h1>;
// }


//Writing 1st component
// After that open App.jsx then import our newly created component and use it.
// If you save the file, you will immediately see the changes on the website.
// This is possible due to HMR or Hot Module Replacement which is given by Vite.




// **React Fragments**

// * In React.js, a component can't return multiple elements without a wrapper div.
// * You can do this to imitate it: Using an Array of Elements with Keys
// * return [<p>Ram</p>, <strong>20</strong>];
// * But it's tedious, to fix this React 16 introduced Fragments, which allow components to return multiple elements without adding extra nodes to the DOM.
// * import { Fragment } from "react";
// return <Fragment>//</Fragment>
// * Alternatively, you can also use its shorthand syntax:
// * <> //</>

// **Exploring React Fragments >**



// Why can't we return multiple elements at the same time?
// JavaScript doesn't support functions that return multiple values.

// JavaScript
// <h1>Hello World</h1>

// As after JSX is compiled it is converted to normal JavaScript object, you can't return multiple JavaScript object at the same time.

// JavaScript
// import { jsx as _jsx } from "react/jsx-runtime";

// return (
//   _jsx("h1", {
//     children: "Hello World"
//   }),
//   _jsx("p", {
//     children: "This is a paragraph"
//   })
// );

// As you already know, above is valid JavaScript.

// Challenges with Returning Multiple Elements