import * as React from 'react';
import classNames from 'classnames';

import './style.scss';

interface FormProps {
  className?: '',
  action?: string;
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
  children: React.ReactNode,
}

export class Form extends React.Component<FormProps> {
  static defaultProps = {
    className: '',
    onSubmit: null,
  };

  render() {
    const {
      className,
      action,
      children,
      onSubmit,
    } = this.props;

    return (
      <form
        action={action}
        className={
          classNames('ui-form', className)
        }
        onSubmit={onSubmit}
      >
        {children}
      </form>
    );
  }
}
