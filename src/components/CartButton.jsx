import { useState } from "react";

// keep the add to cart component here
const CartButton = () => {
    //manage state of the count 
    const[count,setCount]=useState(0)
    const Handlein=()=>{
      setCount((pre)=>pre+1)
    }
    const Handledn=()=>{
      setCount((pre)=>pre-1)
    }
  return <>
  {/* add to cart button */}
  {/* count with - and  + button */}
  <div>
  <button>Add to Cart</button>
      <button onClick={Handledn}>-</button>
      <p className="count-item">{count}</p>
      <button onClick={Handlein}>+</button>

  </div>
  </>;
};
export default CartButton
