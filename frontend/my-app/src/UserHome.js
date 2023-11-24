import React  from "react";
//import axios from "axios"
//import Register from "./Register";
import { MemoryRouter } from "react-router-dom";
import  ReactDOM from "react-dom/client";
import MainPage from "./MainPage"

function UserHome(props){
    const handleLoginButton=()=>{
        const root= ReactDOM.createRoot(document.getElementById('root'));
        root.render(<MemoryRouter><MainPage></MainPage></MemoryRouter>)
    }
    return(
        <div>
            <center>
            <h4>Welcome {props.data.ufullname} </h4>
            <img src={"http://localhost:4545/getimage/"+props.data.upicname} height='80' width="80" alt="pic"/>
            <button type='submit' onClick={handleLoginButton}>Logout</button>
            </center>
        </div>
    )

}
export default UserHome