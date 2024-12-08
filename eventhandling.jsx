export const Eventhandling=()=>{
    
            // function handleButtenClick(){
            //   alert("hi i am on click event");
            //  }
            //traditional function



             const handleButtenClick=(event)=>{
              alert("hi i am on click event");
               console.log(event);//SyntheticBaseEvent
               console.log(event.target); //Click me
               console.log(event.type); //click
            }
            //when we write event in jsx then we get yntheticBaseEvent java script me hame event object milega agar ham consol.log(event) karegeto.
            const handleWelcomeEvent=(user)=>{
              console.log(`hey welcome ${user}`)
              //here we pass parameter parameter meas ki which we pass at time of declaring function
            
            }

             return(
              <>
                           {/* Remember how we haven't called this function, if you call this
                          function here then it will run without even clicking. You just need
                          to pass reference and not call here. */}
                          {/* //way1 of event handling in react function component with Named function */}
              <button className=" bg-yellow-300 size-40 border border-black" onClick={handleButtenClick}>Click me</button>
              {/* //yaha handleButtenClick KE JAGAHA HAM KOI BHI NAM LIKH SAKTE HAI */}




              {/* //way two to handleevent in react by flat arrow function */}
              <button className=" bg-yellow-300 size-40 border border-black" onClick={()=>handleButtenClick()}>Click me2</button>
              {/* In React, event handlers receive the event object as an argument by default.
              However, when you use an arrow function directly in the onClick attribute without passing the event explicitly, React doesn't pass the event object to your handler function.
              This is because the arrow function creates a new function and calls your handler without passing any arguments.  */}

              {/*way 3 for handling event inline event handler */}
              <button className=" bg-yellow-300 size-40 border border-black" onClick={(event)=>console.log(event)}>Click me3</button>
              {/* way4 functional componet with  inline const function */}
              <button className=" bg-yellow-300 size-40 border border-black" onClick={(event)=>console.log(event)}>Click me4</button>
              {/* passing argu to event handlers */}
              <button className=" bg-yellow-300 size-40 border border-black" onClick={()=>handleWelcomeEvent("om")}>Click me5</button>
              {/* //here we pass argument argument meas ki which we pass at time of calling function */}


              </>
);
}
// **Events Handling**

// Event handling in React.js is the process of capturing and responding to user interactions, such as clicks, keystrokes, or form submissions, within a React application. Event handling in React follows a similar pattern to standard JavaScript event handling but with some key differences, such as using synthetic events for cross-browser compatibility and providing consistent event handling across different elements and browsers.

// **What is SyntheticBaseEvent in React?**

// When you handle events in React, like clicking a button or typing in an input box, React wraps the native browser events in something called a SyntheticEvent. This SyntheticEvent is a cross-browser wrapper around the browser's native event, making sure that events behave consistently across different browsers.


// **Events Handling**

// **Event Naming Conventions**

// CamelCase: Event names in JSX should be written in camelCase.

// For example, onClick, onChange, onSubmit.

// Prefix with 'on': Event handlers should be prefixed with "on".

// For example, onClick, onMouseEnter.

// **Function Naming Conventions**

// Prefix with 'handle': It is a common convention to prefix event handler functions
// with "handle" to clearly indicate their purpose. For example, handleClick,
// handleChange, handleSubmit.

// Descriptive Names: Function names should be descriptive and reflect what the
// function does. For example, handle Form Submit instead of just handleSubmit if it
// specifically for form submission.
