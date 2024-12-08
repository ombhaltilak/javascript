//Passing event handlers as props in React.js
export const PropEvent=()=>{
    //PropEvent parent
        const handleWelcomeEvent=(user)=>{
            alert(`you are welcome ${user}`)

        }
        const handleHower=()=>{
            alert(`you are hovering`)

        }
        return(
        <>
        <WelcomeEvent 
        onClick={()=>handleWelcomeEvent('OM') }
        //yaha ham onClick ke jagah props ka koi bhi nam likh sakte hai kyo ki yah props ka nam hai ex onbutttonclick
        //jab ham object pass karte hai tab hame arrow funtion lagana hain 
        onMouseEnter={handleHower}
        //yaha ham onMouseEnter ke jagah props ka koi bhi nam likh sakte hai kyo ki yah props ka nam hai ex onhoweringmouse
        //yaha hamne arrow function nahi lagaya hai kyo ki hamne yaha object pass nahi kiya hai
        >    
        </WelcomeEvent>
        {/* //WelcomeEvent child */}
        </>
    );
};
//above vala parent hai aur niche jo likhrahe hai vo child hai



// const WelcomeEvent=(props)=>{
//     const handleGreeting=()=>{
//         console.log(`greeting`)
//         props.onClick();   
// //        yaha pahle consol pedikhega badme ye handleWelcomeEvent call hoga
//     };
//     //ye child ka khud ka function hai uperwala handleGreeting
// return(
//     <>
//     <button className="bg-yellow-500 border border-black" onClick={props.onClick}>click</button>
//     <br />
//     <button className="bg-yellow-500 border border-black" onClick={props.onMouseEnter}>hower</button>
//     <br />
//     <button className="bg-yellow-500 border border-black" onClick={handleGreeting}>click</button>
// {/*      yaha1st and 2nd me hamne event ko props ke through liya hai aur 3rd jo hai vo child ka khud ka hai
//  */}
//     </>
// );
// } ;

//here we destructuring
const WelcomeEvent=(props)=>{
    const {onClick,onMouseEnter}=props;
    //yaha hame jo upar parent me event ka nam likha hai vohi likhna hai ex onbutttonclick agar hai to yaha bhi vahi ho
    const handleGreeting=()=>{
        console.log(`greeting`)
        props.onClick();   
//        yaha pahle consol pedikhega badme ye handleWelcomeEvent call hoga
    };
    //ye child ka khud ka function hai uperwala handleGreeting
return(
    <>
    <button className="bg-yellow-500 border border-black" onClick={onClick}>click</button>
    //yaha {} me hame jo upar parent me event ka nam likha hai vohi likhna hai ex onbutttonclick agar hai to yaha bhi vahi ho

    <br />
    <button className="bg-yellow-500 border border-black" onClick={onMouseEnter}>hower</button>
    //yaha {} me hame jo upar parent me event ka nam likha hai vohi likhna hai ex onbutttonclick agar hai to yaha bhi vahi ho

    <br />
    <button className="bg-yellow-500 border border-black" onClick={handleGreeting}>click</button>
{/*      yaha1st and 2nd me hamne event ko props ke through liya hai aur 3rd jo hai vo child ka khud ka hai
 */}
    </>
);
} ;




// Passing event handlers as props in React.js is a common pattern used to allow child components to communicate with parent components. This pattern is useful in various scenarios, including:

// * **Form Handling:** Passing event handlers like `onChange` or `onSubmit` to form components allows the child components to update the form data and notify the parent component of changes.
// * **User Interaction:** Event handlers like `onClick` can be passed to interactive elements (e.g., buttons, links) to trigger specific actions in the parent component, such as opening a modal or navigating to a different page.
// * **State Management:** Event handlers can be used to update state in the parent component, which can then be passed down to child components as props to reflect the updated state.
// * **Callback Functions:** Event handlers can be used as callback functions to handle asynchronous operations or to update state based on the result of an operation.
