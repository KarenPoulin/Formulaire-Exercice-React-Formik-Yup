import React from 'react';
import { useState } from 'react';
import BsForm from "react-bootstrap/Form";
import Button from 'react-bootstrap/button';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Input from './Input';

const Form = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        name: "",
        lastname: "",
    });

    const onChange = (newValue, id) => {
        setFormData({
            ... formData,
            [id]: newValue,
        });
        console.log(newValue);
    };

    const onSubmit = (event) => {
        event.preventDefault;
    }

  return (
    <BsForm onSubmit={onSubmit}>
        <Row>
            <Col>
                <Input type='email' value={formData.email} id="email" onChange={onChange} />
            </Col>
            <Col>
                <Input type='password' value={formData.password} id="password" onChange={onChange} />
            </Col>
        </Row>
        <Row>
            <Col>
                <Input value={formData.name} id="name" onChange={onChange} />
            </Col>
            <Col>
                <Input value={formData.lastname} id="lastname" onChange={onChange} />
            </Col>
        </Row>
        <Button type="submit" variant='danger' >Login</Button>
    </BsForm>
  )
}

export default Form;