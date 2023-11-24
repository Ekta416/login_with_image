import React, { useState } from "react";
import axios from "axios";

function Register() {
  const [userid, setUserId] = useState();
  const [userpass, setUserPass] = useState();
  const [ufullname, setUFullname] = useState();
  const [upicname, setUPicname] = useState();
  const [image, setImage] = useState({preview:"data"});
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append('file', image.data);
      const responce = await fetch('http://localhost:4545/saveimage', {
        method: "POST",
        body: formData,
      });

      if (responce) {
        setStatus('File uploaded ' + responce.statusText);
      }
    
  };

  const handleFileChange = (e) => {
    const img = {
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0],
    };
    setUPicname(e.target.files[0].name);
    setImage(img);
  };

  const handleUserIdText = (evt) => {
    setUserId(evt.target.value);
  };

  const handleUserPassText = (evt) => {
    setUserPass(evt.target.value);
  };

  const handleFullnameText = (evt) => {
    setUFullname(evt.target.value);
  };

  const handleRegisterButton = () => {
    var obj = {
      userid: userid,
      userpass: userpass,
      ufullname: ufullname,
      upicname: upicname,
    };

    axios.post("http://localhost:4545/user/register/",obj)
      .then((res) => {
        alert("Register done");
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <div>
      <center>
      <h1>User Registration Form</h1>
      <table>
    
          <tr>
            <td>User ID</td>
            <td><input type="text" onChange={handleUserIdText} /></td>
          </tr>
          <tr>
            <td>User Password</td>
            <td><input type="password" onChange={handleUserPassText} /></td>
          </tr>
          <tr>
            <td>Full Name</td>
            <td><input type="text" onChange={handleFullnameText} /></td>
          </tr>
          <tr>
            <td>Select Photo</td>
            <td>
              {image.preview && <img src={image.preview} alt="Preview" width="100" height="100"/>}
              <form onSubmit={handleSubmit}>
                <input type="file" onChange={handleFileChange} />
                <button type="submit">Submit</button>
              </form>
              {/* Display file upload status */}
              {status && <p>{status}</p>}
            </td>
          </tr>
          <tr>
            <td></td>
            <td><button type="submit" onClick={handleRegisterButton}>Register Me</button></td>
          </tr>
        
      </table>
      </center>
    </div>
  );
}

export default Register;
