import * as React from 'react';
import classNames from 'classnames';

import './style.scss';

interface MaterialIconProps {
  icon: string;
  className?: string;
}

export class MaterialIcon extends React.Component<MaterialIconProps> {
  static defaultProps = {
    className: '',
  };

  render() {
    const { icon, className } = this.props;

    return (
      <span className={
        classNames('mi', `mi-${icon}`, className)
      } />
    );
  }
}
