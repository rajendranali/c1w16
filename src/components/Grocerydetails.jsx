import React from "react"
import data from '../data.json'
import"./grossery.css"
import CartButton from "./CartButton.jsx"


const GroceryDetails = ()=>{
console.log(data)

    return(
        <>
        <h1>Groceries</h1>
        <div className="container">
            {/* map through the data and display the cards */}
            {
                data.map((item)=>{
                   return (
                       <>
                       <div className="card">
                           <div style={{marginRight:"290px",marginTop:"10px",color:"white",backgroundColor:"red",height:"40px",width:"40px",textAlign:"center",borderRadius:"20px",marginTop:"20px",fontSize:"16px"}}><p >{item.discount}</p></div>
                           <div ><img style={{height:"250px",width:"250px"}}src={item.imgURL} alt="" /></div>
                           <div>
                               <h3>{item.title}</h3>
                           </div>
                           <div className="price">
                           <h4>{item.sellingPrice}</h4>
                           <p style={{marginLeft:"50px"}}>M.R.P:</p><p style={{textDecoration:"line-through" }}>{item.mrp}</p>
                           
                           </div>
                          
                          <CartButton/>
                       </div>
                      
                       </>
                   )
                })
            }
        </div>
        </>
    )
}
export default GroceryDetails