import React, { useContext } from 'react'
import { UserContext } from '../App'

function About() {
    const context = useContext(UserContext)
  return (
    <div style={context.theme?{display:'flex',alignItems:"center",justifyContent:"center",padding:" 0 50px",color:"white"}:{display:'flex',alignItems:"center",justifyContent:"center",padding:" 0 50px",color:"black"}}>
    <p style={{fontSize:"2rem",fontWeight:"bolder" }}>You can mail me help@geekster.in</p>
    </div>
  )
}

export default About