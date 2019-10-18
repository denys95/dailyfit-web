import * as React from 'react';

import { MainLayout } from '../../components';

import './style.scss';

export class Dashboard extends React.Component {
  render() {
    return (
      <MainLayout>
        <header className="dashboard-header">
          <h2 className="dashboard-header-title">
            Dashboard
          </h2>
        </header>
      </MainLayout>
    );
  }
}
