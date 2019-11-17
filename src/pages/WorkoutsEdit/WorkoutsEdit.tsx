import * as React from 'react';
import { inject, observer } from 'mobx-react';

import { Stores } from '../../enums';
import { RouterStore, WorkoutsStore } from '../../stores';
import { MainLayout } from '../../components';

interface Props {
  [Stores.WORKOUTS]: WorkoutsStore,
  [Stores.ROUTER]: RouterStore,
}

@inject(Stores.WORKOUTS, Stores.ROUTER)
@observer
export class WorkoutsEdit extends React.Component<Props> {

  render() {
    return (
      <MainLayout>
        <header className="exercises-header">
          <h2 className="exercises-header-title">
            My Workouts
          </h2>
        </header>    
      </MainLayout>
    );
  }
}
