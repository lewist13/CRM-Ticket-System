import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

export const LoginForm = ({
  handleOnChange,
  handleOnSubmit,
  email,
  password,
}) => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h1 className="text-black">Client Login</h1>
            <hr />
            <Form autoComplete="off" onSubmit={handleOnSubmit}>
              <Form.Group>
                <Form.Label className="input-name m-1 pt-2">
                  Email Address
                </Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleOnChange}
                  placeholder="Enter Email"
                  required
                />
              </Form.Group>
              <Form.Group>
                <Form.Label className="input-name m-1 pt-2">
                  Password
                </Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  value={password}
                  onChange={handleOnChange}
                  placeholder="Password"
                  required
                />
              </Form.Group>
              <Button className="login-button mt-2" type="submit">
                Login
              </Button>
            </Form>
            <hr />
          </Col>
        </Row>
        <Row>
          <Col>
            <a href="#!">Forgot Password?</a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

LoginForm.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
};
