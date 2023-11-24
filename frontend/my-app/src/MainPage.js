import React from "react";
import mypic from "./pic.webp"
import{Link,Route,Routes} from "react-router-dom"
import Login from "./Login"
import Register from "./Register";
import Empty from './Empty'
function MainPage (){
    return(
        <div>
            <center>
            <img src={mypic} height='120' width='500' alt='pic'/>
            <nav>
                
                <Link to='/register'>Register</Link>
                <Link to ='/login'>Login</Link>
                <Link to='/mainpage'>Instruction</Link>
                
            </nav>
            <Routes>
                
                <Route path='/register' element={<Register></Register>}></Route>
                <Route path='/login' element={<Login></Login>}></Route>
                <Route path='/mainpage' element={<Empty></Empty>}></Route>
                
            </Routes>
            </center>
        </div>
    )
}export default MainPage