import NavBar from "../components/NavBar"
import { Card } from "react-bootstrap";
import "./UserForm.css"
import "./Profile.css"
import Toriyama from "../images/Toriyama.jpg"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../axios"

const Profile = () => {
    const [PicHover, SetPicHover] = useState(false);
    const HandlePicHover = () => {
        SetPicHover(!PicHover);
    }
    const [Userdata, SetUserdata] = useState({});
    const slug = useParams();
    const username = localStorage.getItem("name");
    const email = localStorage.getItem("email");
    const password = localStorage.getItem("password");
    useEffect(() => {
        const FetchData = async () => {
            const req = await axios.get('/user', { slug });
            SetUserdata(req.data);
        }
        FetchData();     
    },[])
    return (
        <>
            <NavBar />
            <Card className="form-page">
                <Card bg= "primary" className="form-container">
                    <div className="pic-container" onMouseEnter={HandlePicHover} onMouseLeave={HandlePicHover}>
                        <img className="pic" src={Toriyama} alt="Akira"/>
                        {PicHover &&
                            <div className="pic-update">Update Profile pic</div>
                        }
                    </div>
                    <br />
                    <p>
                        Username: {username}
                        <br />
                        Email: {email}
                        <br />
                        Password: {password}
                    </p>
                </Card>
            </Card>
        </>
    );
}
 
export default Profile;