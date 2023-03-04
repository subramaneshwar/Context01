import React, { useContext } from 'react'
import { UserContext } from '../App'

function Services() {
    const context = useContext(UserContext)
    return (
      <div style={context.theme?{display:'flex',flexDirection:"column",alignItems:"center",justifyContent:"center",padding:" 0 50px",color:"white"}:{display:'flex',flexDirection:"column",alignItems:"center",justifyContent:"center",padding:" 0 50px",color:"black"}}>
      <p style={{fontSize:"2rem",fontWeight:"bolder",paddingBottom:"10px" }}>Our service are not available</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi incidunt aperiam qui perferendis placeat suscipit! Aperiam quasi rerum harum molestias quia veniam at, ut quae ad assumenda enim repellendus illum sequi vero magni delectus tempora quod doloribus tempore obcaecati. Qui explicabo, ea voluptatum aut iste modi numquam, ab quasi architecto hic maxime, accusamus repellat inventore. Hic quidem corporis eos asperiores numquam fugiat earum? Iure odit dignissimos enim accusantium possimus, neque ad minima et beatae fuga non iste voluptates deleniti suscipit dolorum asperiores at. Voluptas labore quibusdam ratione facilis laudantium similique repellat omnis officia dolore eos? Culpa suscipit dolorum ipsa distinctio veniam earum alias quia illum necessitatibus beatae fuga sint cumque voluptates natus possimus officiis accusantium facere explicabo quis, fugit laudantium, odio repellendus. Magnam esse, amet unde rerum explicabo voluptatibus praesentium, debitis, necessitatibus facilis et quod. Animi fuga perspiciatis quo repellendus odio culpa eligendi qui dignissimos quaerat, velit temporibus obcaecati ipsum.</p>
      </div>
    )
}

export default Services