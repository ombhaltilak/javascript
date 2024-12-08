// What is Derived State in React?

// Derived state is any state that can be computed based on other state or props. It is not stored directly in the component's state but is calculated when needed. This approach helps avoid duplication and keeps the state simpler and more manageable.

// Ex: const userCount = users.length;

// Benefits of Derived State

// • Avoid Redundancy: By deriving values from existing state, you avoid storing redundant data.

//                     Consistency: Ensures that derived values are always in sync with the underlying state and props.

//                     Simplicity: Reduces the complexity of state management by minimizing the number of state variables.
import { useState } from "react";
export const DerivedState=()=>{
    const [users,setUser]=useState([
    {name:'om',age:19},
    {name:'omkar',age:19},
    {name:'ram',age:29},
    {name:'raju',age:45},
    ]);
    console.log(users);
    const userCount= users.length;
    //yaha userCount and userAvg ye Derived state hai kyoki ye tottaly depend hai users state variable pe 
    const userAvg=( users.reduce((accum,curElem)=>accum+curElem.age,0))/userCount;
    return(
        <div>
            <ul>
               {users.map((user,index)=>(
               <li key={index}>
                {user.name}-{user.age} years old
               </li>
               ))}
            </ul>
            <p>Total count:{userCount}</p>
            <p>Average Age:{userAvg}</p>
                    </div>
    )
}