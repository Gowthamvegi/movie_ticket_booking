import React, { useState } from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate()
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSignUp = () => {
    // console.log('Signing up with:', { username, password });
    if(username.length >0)
    navigate('/movies')
    else alert('Please Select aleast one Seat')
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Row>
      <Card className="border-0">
      <Card.Body className="text-center">
        <h2 style={{fontWeight:'700'}}>Sign Up</h2>
        <p>Contrary to popular belief, Lorem Ipsum is not simply random text</p>
      </Card.Body>
    </Card>
        <Col >
          <Form>
            <Form.Group controlId='formBasicUsername'>
              <Form.Control
                type='text'
                placeholder='Name'
                style={{padding:'15px',marginBottom:'20px',borderRadius:'0'}}
                value={username}
                onChange={handleUsernameChange}
              />
            </Form.Group>

            <Form.Group controlId='formBasicPassword'>
              <Form.Control
                type='password'
                placeholder='Password'
                style={{padding:'15px',marginBottom:'20px',borderRadius:'0'}}
                value={password}
                onChange={handlePasswordChange}
              />
            </Form.Group>

            <Button
  style={{
    width: '100%',
    padding: '10px',
    borderRadius: '20px',
    backgroundColor: 'black',
    color: 'white',
    transition: 'background-color 0.3s ease',
  }}
  onClick={handleSignUp}
  className="btn-hover-light"
>
  Sign Up
</Button>

          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default SignUp;
