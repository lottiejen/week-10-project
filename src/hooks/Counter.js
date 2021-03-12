// Create a <Counter initial={ 50 } max={ 100 } /> component. It should consist of a <p> containing a number (which starts at the initial value) and two buttons, + and -. When the user clicks the + button, the number should go up. When the user clicks the - button the number should go down. The number should not be able to go below 0. Use props to pass in a maximum value for the counter.

import { useState } from 'react';


const CounterHooks = ({ max }) => { // pass in max prop 
    let [counter, setCounter] = useState(0); //  create counter and setCounter to update it, setting to 0. 
    
    // plus method
    let handleClickPlus = () => setCounter( // setCounter is setState
        counter + (counter < max ? 1 : 0)     

     ); // is number less 100? -- If so, then 0 + 1 = 1  now counter is 1. // increment +1 each time. 


     // minus method
    let handleClickMinus = () => setCounter(
        counter - (counter > 0 ? 1 : 0) 

    ); // is number more than 0? -- If so, then minus 1 -- else nothing happens.

    return (
        <>
                <p className="card card-body">{ counter }</p>
                {/* pass in counter variable from let counter. */}
                
                <button 
                onClick={ handleClickMinus } 
                className="btn btn-primary">-</button> 
                {/* OnClick Event, calls method */}
                
                <button 
                onClick={ handleClickPlus } 
                className="btn btn-primary">+</button>
                {/* OnClick Event, calls method */}
                </>
    ) 
}
export default CounterHooks;