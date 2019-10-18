/** @prettier */
import * as React from 'react';

import { Input } from '../Input/Input';

import './style.scss';

interface PasswordInputProps {
  size?: string;
  placeholder?: string;
  eye?: boolean;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface PasswordInputState {
  isTypePassword: boolean;
}

export class PasswordInput extends React.Component<
  PasswordInputProps,
  PasswordInputState
> {
  static defaultProps = {
    eye: true,
    value: '',
    onChange: null,
  };

  constructor(props) {
    super(props);

    this.state = {
      isTypePassword: true,
    };
  }

  toggleInputType = () => {
    const { isTypePassword } = this.state;

    this.setState({
      isTypePassword: !isTypePassword,
    });
  };

  render() {
    const {
      placeholder,
      size,
      eye,
      value,
      onChange,
    } = this.props;
    const { isTypePassword } = this.state;

    return (
      <div className="input-password-wrapper">
        <Input
          type={isTypePassword ? 'password' : 'text'}
          placeholder={placeholder}
          size={size}
          value={value}
          onChange={onChange}
        />
        {
          eye && (
            <a className="input-password-toggle" onClick={this.toggleInputType}>
              {isTypePassword ? 'Show' : 'Hide'}
            </a>
          )
        }
      </div>
    );
  }
}
