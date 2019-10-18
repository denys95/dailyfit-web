import * as React from 'react';
import classNames from 'classnames';

import './style.scss';

interface FormGroupProps {
  title?: string;
  className?: string;
  children: React.ReactNode;
}

export class FormGroup extends React.Component<FormGroupProps> {
  render() {
    const { title, className, children } = this.props;

    return (
      <div className={
        classNames('form-group', className)
      }>
        {
          title && (
            <div className="form-group-title">
              {title}
            </div>
          )
        }
        {children}
      </div>
    );
  }
}
