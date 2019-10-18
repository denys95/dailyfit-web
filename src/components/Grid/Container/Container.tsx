/** @prettier */
import * as React from 'react';
import classNames from 'classnames';

import './style.scss';

export interface ContainerProps {
  fluid?: boolean;
  className?: string;
  children: React.ReactNode;
}

export class Container extends React.Component<ContainerProps> {
  static defaultProps = {
    className: '',
  };

  render() {
    const { children, className } = this.props;
    return (
      <div
        {...this.props}
        className={classNames('container', className)}
      >
        {children}
      </div>
    );
  }
}
