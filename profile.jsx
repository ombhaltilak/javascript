//* Coding Challenge:
//? Create a React application that demonstrates the use of props by building a simple profile card system. Each profile card should display a user's name, age, and a personalized greeting message. Additionally, use props.children to allow for flexible content inside each profile card.

//* Challenge Details:

//? Create a Main Component: Profile
// This component should render multiple ProfileCard components, each with different user data and children elements.

//? Create a ProfileCard Component:
// This component should accept props for the user's name, age, and a personalized greeting message (as JSX).
// The component should also use props.children to render additional content inside the card.

//* Requirements:

//? Props Usage:
// Pass the user's name, age, and a personalized greeting message as props to the ProfileCard component.

//? Children Prop:
// Use props.children to allow for flexible content inside the ProfileCard component, such as additional text, images, or buttons.

//? Dynamic Content:
// The personalized greeting message should be a JSX element passed as a prop.
// Styling:

// Add basic CSS to style the profile cards for better visual presentation.
function Profile(){
return(
    <div>
        <h1>Profile Card</h1>
        <ProfileCard
        name="om"
        age={19}
        greeting={
            <div>
                <strong>Hi om nice Day</strong>
            </div>
        }
        >
            <p>Hobies:Reading ,Walking</p>
            <button>contact</button>
        </ProfileCard>

        <ProfileCard
        name="omkar"
        age={20}
        greeting={
            <div>
                <strong>Hi omkar Nice Day</strong>
            </div>
        }
        >
            <p>Hobies:Reading ,Walking</p>
            <button>contact</button>
        </ProfileCard>
    </div>
)
}
// export default Profile;
// function ProfileCard(props){
//     return(
//         <>
//         <h2>Name:{props.name}</h2>
//         <p>Age:{props.age}</p>
//         <p>{props.greeting}</p>
//         <div>{props.children}</div>
//         </>
//     )
// // } 
// //OR
// export default Profile;
// function ProfileCard(props){
//     const{name,age,greeting,children}=props;
//     return(
//         <>
//         <h2>Name:{name}</h2>
//         <p>Age:{age}</p>
//         <p>{greeting}</p>
//         <div>{children}</div>
//         </>
//     )
// } 
//or
// } 
//OR
export default Profile;
function ProfileCard({name,age,greeting,children}){
    return(
        <>
        <h2>Name:{name}</h2>
        <p>Age:{age}</p>
        <p>{greeting}</p>
        <div>{children}</div>
        </>
    )
}
