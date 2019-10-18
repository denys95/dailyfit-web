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
  FormItem,
} from '../../components';

import './styles.scss';

export class Registration extends React.Component{
  render() {
    return (
      <div className="registration-container">
        <Row className="registration-container-row">
          <Column
            md={12}
            className="registration-auth-form-column"
          >
            <Card className="registration-auth-form-card">
              <h3 className="registration-auth-form-title">
                Sign up
              </h3>
              <FormItem
                type="error"
                message="Email already exists, please enter a different email"
              >
                <Input
                  placeholder="Email"
                  size="large"
                />
              </FormItem>
              <FormItem
                type="description"
                message="Password must contain digits and characters"
              >
                <PasswordInput
                  placeholder="Password"
                  size="large"
                />
              </FormItem>
              <FormItem
                type="error"
                message="Please, confirm your password"
              >
                <PasswordInput
                  placeholder="Confirm password"
                  size="large"
                />
              </FormItem>
              <div>
                <Button
                  fullWidth
                  uppercase
                >
                  Sign up
                </Button>
              </div>
              <div className="registration-auth-form-card-footer">
                <a href="#">
                  Already a member? Sign in
                </a>
              </div>
            </Card>
          </Column>
        </Row>
      </div>
    );
  }
}
