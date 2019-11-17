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
  RadioButton,
  Select,
} from '../../components';

import { Stores, Gender } from '../../enums';

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

  private profileValidationSchema = yup.object().shape({
    name: yup.string(),
    gender: yup.string(),
    birthday: yup.string(),
    country: yup.string(),
    instagram: yup.string(),
  });

  componentDidMount() {
    this.loadData();
  }

  loadData = async (): Promise<void> => {
    const { getCountries, getUser } = this.props[Stores.SETTINGS];
    await getCountries();
    await getUser();
  };

  handleChangePassword = (values, actions): void => {
    console.log('PASSWORD VALUES: ', values);
    console.log('PASSWORD ACTIONS: ', actions);
  };

  handleChangeProfile = (values, actions): void => {
    console.log('PROFILE VALUES: ', values);
    console.log('PROFILE ACTIONS: ', actions);
  };

  render() {
    const {
      countries,
      user: {
        name,
        email,
        avatar,
        birthday,
        gender,
        language,
      },
    } = this.props[Stores.SETTINGS];

    const securityInitialValues = {
      oldPassword: '',
      newPassword: '',
      confirmPassword: '',
    };

    const profileInitialValues = {
      name,
      birthday,
      gender,
      language,
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
                          alt={name}
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
                      {name}
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
                            <Button type="submit" fullWidth>
                              Save
                            </Button>
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
                <Formik
                  initialValues={profileInitialValues}
                  onSubmit={this.handleChangeProfile}
                  validationSchema={this.profileValidationSchema}
                  enableReinitialize={true}
                  render={props => (
                    <Form>
                      <FormGroup
                        title="Profile"
                        className="settings-form-group"
                      >
                        <Row className="form-row">
                          <Column md={6}>
                            <FormItem label="Name">
                              <Input
                                name="name"
                                size="large"
                                value={props.values.name}
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
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
                              <div className="radio-button-group">
                                <RadioButton
                                  id="male"
                                  name="gender"
                                  label="Male"
                                  value={props.values.gender}
                                  onChange={props.handleChange}
                                  checked={props.values.gender === Gender.MALE}
                                />
                                <RadioButton
                                  id="female"
                                  name="gender"
                                  label="Female"
                                  value={props.values.gender}
                                  onChange={props.handleChange}
                                  checked={props.values.gender === Gender.FEMALE}
                                />
                              </div>
                            </FormItem>
                          </Column>
                          <Column md={4}>
                            <FormItem label="Birthday">
                              <Input
                                name="birthday"
                                size="large"
                                value={props.values.birthday}
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
                              />
                            </FormItem>
                          </Column>
                          <Column md={4}>
                            <FormItem label="Country">
                              <Select
                                name="language"
                                items={countries}
                                value={props.values.language}
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
                              />
                            </FormItem>
                          </Column>
                        </Row>
                      </FormGroup>
                    </Form>
                  )}
                />
              </Card>
            </Column>
          </Row>
        </div>
      </MainLayout>
    );
  }
}
