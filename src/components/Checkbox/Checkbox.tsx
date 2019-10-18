/** @prettier */
import * as React from 'react';

import './style.scss';

interface CheckboxProps {
  id?: string;
  name?: string;
  label?: string;
  value?: boolean;
}

export class Checkbox extends React.Component<CheckboxProps> {
  static defaultProps = {
    id: '',
    name: '',
    label: '',
    value: false,
  };

  render() {
    const { id, name, label } = this.props;

    return (
      <div className="ui-checkbox">
        <input
          type="checkbox"
          id={id}
          name={name}
        />
        {
          label && (
            <label
              htmlFor={id}
              className="ui-checkbox-label"
            >
              {label}
            </label>
          )
        }
      </div>
    );
  }
}
