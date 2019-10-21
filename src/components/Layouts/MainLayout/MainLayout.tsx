import * as React from 'react';

import { Sidebar } from '../../';

import './style.scss';

interface MainLayoutProps {
  children: React.ReactNode;
}

export class MainLayout extends React.Component<MainLayoutProps> {
  render() {
    const { children } = this.props;
    return (
      <div className="main-layout-wrapper">
        <Sidebar />
        <main className="main-content">
          {children}
        </main>
      </div>
    );
  }
}
