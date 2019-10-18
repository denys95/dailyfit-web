import * as React from 'react';

import {
  Column,
  Row,
} from '../../components/Grid';

import {
  Card,
  Button,
  PasswordInput,
  FormItem,
} from '../../components';

import './styles.scss';

export class ResetPassword extends React.Component{
  render() {
    return (
      <div className="reset-password-container">
        <Row className="reset-password-container-row">
          <Column
            md={12}
            className="reset-password-auth-form-column"
          >
            <Card className="reset-password-auth-form-card">
              <h3 className="reset-password-auth-form-title">
                Reset password
              </h3>
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
                  Save
                </Button>
              </div>
            </Card>
          </Column>
        </Row>
      </div>
    );
  }
}
