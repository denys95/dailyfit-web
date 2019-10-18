/** @prettier */
import * as React from 'react';
import classNames from 'classnames';

import './style.scss';

export interface RowProps {
  className?: string;
  gutters?: boolean;
  form?: boolean;
  children: React.ReactNode;
}

export class Row extends React.Component<RowProps> {
  static defaultProps = {
    className: '',
  };

  render() {
    const { className, children } = this.props;
    return (
      <div
        {...this.props}
        className={classNames('row', className)}
      >
        {children}
      </div>
    );
  }
}
