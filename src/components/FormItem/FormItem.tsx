import * as React from 'react';
import classNames from 'classnames';

import { FormHelperMessage } from '../../components';

import './style.scss';

interface FormItemProps {
  className?: string;
  message?: string;
  label?: string;
  htmlFor?: string;
  type?: 'success' | 'error' | 'description';
  children: React.ReactNode;
}

export class FormItem extends React.Component<FormItemProps> {
  static defaultProps = {
    className: '',
    message: '',
    label: '',
    htmlFor: null,
    type: 'description',
  };

  render () {
    const {
      type,
      message,
      label,
      htmlFor,
      className,
      children,
    } = this.props;

    return (
      <div className={
        classNames('form-item', className)
      }>
        {
          label && (
            <label
              className="form-item-label"
              htmlFor={htmlFor}
            >
              {label}
            </label>
          )
        }
        {children}
        {
          message && (
            <FormHelperMessage type={type}>
              {message}
            </FormHelperMessage>
          )
        }
      </div>
    );
  }
}
