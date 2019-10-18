/** @prettier */
import * as React from 'react';
import { inject, observer } from 'mobx-react';

import { Stores } from '../../enums';

import { RouterStore } from '../../stores';

import { MaterialIcon } from '../../components';

import './style.scss';

export interface SidebarItem {
  label: string;
  link: string;
  icon?: string;
}

interface SidebarProps {
  [Stores.ROUTER]?: RouterStore,
  items?: SidebarItem[];
  className?: string;
}

@inject(Stores.ROUTER)
@observer
export class Sidebar extends React.Component<SidebarProps> {
  static defaultProps = {
    className: '',
    items: [{
      label: 'Dashboard',
      link: '/dashboard',
      icon: 'timeline',
    }, {
      label: 'Exercises',
      link: '/exercises',
      icon: 'view-list',
    }, {
      label: 'Settings',
      link: '/settings',
      icon: 'settings-applications',
    }],
  };

  goToLink = (link: string) => {
    const { push } = this.props[Stores.ROUTER];
    push(link);
  };

  render() {
    const { items } = this.props;

    return (
      <aside className="sidebar">
        {/*<div className="sidebar-logo">*/}
        {/*  Daily<span style={{ color: '#2bd195' }}>Fit</span>*/}
        {/*</div>*/}
        <div className="sidebar-content">
          <nav className="sidebar-nav">
            <ul className="sidebar-nav-list">
              {
                items.map(item => (
                  <li
                    key={item.label}
                    className="sidebar-nav-item"
                  >
                    <a
                      className="sidebar-nav-link"
                      onClick={() => this.goToLink(item.link)}
                    >
                      {
                        item.icon && (
                          <MaterialIcon
                            icon={item.icon}
                            className="sidebar-nav-icon"
                          />
                        )
                      }
                      {item.label}
                    </a>
                  </li>
                ))
              }
            </ul>
          </nav>
        </div>
      </aside>
    );
  }
}
