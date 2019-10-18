/** @prettier */
import * as React from 'react';
import classNames from 'classnames';

import './style.scss';

interface CardProps {
  className?: string;
  children: React.ReactNode;
}

export class Card extends React.Component<CardProps> {
  static defaultProps = {
    className: '',
  };

  render() {
    const { className, children } = this.props;

    return (
      <div className={classNames('card', className)}>
        {children}
      </div>
    );
  }
}
