/** @prettier */
import * as React from 'react';
import classNames from 'classnames';

import './style.scss';

type AlertTypes = 'primary' | 'success' | 'error' | 'warning';

interface AlertProps {
  className?: string;
  type?: AlertTypes;
  children: React.ReactNode;
}

export class Alert extends React.Component<AlertProps> {
  static defaultProps = {
    className: '',
    type: 'primary',
  };

  render() {
    const {
      className,
      type,
      children,
    } = this.props;

    return (
      <div className={
        classNames(
          'alert',
          `alert-${type}`,
          className,
        )
      }>
        {children}
      </div>
    );
  }
}
