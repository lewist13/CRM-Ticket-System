import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

export const ForgotPassword = ({
  handleOnChange,
  handleOnResetSubmit,
  formSwitcher,
  email,
}) => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h1 className="text-black">Reset Password</h1>
            <hr />
            <Form autoComplete="off" onSubmit={handleOnResetSubmit}>
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
              <Button className="login-button mt-2" type="submit">
                Reset Password
              </Button>
            </Form>
            <hr />
          </Col>
        </Row>
        <Row>
          <Col>
            <a href="#!" onClick={() => formSwitcher("login")}>
              Login Now
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

ForgotPassword.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  handleOnResetSubmit: PropTypes.func.isRequired,
  formSwitcher: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
};
