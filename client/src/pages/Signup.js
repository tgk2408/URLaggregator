import "./UserForm.css"
import { Card } from "react-bootstrap";
import { useState } from "react";
import axios from "../axios"
import {useHistory} from 'react-router-dom'

const Signup = () => {
    const history = useHistory()
    const [formData, setformData] = useState({});
    const handleEmail = (e) => {
        setformData({ ...formData, email: e.target.value })
    }
    const handlePassword = (e) => {
        setformData({...formData, password: e.target.value})
    }
    const handleUsername = (e) => {
        setformData({...formData, name: e.target.value})
    }
    const handleSlug = (e) => {
        setformData({...formData,slug: e.target.value})
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log(formData)
        axios.post('/auth/signup', formData)
            .then(res => {
                console.log(res)
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
                    <h3>Sign up</h3>
                    <br />
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" className="form-control" placeholder="Name" onChange={handleUsername}/>
                    </div>
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
                    <div className="form-group">
                        <label>Your avatar name</label>
                        <input type="text" className="form-control" placeholder="Enter slug" onChange={handleSlug}/>
                    </div>
                    <br />
                    <button onClick= {(e)=>handleSubmit(e)} className="btn btn-dark btn-lg btn-block">Register</button>
                </form>
                Already have an account? <a href="/login" style={{color:"white"}}>Click here</a>
            </Card>
        </Card>
    );
}
 
export default Signup;