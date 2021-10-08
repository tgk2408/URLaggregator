import { useEffect, useState } from "react";
import NavBar from "../components/NavBar"
import "./UserForm.css"
import {useParams} from 'react-router-dom'
import { Form, Button, Card } from "react-bootstrap";
import axios from "../axios"
// import UserAuth from "../UserAuth";

const DashBoard = () => {
    const {slug} = useParams()
    const [Totaldata, SetTotaldata] = useState([]);
    const [URLname, SetURLname] = useState("");
    const [URLdata, SetURLdata] = useState("");
    const email = localStorage.getItem("email");

    useEffect(() => {
        const FetchData = async () => {
            const req = await axios.get(`/links/${slug}`);
            SetTotaldata(req.data);
        }
        FetchData();
    }, []);

    const handleChangeName = (e) => {
        SetURLname(e.target.value);
    };
    const handleChangeURL = (e) => {
        SetURLdata(e.target.value);
    };
    const handleSubmit = async () => {
        const req = await axios.post(
            '/links',
            { destination: URLname, url: URLdata, authorEmailId: email },
        );
        SetTotaldata(data => [...data, req.data])
    };
    const displayData = (name, url,i) => {
        return (
            <div key={i}>
                <img src={"https://s2.googleusercontent.com/s2/favicons?domain_url=" + url} alt= "favicon"/>
                <a href={url} target="_blank" >{name }</a>
            </div>
        )
    }
    return (
        <>
            <NavBar></NavBar>
            
            {//UserAuth() &&
                <Card>
                <Card bg="primary" className="form-container">
                    <Form>
                    <Form.Group className="mb-3" controlId="formName" >
                    <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Name"  onChange={handleChangeName}/>
                    <Form.Text className="text-muted">
                    </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formURL" >
                    <Form.Label>URL</Form.Label>
                        <Form.Control type="url" placeholder="Enter URL" onChange={handleChangeURL}/>
                    <Form.Text className="text-muted">
                    </Form.Text>
                    </Form.Group>
                    <Button onClick={handleSubmit} variant="primary">
                        Add Link
                    </Button>
                    </Form>
                </Card>
                </Card>}
                {Totaldata.map((dataPoint,i) => {
                    return displayData(dataPoint.destination, dataPoint.url,i)
                })}
        </>
        
    );
}
 
export default DashBoard;