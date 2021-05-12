import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

export const LoginForm = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h1>Client Login</h1>
            <hr />
            <Form>
              <Form.Group>
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter Email"
                  required
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                />
              </Form.Group>
              <Button type="submit">Login</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
