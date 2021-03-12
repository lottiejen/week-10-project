// Create a <List> component that consists of a <ul>, an <input>, and a <button>Add</button>. When you click the "Add" button, whatever is in the <input> should get added to the <ul>.


import { useState } from 'react';

const List = () => {
    let [ value, setValue ] = useState(""); // set to empty string 
    let [ items, setItems ] = useState([]); // set to empty array 


let handleChange = (e) => {
    let input = e.currentTarget.value; // e.currentTarget is what user has typed 

    setValue(`${input}`); // using interpolation, changes state of input value that user has typed in 
}


let handleSubmit = (e) => {
    e.preventDefault() // stops page refreshing 
    setValue("");
    setItems([...items, value]); 
    // creating new array, ... spreadOperator is copying items in old array, putting new values on en of the array. 
};


return (
    <>
         <form className="form-group" onSubmit={ handleSubmit }>
            <input className="form-control" onChange={ handleChange } value={value} />  
            <button>Add</button>
         </form>
    
             <ul className="list-group"> 
                 {items.map((item, index) => (<li key={ index }>{ item }</li> 
            )) }
        </ul>
     
    </>
 
  );

}

export default List;


// itreate of the items array, and for each item create a new list tag. 

// items.map itterates over the array and adds a new item 