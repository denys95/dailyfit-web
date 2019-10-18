import * as React from 'react';

import { IndexLayout } from '../../components';

import './styles.scss';

export class IndexPage extends React.Component<{}, {}> {
  render() {
    return (
      <IndexLayout>
        <div className="main-hero">
          <h1>Daily<span style={{ color: '#2bd195' }}>Fit</span></h1>
        </div>
      </IndexLayout>
    );
  }
}
