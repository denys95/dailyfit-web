import * as React from 'react';

import {
  Button,
  MainLayout,
  Select,
  SelectItem,
  SearchInput,
} from '../../components';

import './style.scss';

export class Exercises extends React.Component {

  categories: SelectItem[] = [{
    label: 'Chest',
    value: 'chest',
  }, {
    label: 'Legs',
    value: 'legs',
  }, {
    label: 'Arms',
    value: 'arms',
  }, {
    label: 'Full body',
    value: 'full_body',
  }];

  types: SelectItem[] = [{
    label: 'Soft',
    value: 'soft',
  }, {
    label: 'Medium',
    value: 'medium',
  }, {
    label: 'Hard',
    value: 'hard',
  }];

  render() {
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
            <SearchInput />
          </div>

          <div className="exercises-list-filter-item">
            <Select
              items={this.categories}
              placeholder="Select category"
            />
          </div>

          <div className="exercises-list-filter-item">
            <Select
              items={this.types}
              placeholder="Select type"
            />
          </div>
        </div>

        <ul className="exercises-list">
          <li className="exercises-item">
            <article className="exercises-item-article">
              <h3 className="exercises-item-title">
                The Neck Lat Pull-Down
              </h3>

              <p className="exercises-item-description">
                With supporting text below as a natural lead-in to additional
                content.
              </p>

              <div className="exercises-item-footer">
                <Button>
                  Read more
                </Button>
              </div>
            </article>
          </li>

          <li className="exercises-item">
            <article className="exercises-item-article">
              <h3 className="exercises-item-title">
                The Neck Lat Pull-Down
              </h3>

              <p className="exercises-item-description">
                With supporting text below as a natural lead-in to additional
                content.
              </p>

              <div className="exercises-item-footer">
                <Button>
                  Read more
                </Button>
              </div>
            </article>
          </li>

          <li className="exercises-item">
            <article className="exercises-item-article">
              <h3 className="exercises-item-title">
                The Neck Lat Pull-Down
              </h3>

              <p className="exercises-item-description">
                With supporting text below as a natural lead-in to additional
                content.
              </p>

              <div className="exercises-item-footer">
                <Button>
                  Read more
                </Button>
              </div>
            </article>
          </li>
        </ul>
      </MainLayout>
    );
  }
}
