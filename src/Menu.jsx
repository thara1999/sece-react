import { useState } from "react"


const Menu = () => {
    const [count,newcount]=useState(0);
   const add=()=>newcount(count+1); 
  return (
    <div>
<h1>{count}</h1>
<button onClick={add}>counter</button>
    </div>
  )
}

export default Menu