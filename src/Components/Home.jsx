import React, { useContext } from 'react'
import { UserContext } from '../App'
function Home() {
    const context = useContext(UserContext)
  return (
    <div style={context.theme?{display:'flex',alignItems:"center",justifyContent:"center",padding:" 0 50px",color:"white"}:{display:'flex',alignItems:"center",justifyContent:"center",padding:" 0 50px",color:"black"}}>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos dolorum maxime ut est, esse praesentium cupiditate repellendus veniam officia nam ullam quidem. Minus, illo laboriosam sequi similique odit eum, reiciendis soluta numquam veniam beatae commodi voluptates corporis debitis veritatis at omnis dolor praesentium. Omnis earum sit maiores quidem maxime corporis voluptatum! Neque fugiat quis nihil ratione minima aut ea. Assumenda, earum atque id eveniet labore officiis sequi quidem magnam rerum provident ipsum libero esse et nisi dicta quia cum culpa! Quos cumque dolor quod accusamus, consequatur odio inventore ipsam, fugit, a quia aut minus quidem nam maiores saepe obcaecati autem? Suscipit amet, id voluptas mollitia illo perspiciatis et voluptatibus itaque temporibus commodi. Totam facilis aliquam labore fugiat ratione reprehenderit porro, et nesciunt esse illo adipisci, error, eius impedit saepe ipsum iste. Magni quisquam minima aperiam. Cumque quia doloribus rem amet sunt, dolor iste? Perspiciatis alias aut illum? Adipisci, vero asperiores?</p>
    </div>
  )
}

export default Home