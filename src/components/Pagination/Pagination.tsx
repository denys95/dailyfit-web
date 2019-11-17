import * as React from 'react';

import './style.scss';

export class Pagination extends React.Component {
  render() {
    return (
      <nav className="ui-pagination">
        <ul className="ui-pagination-list">
        <li className="ui-pagination-item">
          <a href="#" className="ui-pagination-link">Prev</a>
        </li>
        <li className="ui-pagination-item">
          <a href="#" className="ui-pagination-link">1</a>
        </li>
        <li className="ui-pagination-item">
          <a href="#" className="ui-pagination-link">2</a>
        </li>
        <li className="ui-pagination-item">
          <a href="#" className="ui-pagination-link active">3</a>
        </li>
        <li className="ui-pagination-item">
          <a href="#" className="ui-pagination-link">4</a>
        </li>
        <li className="ui-pagination-item">
          <span className="ui-pagination-dots">...</span>
        </li>
        <li className="ui-pagination-item">
          <a href="#" className="ui-pagination-link">20</a>
        </li>
        <li className="ui-pagination-item">
          <a href="#" className="ui-pagination-link">Next</a>
        </li>
        </ul>
      </nav>
    );
  }
}
