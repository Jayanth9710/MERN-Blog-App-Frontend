import './Settings.css'
import Sidebar from '../../Components/Sidebar/Sidebar'
import { useContext, useState } from 'react';
import { Context } from '../../Components/Context/Context';
import axios from 'axios';
import env from '../../Settings'

export default function Settings() {
    const {user,dispatch} = useContext(Context);
    const [file,setFile] = useState(null);
    const [username,setUsername] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [success,setSuccess] = useState(false);
    const PF ="https://mern-blog-app-jay.herokuapp.com/images/"

    const handleSubmit = async (e) => {
        dispatch({type:"UPDATE_START"})
        e.preventDefault();
    
        const updatedUser = {
            userId:user._id,
          username,
          email,
          password,
        };
    
        if(file) {
          const data = new FormData();
          const filename = Date.now().toString() + file.name;
          data.append("name",filename);
          data.append("file",file);
          updatedUser.displayPicture = filename;
          try {
            await axios.post(`${env.api}/upload`,data);
            
          } catch (error) {
            console.log(error)
          }
        }
        try {
          const res = await axios.put(`${env.api}/user/`+user._id, updatedUser);
           setSuccess(true)
           dispatch({type:"UPDATE_SUCCESS",payload:res.data})
        } catch (error) {  
            dispatch({type:"UPDATE_FAILURE"})
        }
      }
    return (
        <div className="settings" >
            <div className="settingsWrapper">
                <div className="settings__title">
                    <span className="settings__edit__title">Edit Your Account</span>
                    <span className="settings__delete__title">Delete Your Account</span>
                </div>
                <form className="settings__form" onSubmit={handleSubmit} >
                    <label>Profile Picture</label>
                    <div className="settings__pp">
                        <img src={file ? URL.createObjectURL(file) : PF + user.displayPicture} alt="" className=""/>
                        <label htmlFor="fileInput">
                        <i className=" settingsPpIcon far fa-user-circle"></i>
                        </label>
                       <input type="file" id="fileInput" style={{display:"none"}} onChange={e=>setFile(e.target.files[0])}/>
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder={user.username} onChange={e=>setUsername(e.target.value)}/>
                    <label>Email</label>
                    <input type="email" placeholder={user.email} onChange={e=>setEmail(e.target.value)}/>
                    <label>Password</label>
                    <input type="password" onChange={e=>setPassword(e.target.value)} />
                    <button className="settings__submit" type='submit'>Update</button>
                {success && <span style={{color:"green",textAlign:"center",margin:"20px"}}>Profile has been Updated.</span>}
                </form>
            </div>
            {/* <Sidebar/> */}
        </div>
    )
}
