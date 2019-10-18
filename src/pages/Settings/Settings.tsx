import * as React from 'react';
import { inject, observer } from 'mobx-react';

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
} from '../../components';

import { Stores } from '../../enums';

import { SettingsStore } from '../../stores';

import './style.scss';

interface Props {
  [Stores.SETTINGS]: SettingsStore,
}

@inject(Stores.SETTINGS)
@observer
export class Settings extends React.Component<Props> {

  componentDidMount(): void {
    const { login } = this.props[Stores.SETTINGS];
    login({
      name: '',
    }).then((result) => console.log(result));
  }

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
                  <Row className="form-row">
                    <Column>
                      <FormItem label="Email">
                        <Input
                          placeholder="Email"
                          size="large"
                          value={email}
                        />
                      </FormItem>
                    </Column>
                  </Row>
                  <Row className="form-row">
                    <Column>
                      <FormItem label="Old password">
                        <PasswordInput
                          placeholder="Old password"
                          size="large"
                          eye={false}
                        />
                      </FormItem>
                    </Column>
                  </Row>
                  <Row className="form-row">
                    <Column>
                      <FormItem label="New password">
                        <PasswordInput
                          placeholder="New password"
                          size="large"
                          eye={false}
                        />
                      </FormItem>
                    </Column>
                  </Row>
                  <Row className="form-row">
                    <Column>
                      <FormItem label="Confirm password">
                        <PasswordInput
                          placeholder="Confirm password"
                          size="large"
                          eye={false}
                        />
                      </FormItem>
                    </Column>
                  </Row>
                  <Row className="form-row">
                    <Column>
                      <Button fullWidth>Save</Button>
                    </Column>
                  </Row>
                </div>
              </Card>
            </Column>
            <Column md={8}>
              <Card className="settings-content-card">
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
              </Card>
            </Column>
          </Row>
        </div>
      </MainLayout>
    );
  }
}
