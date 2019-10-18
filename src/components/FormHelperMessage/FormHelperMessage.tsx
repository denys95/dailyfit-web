/** @prettier */
import * as React from 'react';
import classNames from 'classnames';

import './style.scss';

interface FormHelperMessageProps {
  type?: 'success' | 'error' | 'description',
  className?: string;
  children: React.ReactNode;
}

export class FormHelperMessage extends React.Component<FormHelperMessageProps> {
  static defaultProps = {
    type: 'description',
    className: '',
  };

  render() {
    const {
      type,
      className,
      children,
    } = this.props;

    return (
      <div className={
        classNames(
          'form-helper-message',
          `form-helper-${type}`,
          className,
        )
      }>
        {children}
      </div>
    );
  }
}
