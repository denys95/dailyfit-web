import * as React from 'react';
import classNames from 'classnames';

import './style.scss';

interface TextareaProps {
  className?: string;
  size?: string;
  autoWidth?: boolean;
  resize?: boolean;
  valid?: boolean;
  invalid?: boolean;
  innerRef?: string;
  placeholder?: string;
  readonly?: boolean;
  value?: string | number;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export class Textarea extends React.Component<TextareaProps> {
  static defaultProps = {
    className: '',
    size: 'default',
    autoWidth: false,
    resize: false,
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
      className,
      size,
      autoWidth,
      resize,
      valid,
      invalid,
      innerRef,
      placeholder,
      readonly,
      value,
      onChange,
    } = this.props;

    return (
      <textarea
        ref={innerRef}
        placeholder={placeholder}
        className={
          classNames(
            'ui-textarea',
            size,
            autoWidth && 'auto-width',
            !resize && 'no-resize',
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
