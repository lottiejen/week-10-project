const Square = ({ selected, color, handleClick }) => { // x3 props, these need to be referenced in the 

    // child component to parent squares 
    let squareColor = selected ? color : 'yellow'

return (
<div onClick ={ handleClick } style  = {{
        height: '200px',
        width: '200px',
        background: squareColor
    }} />

  )

}

export default Square;
