// Create a <StepCounter max={ 100 } step={ 5 } /> component. It should consist of a <p> containing a number (start at 0) and two buttons, + and -. When the user clicks the + button, the number should go up by step. When the user clicks the - button the number should go down by step. The number should not be able to go below 0. Use props to pass in a maximum value for the counter


import { useState } from 'react';


const StepCounter = ({ step, max }) => {     // pulling in props + destructuring them 
    let [ counter, setCounter ] = useState(0); // setting the state, setting to 0 


    // plus method 
    let handleClickPlus = () => setCounter( // setCounter is setState
        counter + (counter < max ? step : 0) // is number less 100?  -- Then +5  now counter is 5. 
    );

    // when user clicks '+' button 
    // passing in max + step as prop, which has been specfied on App.js 

    
    // minus method    
    let handleClickMinus = () => setCounter(
        counter - (counter > 0 ? step : 0) // is number more than 0? -- if isn't Then -5. 
    );

    // when user clicks '-' button 
    // passing in  max + step as prop, which has been specfied on App.js     


        return (
            <>
                <p className="card card-body">{ counter }</p>    
                {/* passing in counter variable frm let counter. */}
                
                <button 
                onClick={ handleClickMinus }             // onclick event, calls HandleClickMinus method 
                className="btn btn-primary">-</button>

                <button 
                onClick={ handleClickPlus } 
                className="btn btn-primary">+</button>
            </>
    
    ) 


}


 export default StepCounter; 