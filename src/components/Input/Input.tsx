import * as React from 'react';
import classNames from 'classnames';

import './style.scss';

interface InputProps {
  type?: string;
  className?: string;
  size?: string;
  autoWidth?: boolean;
  valid?: boolean;
  invalid?: boolean;
  innerRef?: string;
  placeholder?: string;
  readonly?: boolean;
  value?: string | number;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export class Input extends React.Component<InputProps> {
  static defaultProps = {
    type: 'text',
    className: '',
    size: 'default',
    autoWidth: false,
    valid: false,
    invalid: false,
    innerRef: null,
    placeholder: '',
    // TODO: change readonly value to false by default
    readonly: true,
    value: '',
    onChange: null,
  };

  render() {
    const {
      type,
      className,
      size,
      autoWidth,
      valid,
      invalid,
      innerRef,
      placeholder,
      readonly,
      value,
      onChange,
    } = this.props;

    return (
      <input
        type={type}
        ref={innerRef}
        placeholder={placeholder}
        className={
          classNames(
            'ui-input',
            size,
            autoWidth && 'auto-width',
            valid && 'valid',
            invalid && 'invalid',
            className,
          )
        }
        readOnly={readonly}
        value={value}
        onChange={onChange}
      />
    );
  }
}
