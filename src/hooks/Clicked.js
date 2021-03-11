// Create a <Clicked> component. It should initially display "Not clicked" in a <p>. Once it's been clicked it should change to "Clicked".

import { useState } from 'react';

const ClickedHooks = () => {
   let [clicked, setClicked] = useState(false);
  
   let handleClick = () => setClicked(
       clicked = !clicked // toggle 
   )

   return (
    <p className="something" onClick ={ handleClick }>{ clicked ? 'clicked' : 'not clicked' }</p>       
    )


}

export default ClickedHooks;