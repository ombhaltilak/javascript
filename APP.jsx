import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header,{Card,Footer} from './components/Card'
import {Fragment} from 'react';
// import {Eventhandling} from './components/eventhandling'
// import {PropEvent} from './components/eventprops'
// import {EventPropogation} from './components/eventpropogation'
// import { State } from './components/hooks/state'
// import { DerivedState } from './components/DeriedState'
// import {LiftingState} from './components/LiftingState'
import {TogelSwitch} from './components/projects/togel'
  export const App=()=>{
    return( 
      <Fragment> 
        <section className='container'>
        {/* <Header/>
        <Card/>
        <Footer/> */}
        {/* <Eventhandling/> */}
        {/* // <PropEvent/> */}
        {/* <EventPropogation/> */}
        {/* <State/> */}
        {/* <DerivedState/> */}
        {/* <LiftingState/> */}
        <TogelSwitch/>
        </section>  
      </Fragment>
       );
  };
  export default App
// yaha default name hamesha { }ke bahar likhna hota hai aur Named import hamesha {} ke andar likho 
