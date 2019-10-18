import * as React from 'react';

import {
  Column,
  Row,
} from '../../components/Grid';

import {
  Card,
  Input,
  Button,
  FormItem,
} from '../../components';

import './style.scss';

export class ForgotPassword extends React.Component {
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
                Forgot password
              </h3>
              <p className="registration-auth-form-description">
                Enter your email address, we’ll send you the instructions on how
                to change your password
              </p>
              <FormItem
                type="error"
                message="Account doesn’t exists. Enter a different email"
              >
                <Input
                  placeholder="Email"
                  size="large"
                />
              </FormItem>
              <div>
                <Button
                  fullWidth
                  uppercase
                >
                  Send
                </Button>
              </div>
            </Card>
          </Column>
        </Row>
      </div>
    );
  }
}
