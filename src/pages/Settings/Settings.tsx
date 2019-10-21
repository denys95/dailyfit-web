import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { Formik } from 'formik';
import * as yup from 'yup';

import {
  MainLayout,
  Card,
  Input,
  FormItem,
  Column,
  Row,
  PasswordInput,
  Button,
  MaterialIcon,
  Textarea,
  FormGroup,
  Form,
} from '../../components';

import { Stores } from '../../enums';

import { SettingsStore } from '../../stores';

import './style.scss';

interface Props {
  [Stores.SETTINGS]: SettingsStore,
}

@inject(Stores.SETTINGS, Stores.ROUTER)
@observer
export class Settings extends React.Component<Props> {

  private passwordValidationSchema = yup.object().shape({
    oldPassword: yup.string()
      .required('Password is required'),
    newPassword: yup.string()
      .required('Password is required'),
    confirmPassword: yup.string()
      .oneOf([yup.ref('newPassword'), null], 'Passwords don\'t match')
      .required('Password is required'),
  });

  componentDidMount(): void {
    this.loadUserData();
  }

  loadUserData = async () => {
    const { getUser } = this.props[Stores.SETTINGS];
    await getUser();
  };

  handleChangePassword = (values, actions) => {
    console.log('PASSWORD VALUES: ', values);
    console.log('PASSWORD ACTIONS: ', actions);
  };

  handleChangeProfile = (values, actions) => {
    console.log('PROFILE VALUES: ', values);
    console.log('PROFILE ACTIONS: ', actions);
  };

  render() {
    const {
      user: {
        firstName,
        lastName,
        email,
        avatar,
        birthday,
        gender,
        city,
      },
      userName,
    } = this.props[Stores.SETTINGS];

    const securityInitialValues = {
      oldPassword: '',
      newPassword: '',
      confirmPassword: '',
    };

    return (
      <MainLayout>
        <header className="settings-header">
          <h2 className="settings-header-title">
            Settings
          </h2>
        </header>
        <div className="settings-content">
          <Row>
            <Column md={4}>
              <Card className="settings-content-card">
                <div className="settings-profile">
                  <div className="settings-profile-image-container">
                    {
                      avatar ? (
                        <img
                          className="settings-profile-image"
                          src={avatar}
                          alt={userName}
                        />
                      ) : (
                        <MaterialIcon
                          icon="person"
                          className="settings-profile-icon"
                        />
                      )
                    }
                  </div>
                  <div className="settings-profile-name-container">
                    <div className="settings-profile-name">
                      {userName}
                    </div>
                    <div className="settings-profile-email">
                      {email}
                    </div>
                  </div>
                </div>
                <div className="settings-security">
                  <Formik
                    initialValues={securityInitialValues}
                    onSubmit={this.handleChangePassword}
                    validationSchema={this.passwordValidationSchema}
                    enableReinitialize={true}
                    render={props => (
                      <Form onSubmit={props.handleSubmit}>
                        <Row className="form-row">
                          <Column>
                            <FormItem
                              label="Old password"
                              message={props.errors.oldPassword}
                              type={props.errors.oldPassword ? 'error' : 'success'}
                            >
                              <PasswordInput
                                placeholder="Old password"
                                size="large"
                                eye={false}
                                readonly={false}
                                name="oldPassword"
                                invalid={!!props.errors.oldPassword}
                                value={props.values.oldPassword}
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
                              />
                            </FormItem>
                          </Column>
                        </Row>
                        <Row className="form-row">
                          <Column>
                            <FormItem
                              label="New password"
                              message={props.errors.newPassword}
                              type={props.errors.newPassword ? 'error' : 'success'}
                            >
                              <PasswordInput
                                placeholder="New password"
                                size="large"
                                eye={false}
                                readonly={false}
                                name="newPassword"
                                invalid={!!props.errors.newPassword}
                                value={props.values.newPassword}
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
                              />
                            </FormItem>
                          </Column>
                        </Row>
                        <Row className="form-row">
                          <Column>
                            <FormItem
                              label="Confirm password"
                              message={props.errors.confirmPassword}
                              type={props.errors.confirmPassword ? 'error' : 'success'}
                            >
                              <PasswordInput
                                placeholder="Confirm password"
                                size="large"
                                eye={false}
                                readonly={false}
                                name="confirmPassword"
                                invalid={!!props.errors.confirmPassword}
                                value={props.values.confirmPassword}
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
                              />
                            </FormItem>
                          </Column>
                        </Row>
                        <Row className="form-row">
                          <Column>
                            <Button type="submit" fullWidth>Save</Button>
                          </Column>
                        </Row>
                      </Form>
                    )}
                  />
                </div>
              </Card>
            </Column>
            <Column md={8}>
              <Card className="settings-content-card">
                <Form>
                  <FormGroup
                    title="Profile"
                    className="settings-form-group"
                  >
                    <Row className="form-row">
                      <Column md={6}>
                        <FormItem label="First name">
                          <Input
                            size="large"
                            value={firstName}
                          />
                        </FormItem>
                      </Column>
                      <Column md={6}>
                        <FormItem label="Last name">
                          <Input
                            size="large"
                            value={lastName}
                          />
                        </FormItem>
                      </Column>
                    </Row>
                  </FormGroup>
                  <FormGroup
                    title="Address"
                    className="settings-form-group"
                  >
                    <Row className="form-row">
                      <Column md={4}>
                        <FormItem label="Gender">
                          <Input
                            size="large"
                            value={gender}
                          />
                        </FormItem>
                      </Column>
                      <Column md={4}>
                        <FormItem label="Birthday">
                          <Input
                            size="large"
                            value={birthday}
                          />
                        </FormItem>
                      </Column>
                      <Column md={4}>
                        <FormItem label="City">
                          <Input
                            size="large"
                            value={city}
                          />
                        </FormItem>
                      </Column>
                    </Row>
                  </FormGroup>
                  <FormGroup
                    title="Social"
                    className="settings-form-group"
                  >
                    <Row className="form-row">
                      <Column md={4}>
                        <FormItem label="Facebook">
                          <Input size="large"/>
                        </FormItem>
                      </Column>
                      <Column md={4}>
                        <FormItem label="Twitter">
                          <Input size="large"/>
                        </FormItem>
                      </Column>
                      <Column md={4}>
                        <FormItem label="Instagram">
                          <Input size="large"/>
                        </FormItem>
                      </Column>
                    </Row>
                  </FormGroup>
                  <Row className="form-row">
                    <Column>
                      <FormItem label="About">
                        <Textarea
                          placeholder="Enter your bio"
                        />
                      </FormItem>
                    </Column>
                  </Row>
                </Form>
              </Card>
            </Column>
          </Row>
        </div>
      </MainLayout>
    );
  }
}
