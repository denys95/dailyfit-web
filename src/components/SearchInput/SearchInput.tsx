import * as React from 'react';
import classNames from 'classnames';

import {
  Input,
  MaterialIcon,
} from '../../components';

import './style.scss';

interface SearchInputProps {
  type?: string;
  className?: string;
  inputClassName?: string;
  size?: string;
  autoWidth?: boolean;
  valid?: boolean;
  invalid?: boolean;
  innerRef?: string;
  placeholder?: string;
  value?: string | number;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export class SearchInput extends React.Component<SearchInputProps> {
  static defaultProps = {
    type: 'text',
    className: '',
    size: 'default',
    autoWidth: false,
    valid: false,
    invalid: false,
    innerRef: null,
    placeholder: '',
    readonly: false,
    value: '',
    onChange: null,
  };

  render() {
    const { className, inputClassName, value, onChange } = this.props;

    return (
      <div className={
        classNames('search-wrapper', className)
      }>
        <Input
          type="text"
          placeholder="Search"
          className={
            classNames('search-input', inputClassName)
          }
          value={value}
          onChange={onChange}
        />
        <MaterialIcon
          icon="search"
          className="search-input-icon"
        />
      </div>
    );
  }
}
