/** @prettier */
import * as React from 'react';

import { Navbar } from '../../';

interface IndexLayoutProps {
  children: React.ReactNode;
}

export class IndexLayout extends React.Component<IndexLayoutProps> {
  render() {
    const { children } = this.props;
    return (
      <>
        <Navbar />
        <main>
          {children}
        </main>
      </>
    );
  }
}
