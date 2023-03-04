import './App.css';
import { createContext, useState } from 'react';
import {Routes,Route} from "react-router-dom"
import Services from './Components/Services';
import About from './Components/About';
import Home from './Components/Home';
import Nav from './Components/Nav';
export const UserContext = createContext()

function App() {
    const [theme, setheme] = useState(false)
  return (
    <div className="App" style={ theme?{backgroundColor:"black",color:"white",height:"100vh",width:"100%"}:{backgroundColor:"white",color:"black",height:"100vh",width:"100%"} }>
      <UserContext.Provider value={{theme,setheme}}>
        <Nav/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/services' element={<Services/>}/>
        </Routes>
      </UserContext.Provider>
    </div>
  );
}

export default App;
