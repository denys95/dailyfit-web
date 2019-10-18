/** @prettier */
import * as React from 'react';
import classNames from 'classnames';

import './style.scss';

interface SectionProps {
  className?: string;
  children: React.ReactNode;
}

export class Section extends React.Component<SectionProps> {
  static defaultProps = {
    className: '',
  };

  render() {
    const {
      children,
      className,
      ...props
    } = this.props;

    return (
      <section
        {...props}
        className={classNames(
          'section',
          className,
        )}
      >
        {children}
      </section>
    );
  }
}
