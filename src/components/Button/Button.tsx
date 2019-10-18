import * as React from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';

import './style.scss';

export interface ButtonProps {
  label?: string;
  color?: 'primary' | 'secondary' | 'info' | 'warning' | 'danger';
  block?: boolean;
  active?: boolean;
  outline?: boolean;
  disabled?: boolean;
  transparent?: boolean;
  fullWidth?: boolean;
  innerRef?: string;
  size?: 'mini' | 'small' | 'medium' | 'large';
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  link?: string;
  prefetch?: boolean;
  close?: boolean;
  uppercase?: boolean;
  children?: React.ReactNode;
  // TODO: remove 'any' type
  onClick?: (event: any) => void;
}

export class Button extends React.Component<ButtonProps> {
  static defaultProps = {
    label: '',
    color: 'primary',
    block: false,
    active: false,
    outline: false,
    disabled: false,
    innerRef: null,
    size: '',
    transparent: false,
    fullWidth: false,
    href: null,
    type: 'button',
    className: '',
    link: '',
    prefetch: false,
    close: false,
    uppercase: false,
    onClick: null,
  };

  render() {
    const {
      label,
      color,
      block,
      active,
      outline,
      disabled,
      innerRef,
      type,
      size,
      uppercase,
      transparent,
      fullWidth,
      href,
      className,
      link,
      prefetch,
      onClick,
      children,
      close,
      ...props
    } = this.props;

    const Tag = (href || link) ? 'a' : 'button';

    const tag = (
      <Tag
        {...props}
        className={
          classNames(
            className,
            'btn',
            `btn${outline ? '-outline' : ''}-${color}`,
            size && `btn-${size}`,
            block && 'btn-block',
            disabled && 'disabled',
            active && 'active',
            uppercase && 'upper',
            transparent && 'btn-transparent',
            fullWidth && 'full-width',
          )
        }
        type={type}
        href={href}
        ref={innerRef}
        disabled={disabled}
        onClick={onClick}
      >
        {children || label}
      </Tag>
    );

    return link ? (
      <Link rel="preconnect" prefetch to={link}>{tag}</Link>
    ) : tag;
  }
}
