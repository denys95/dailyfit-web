import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { format } from 'date-fns';

import { Stores } from '../../enums';

import {
  Button,
  MainLayout,
  SearchInput,
  Pagination,
} from '../../components';

import { WorkoutsStore, RouterStore } from '../../stores';

import './style.scss';

interface Props {
  [Stores.WORKOUTS]: WorkoutsStore,
  [Stores.ROUTER]: RouterStore,
}

@inject(Stores.WORKOUTS, Stores.ROUTER)
@observer
export class Workouts extends React.Component<Props> {

  searchExercises = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log('EVENT: ', event);
  };

  changeCategory = (event: React.ChangeEvent<HTMLSelectElement>) => {
    console.log('EVENT: ', event);
  };

  changeType = (event: React.ChangeEvent<HTMLSelectElement>) => {
    console.log('EVENT: ', event);
  };

  render() {
    const {
      searchQuery,
      workouts,
    } = this.props[Stores.WORKOUTS];

    return (
      <MainLayout>
        <header className="exercises-header">
          <h2 className="exercises-header-title">
            My Workouts
          </h2>
        </header>

        <div className="exercises-list-filter">
          <div
            className="exercises-list-filter-item exercises-list-filter-search"
          >
            <SearchInput
              value={searchQuery}
              onChange={this.searchExercises}
            />
          </div>
        </div>

        <div className="exercises-list">
          <table className="ui-table">
            <thead>
              <tr>
                <th>Id</th>
                <th>Date</th>
                <th>Template</th>
                <th>Total Volume</th>
                <th>Duration</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {
                workouts.length ? (
                  workouts.map(item => (
                    <tr key={item.id}>
                      <td>
                        {item.id}
                      </td>
                      <td>
                        <a href="#">
                          {format(new Date(item.date), 'dd.MM.yyyy')}
                        </a>
                      </td>
                      <td>
                        {item.template_id}
                      </td>
                      <td>
                        {item.total_volume}
                      </td>
                      <td>
                        {format(item.total_time, 'mm:ss')}
                      </td>
                      <td style={{ textAlign: 'center' }}>
                        <span style={{ marginRight: '12px' }}>
                          <Button color="primary">
                            Edit
                          </Button>
                        </span>
                        <Button color="danger">
                          Delete
                        </Button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={5} style={{ textAlign: 'center', color: '#000' }}>
                      Empty list
                    </td>
                  </tr>
                )
              }
            </tbody>
          </table>
        </div>
        <Pagination />
      </MainLayout>
    );
  }
}
