export const EventPropogation=()=>{
  
   const handleGrandparent=()=>{
    console.log("Grandparent");
   };
   const handleParent=()=>{
    console.log("Parent");
   };
   const handleChilde=(event)=>{
    console.log(event);
    console.log("Childe");
    // event.stopPropagation()
    //    event.stopPropagation() iska use propogation rokne keliye karte hai

   };
  
  
// //   yaha pe ham bubbleling propogation use kar rahe hai jo by default milta hai react me
//     return(
//      <section>
//      <div className=" size-96 flex justify-center  m-11  bg-red-500" onClick={handleGrandparent}>
//     {/* ye grandparent hai */}
//         <div className="size-60 m-20 flex justify-center  bg-yellow-500" onClick={handleParent}>
//    {/* //ye parent hai */}

//             <div className="size-40 m-11 flex justify-center  bg-pink-500" onClick={handleChilde}>
//             {/* //ye childe hai */}

//                 <button className=" border flex justify-center size-10 m-12 bg-green-200 border-black">click</button>
//             </div>
//         </div>
//      </div>
//      </section>
//     );
  
  
// yaha pe ham capturing propogation use kar rahe hai jo by default milta hai react me
  return(
   <section>
   <div className=" size-96 flex justify-center  m-11  bg-red-500" onClickCapture={handleGrandparent}>
  {/* ye grandparent hai */}
      <div className="size-60 m-20 flex justify-center  bg-yellow-500" onClickCapture={handleParent}>
   {/* //ye parent hai */}
       <div className="size-40 m-11 flex justify-center  bg-pink-500" onClickCapture={handleChilde}>
        {/* yah Childe hai */}
       <button className=" border flex justify-center size-10 m-12 bg-green-200 border-black">click</button>
        </div>
        </div>
    </div>
    </section>
   );
};
// Event Propagation

// In React.js, event propagation refers to the process by which events propagate or
// "bubble" up from the target element through its parent elements in the DOM hierarchy.
// React follows the same event propagation model as regular JavaScript DOM events.

// When an event occurs on an element in a React component, such as a button click, the
// event is first captured at the target element and then bubbles up through the parent
// elements, triggering any event handlers that have been defined along the way. This
// allows you to handle events at different levels of the component hierarchy.

// React provides a way to stop event propagation using the stopPropagati
// which can be called on the event object within an event handler. This me
// the event from bubbling up further in the DOM, ensuring that only the e
// the target element is triggered.



// Event propagation is a fundamental concept in JavaScript and React.js that describes how events flow through the DOM hierarchy. It involves two main phases:

// **1. Capturing Phase:**

// - Starts from the outermost element (root) of the DOM.
// - The event travels down the DOM tree to the target element.
// - This phase is less commonly used in React.

// **2. Bubbling Phase:**

// - Starts from the target element where the event occurred.
// - The event travels up the DOM tree to the root element.
// - This is the default behavior in React.

// **Event Handling in React:**

// In React, you can handle events by attaching event handlers to components using the `on*` syntax. For example:

// ```javascript
// <button onClick={handleClick}>Click me</button>
// ```

// When the button is clicked, the `handleClick` function will be executed.

// **Stopping Event Propagation:**

// You can prevent event propagation using the `stopPropagation()` method on the event object:

// ```javascript
// const handleClick = (event) => {
//   event.stopPropagation();
//   // ...
// };
// ```

// **Event Capturing in React:**

// While React primarily relies on event bubbling, you can also use event capturing by attaching event handlers to elements using the `onCapture*` syntax. However, this is less common and often not necessary.

// **Example:**

// ```javascript
// <div onClickCapture={handleCapture}>
//   <button onClick={handleClick}>Click me</button>
// </div>
// ```

// In this example, the `handleCapture` function will be executed first, followed by the `handleClick` function.

// By understanding event propagation, you can effectively handle user interactions in your React applications and create complex user interfaces.
