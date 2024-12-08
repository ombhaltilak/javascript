import { useState } from "react";
 export const State=()=>{
    const [count,setCount]=useState(0)
    console.log("parent component render")

    //JAHA use HOGA VAHA SAMJHLO KI HOOK HAI use MATLAB HOOK
    //REACT KO VALUE CHANGING VALUE STORE KARNEKELIYE STATE KA USE KARTE HAI KYO KI REACT KO YE JO COUNT+1 HAI VO NAHI SAMAJTA ISLIYE STATE KA USE KARTE HAI JAHA BHI APKO LAGE VALUE CHANGE HO RAHI HAI VAHA STATE KA USE KARE
    //YAHA COUNT JO HAI ISME VALUE STORE HOTI HAI AUR SETCOUNT YA FUNCTION HAI JO VALUE DETA HAI
    const handleButtonClick=()=>{
        setCount(()=>count+1)
    }
    return(
        <>
        <section className="">
        <h1>{count}</h1>
        <button onClick={handleButtonClick}>Increment</button>
        </section>
        <ChildeComponent count={count}/>
        </>
    );
 };
 function ChildeComponent({count}){
    console.log("childe component render");
   // ye consol ki chiz 2 time print hogi kyo ki react 2 times cheak karta hai aur main.js me StrictMode  
    // laga hai agar ham use hatade to ye sirf 1 times print honga
    return <div>
        Childe Component-{count}
    </div>
 }




// States in React JS

// * In React, state refers to an object that holds data or information about the component.
// * State is managed within the component (just like variables declared in a function).
// * However, unlike regular variables, when state changes, React re-renders the component to reflect these changes, keeping the user interface in sync with the data.
// * State is dynamic and mutable, meaning it can change over time in response to user actions, server responses, or other events.
// **Here's the text extracted from the image:**

// **Why Do We Need State in React?**

// 1. **Dynamic UI Updates:** State allows your components to update dynamically in response to user input or other events. For example, in a form, the state might hold the current value of the input fields, updating in real-time as the user types.

// 2. **Interactivity:** State makes your application interactive. By maintaining state, you can create components that respond to user actions, such as clicks, form submissions, or keyboard inputs.

// 3. **Data Management:** State helps manage data within a component. For instance, you can fetch data from an API and store it in the state, which will then be used to render the UI.

// 4. **Component Communication:** State can be lifted up to parent components to manage shared state across multiple child components, ensuring consistent data flow and synchronization.

// why REAT
// It's because those are normal variables and React.js doesn't know that it's going to be changed. And that react should respond or update DOM based on that. Those values are already rendered on DOM, there is no way they will be re-rendered. For that React.js provides a function called "useState". This type of function which starts with "use" is called hook. This is a special function which has some features provided by react.js we will learn about other hooks in future.




// **How State Works?**

// In React, state is a way to store and manage data that can change over the lifetime of a component. When state changes, React re-renders the component to reflect the new state. This ensures that the user interface stays in sync with the underlying data.

// **Using useState in Function Components**

// **Initialization:** You call `useState` with the initial state value. It returns an array with two elements: the current state value and a function to update that state.

// **Updating State:** When you call the updater function, React schedules a re-render of the component with the new state value.

// **Preservation of State:** React maintains state between renders. When a component re-renders, it doesn't reinitialize the state. Instead, it uses the preserved state from the previous render.

//REACT USE DEEFING ALGORITHM FOR DIFFERENCIATE THE OLD AND NEW DOM TREE
