/** @prettier */
import * as React from 'react';
import classNames from 'classnames';

import './style.scss';

export interface SelectItem {
  label: string;
  value: string;
}

interface SelectProps {
  className?: string;
  items?: SelectItem[];
  value?: string;
  placeholder?: string;
}

export class Select extends React.Component<SelectProps> {
  static defaultProps = {
    className: '',
    items: [],
    placeholder: 'Select item',
  };

  render() {
    const {
      items,
      placeholder,
      className,
    } = this.props;

    return (
      <select className={
        classNames('ui-select', className)
      }>
        <option value="">
          {placeholder}
        </option>
        {
          items.map(item => (
            <option
              key={item.value}
              value={item.value}
            >
              {item.label}
            </option>
          ))
        }
      </select>
    );
  }
}
