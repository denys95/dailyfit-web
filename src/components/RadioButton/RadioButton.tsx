import * as React from 'react';

import './style.scss';

interface RadioButtonProps {
  id?: string;
  name?: string;
  label?: string;
  value?: string;
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export class RadioButton extends React.Component<RadioButtonProps> {
  static defaultProps = {
    id: '',
    name: '',
    label: '',
    value: '',
    checked: false,
    onChange: null,
  };

  render () {
    const {
      id,
      name,
      label,
      value,
      onChange,
      checked,
    } = this.props;

    return (
      <div className="ui-radio">
        <input
          type="radio"
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          checked={checked}
        />
        {
          label && (
            <label
              htmlFor={id}
              className="ui-radio-label"
            >
              {label}
            </label>
          )
        }
      </div>
    );
  }
}
