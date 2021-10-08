import Goku from "../images/Goku.png"
import "./NavBar.css"
import { Navbar, Button, Nav, Form } from "react-bootstrap";
import UserAuth from "../UserAuth";
import { useParams } from "react-router-dom";

const NavBar = () => {
    const slug = useParams();
    const handleLogout = () => {
        localStorage.clear();
    }
    return (
        <Navbar className="nav-container" bg="primary" variant="dark" sticky="top">
            <Navbar.Brand>
                {true && <img src={Goku} alt="Goku" className="nav-logo" />}
            </Navbar.Brand>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav>
                    { UserAuth() ?
                        <Nav.Link href={"./" + slug}>Dashboard</Nav.Link>
                        :
                        <Nav.Link href={"./"}>Home</Nav.Link>
                    }
                    { UserAuth() &&
                        <Nav.Link href={"./" + slug + "/profile"}>Profile</Nav.Link>
                    }
                </Nav>
            </Navbar.Collapse>
            <Form inline className="mx-3">
                {UserAuth() ?
                    <Button variant="outline-info" href="./" onClick={handleLogout}>LogOut</Button>
                    :
                    <Button variant="outline-info" href="./login">LogIn</Button>
                }
            </Form>
        </Navbar>
    );
}
 
export default NavBar;