import React, { useState } from "react";
import { Button } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import "./Signup.css";

const Signup = () =>{

  const[formData,setFormData] = useState({
      email:'',
      name:'',
      password:''
  })

  const handleInputChange = (event) =>{
    const {name,value} = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log("email: ",formData.email);
    console.log("name: ",formData.name);
    console.log("password: ",formData.password);
  }

  return (
    <div className='center-form'>
      <Form onSubmit={handleSubmit}>  
        <h1>Signup</h1>
        <Form.Group controlId="formBasicEmail">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter Email"
              value={formData.email}
              onChange={handleInputChange}
              >
            </Form.Control>
        </Form.Group>

        <Form.Group controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="Enter Name"
              value={formData.name}
              onChange={handleInputChange}
              >
            </Form.Control>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
            <Form.Label>Password Address</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Enter Password"
              value={formData.password}
              onChange={handleInputChange}
              >
            </Form.Control>
        </Form.Group>

        <Button variant='primary' type='submit' className='w-100'>
          Signup
        </Button>

      </Form>
    </div>
  )
}

export default Signup