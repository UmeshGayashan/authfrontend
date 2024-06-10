import React from 'react'
import { Button } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';

function Signup() {
  return (
    <div>
      <Form>
        <h1>Signup</h1>
        <Form.Group controlId="formBasicEmail">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter Email"
              >
            </Form.Control>
        </Form.Group>

        <Form.Group controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="Enter Name"
              >
            </Form.Control>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
            <Form.Label>Password Address</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Enter Password"
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