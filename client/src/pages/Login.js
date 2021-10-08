import "./UserForm.css"
import { Card } from "react-bootstrap";
import { useState } from "react";
import axios from "../axios"

const Login = () => {
    const [formData, setformData] = useState({});
    const handleEmail = (e) => {
        setformData({ ...formData, email: e.target.value })
    }
    const handlePassword = (e) => {
        setformData({...formData, password: e.target.value})
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('./auth/login', formData)
            .then(res => {
                window.localStorage.setItem('token', res.data.token);
                window.localStorage.setItem('slug', res.data._id);
                window.localStorage.setItem('name', res.data.name);
                window.localStorage.setItem('email', res.data.email);
                if (res.status === 200) {   
                    window.location.reload();
                }
            })
    }
    return (
        <Card className="form-page">
            <Card bg= "primary" className="form-container">
                <form>
                    <h3>Log in</h3>
                    <br />
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" placeholder="Enter email" onChange={handleEmail}/>
                    </div>
                    <br />
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Enter password" onChange={handlePassword}/>
                    </div>
                    <br />
                    <button onClick={(e)=>handleSubmit(e)} className="btn btn-dark btn-lg btn-block">Sign in</button>
                </form>
                New user? <a href="/signup" style={{color:"white"}}>Click here</a>
            </Card>
        </Card>
    );
}
 
export default Login;