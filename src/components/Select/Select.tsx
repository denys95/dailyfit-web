import * as React from 'react';
import classNames from 'classnames';

import './style.scss';

export interface SelectOption {
  label: string;
  value: string;
}

interface SelectProps {
  id?: string,
  name?: string,
  className?: string;
  readonly?: boolean;
  items?: SelectOption[];
  value?: string;
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  onBlur?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export class Select extends React.Component<SelectProps> {
  static defaultProps = {
    id: null,
    name: null,
    className: '',
    items: [],
    placeholder: 'Select item',
    value: '',
    onChange: null,
    onBlur: null,
  };

  render() {
    const {
      id,
      name,
      items,
      placeholder,
      className,
      value,
      onChange,
      onBlur
    } = this.props;

    return (
      <select
        id={id}
        name={name}
        className={
          classNames('ui-select', className)
        }
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      >
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
