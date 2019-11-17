import * as React from 'react';
import { inject, observer } from 'mobx-react';

import { Stores } from '../../enums';

import {
  Button,
  MainLayout,
  Select,
  SearchInput,
  Pagination,
} from '../../components';

import './style.scss';

@inject(Stores.EXERCISES, Stores.ROUTER)
@observer
export class Exercises extends React.Component {

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
      selectedCategory,
      selectedType,
      categories,
      types,
      searchQuery,
      exercises,
    } = this.props[Stores.EXERCISES];

    return (
      <MainLayout>
        <header className="exercises-header">
          <h2 className="exercises-header-title">
            Exercises
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

          <div className="exercises-list-filter-item">
            <Select
              value={selectedCategory}
              items={categories}
              placeholder="Select category"
              onChange={this.changeCategory}
            />
          </div>

          <div className="exercises-list-filter-item">
            <Select
              value={selectedType}
              items={types}
              placeholder="Select type"
              onChange={this.changeType}
            />
          </div>
        </div>

        <div className="exercises-list">
          <table className="ui-table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Category</th>
                <th>Level</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                exercises.map(item => (
                  <tr key={item.id}>
                    <td>
                      <a href="#">{item.title}</a>
                    </td>
                    <td>{item.category}</td>
                    <td>{item.level}</td>
                    <td style={{ textAlign: 'center' }}>
                      <Button color="primary">
                        View
                      </Button>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
        <Pagination />
      </MainLayout>
    );
  }
}
