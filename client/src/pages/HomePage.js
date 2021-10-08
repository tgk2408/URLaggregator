import NavBar from "../components/NavBar";
import { Card, Button } from "react-bootstrap";
import { useEffect } from 'react'
import UserAuth from '../UserAuth'

const HomePage = () => {
    useEffect(() => {
        if (UserAuth()) {
            window.location.href ="/" + localStorage.getItem("slug");
        }
    }, []);
    return (
        <>
            <NavBar></NavBar>
            <Card className="form-page">
                <Card bg= "primary" className="form-container">
                    Welcome to this website
                    <br />
                    <Button variant="outline-info" href="./login">Get Started</Button>
                </Card>
            </Card>
   
    </>
    )
}
 
export default HomePage;