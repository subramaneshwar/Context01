import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../App'
function Nav() {
    const context = useContext(UserContext)
  return (
    <div>
    <div className='mesg' style={{display:"flex",alignItems:"center",justifyContent:"center",padding:"10px 0"}}>
    <p style={context.theme ? {color:"white",fontSize:"1.4rem"}:{color:"black",fontSize:"1.4rem"}}>I have changed theme to <b>{context.theme ? " Dark !!" : " Light !!"}</b></p>
    </div>
    <div style={{display:"flex",alignItems:"center",justifyContent:"space-around",fontSize:"1.4rem",fontWeight:"bolder"}}>
         <h3 style={{color:"green"}}>Geekster</h3>
        <Link to="/" style={context.theme ?{textDecoration:"none", color:"white"}:{textDecoration:"none", color:"black"} } > Home</Link>
        <Link to="/About" style={context.theme ?{textDecoration:"none", color:"white"}:{textDecoration:"none", color:"black"} }>About</Link>
        <Link to="/services" style={context.theme ?{textDecoration:"none", color:"white"}:{textDecoration:"none", color:"black"} }>services</Link>
    <button onClick={()=>{
        context.setheme(!context.theme)
        console.log(context)
    }} style={ context.theme ? {backgroundColor:"white",color:"black",padding:"20px" ,margin:"50px",fontSize:".8rem",fontWeight:"bold",borderRadius:"25px"}:{backgroundColor:"black",color:"white",padding:"20px" ,margin:"50px",fontSize:".8rem",fontWeight:"bold",borderRadius:"25px" }}>
        Toggle theme to  {context.theme ? " Light" : " Dark"}
    </button>
    </div>
    </div>
  )
}

export default Nav