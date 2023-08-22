import React from 'react';
import BsForm from 'react-bootstrap/Form';
import Button from 'react-bootstrap/button';
import { Form } from 'formik';
import { Input } from './Input';

export const FormLogin = () => {
    return (
        <Form as={BsForm} noValidate>
            <Input label="Email" type="text" placeholder="e.g. abc@abc.com" id="email" />
            <Input label="Password" type="password" placeholder="password" id="password" />
            <Input label="Firstame" type="text" placeholder="Firstname" id="firstname" />
            <Input label="Lastname" type="text" placeholder="Lastname" id="lastname" />
            <Button type="submit" variant='danger'>Login</Button>
        </Form>
    )
};