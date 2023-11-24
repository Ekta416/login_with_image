import React, { useState } from "react";
import axios from 'axios'
import ReactDOM from "react-dom/client";
import UserHome from './UserHome';
function Login(){
    const[userid,setUserId]=useState()
    const[userpass,setUserPass]=useState()
    const handleTextChange=(evt)=>{
        if(evt.target.name==='txtuid'){
        setUserId(evt.target.value)
        }
        else if(evt.target.name==="txtupass"){
            setUserPass(evt.target.value)
        }
    }
    const handleLoginButton=()=>{
        axios.get('http://localhost:4545/user/login/'+userid+"/"+userpass).then((res)=>{
            var obj={
                ufullname:res.data[0].ufullname,
                upicname:res.data[0].upicname
            }
            if(res.data[0].ufullname!==undefined){
                const root=ReactDOM.createRoot(document.getElementById('root'))
                root.render(<UserHome data={obj}></UserHome>)

            }else{
                alert('invalid id or password')
            }
        }).catch((err)=>{
            alert(err)
        })
    }
    return(
        <div>
            <center>
            
            <h4>User Login</h4>
            <table>
                <tr>
                    <td>User Id</td>
                    <td> <input type="text" name="txtuid" onChange={handleTextChange}/></td>
                </tr>
                <tr>
                    <td>User Password</td>
                    <td> <input type="password" name="txtupass" onChange={handleTextChange}/></td>
                </tr>
                <tr>
                    <td></td>
                    <td><button type="button" onClick={handleLoginButton}>Login</button></td>
                </tr>
            </table>
            </center>
        </div>
    )
}export default Login;
