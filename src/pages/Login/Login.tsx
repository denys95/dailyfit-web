import * as React from 'react';

import {
  Column,
  Row,
} from '../../components/Grid';

import {
  Card,
  Input,
  Button,
  PasswordInput,
  Checkbox,
  FormItem, Alert,
} from '../../components';

import './styles.scss';

export class Login extends React.Component {
  render() {
    return (
      <div className="login-container">
        <Row className="login-container-row">
          <Column
            md={12}
            className="login-auth-form-column"
          >
            <Card className="login-auth-form-card">
              <h3 className="login-auth-form-title">
                Sign in
              </h3>
              <Alert type="error">
                Account doesn’t exists. Enter a different email
              </Alert>
              <FormItem
                type="error"
                message="Invalid format"
              >
                <Input
                  placeholder="Email"
                  size="large"
                />
              </FormItem>
              <FormItem
                type="error"
                message="Password too short"
              >
                <PasswordInput
                  placeholder="Password"
                  size="large"
                />
              </FormItem>
              <FormItem className="login-remember-block">
                <Checkbox
                  id="remember"
                  name="remember"
                  label="Remember me"
                />
                <a
                  href="#"
                  className="login-remember-btn"
                >
                  Forgot password
                </a>
              </FormItem>
              <div>
                <Button
                  fullWidth
                  uppercase
                >
                  Sign in
                </Button>
              </div>
              <div className="login-auth-form-card-footer">
                <a href="#">
                  Create new account
                </a>
              </div>
            </Card>
          </Column>
        </Row>
      </div>
    );
  }
}
