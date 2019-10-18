/** @prettier */
import * as React from 'react';

import { UiHelpers } from '../../../utils/helpers';

import './style.scss';

type StringOrNumberType = number | string;

interface ColumnType {
  size: StringOrNumberType;
  order: StringOrNumberType;
  offset: StringOrNumberType;
}

type ColumnSizeType = StringOrNumberType | ColumnType;

export interface ColumnProps {
  xs?: ColumnSizeType;
  sm?: ColumnSizeType;
  md?: ColumnSizeType;
  lg?: ColumnSizeType;
  xl?: ColumnSizeType;
  widths?: string[];
  isPadding?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export class Column extends React.Component<ColumnProps> {
  static defaultProps = {
    xs: null,
    sm: null,
    md: null,
    lg: null,
    xl: null,
    isPadding: true,
    widths: [
      'xs', // small devices
      'sm', // mobile devices
      'md', // tablet devices
      'lg', // desktop
      'xl', // large desktop
    ],
    className: '',
  };

  render() {
    const { isPadding, widths, children, ...props } = this.props;

    return (
      <div
        {...props}
        className={UiHelpers.getColClass(props, widths, isPadding)}
      >
        {children}
      </div>
    );
  }
}
