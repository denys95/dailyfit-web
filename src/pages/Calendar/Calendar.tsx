import * as React from 'react';

import { MainLayout } from '../../components';

import './style.scss';

export class Calendar extends React.Component {
  render() {
    return (
      <MainLayout>
        <header className="calendar-header">
          <h2 className="calendar-header-title">
            Calendar
          </h2>
        </header>

        <div className="calendar">
          <div className="calendar-container">
            <table className="calendar-table">
              <thead className="calendar-table-header">
                <tr className="calendar-table-row">
                  <th className="calendar-table-header-cell">Mon</th>
                  <th className="calendar-table-header-cell">Tue</th>
                  <th className="calendar-table-header-cell">Wed</th>
                  <th className="calendar-table-header-cell">Thu</th>
                  <th className="calendar-table-header-cell">Fri</th>
                  <th className="calendar-table-header-cell">Sat</th>
                  <th className="calendar-table-header-cell">Sun</th>
                </tr>
              </thead>
              <tbody className="calendar-table-body">
                <tr className="calendar-table-row">
                  <td className="calendar-table-cell">
                    <div>28</div>
                  </td>
                  <td className="calendar-table-cell">
                    <div>29</div>
                  </td>
                  <td className="calendar-table-cell">
                    <div>30</div>
                  </td>
                  <td className="calendar-table-cell">
                    <div>31</div>
                  </td>
                  <td className="calendar-table-cell">
                    <div>1</div>
                  </td>
                  <td className="calendar-table-cell">
                    <div>2</div>
                  </td>
                  <td className="calendar-table-cell">
                    <div>3</div>
                  </td>
                </tr>
                <tr className="calendar-table-row">
                  <td className="calendar-table-cell">
                    <div>4</div>
                  </td>
                  <td className="calendar-table-cell">
                    <div>5</div>
                  </td>
                  <td className="calendar-table-cell">
                    <div>6</div>
                  </td>
                  <td className="calendar-table-cell">7</td>
                  <td className="calendar-table-cell">8</td>
                  <td className="calendar-table-cell">9</td>
                  <td className="calendar-table-cell">10</td>
                </tr>
                <tr className="calendar-table-row">
                  <td className="calendar-table-cell">
                    <div>11</div>
                  </td>
                  <td className="calendar-table-cell">12</td>
                  <td className="calendar-table-cell">13</td>
                  <td className="calendar-table-cell">14</td>
                  <td className="calendar-table-cell">15</td>
                  <td className="calendar-table-cell">16</td>
                  <td className="calendar-table-cell">17</td>
                </tr>
                <tr className="calendar-table-row">
                  <td className="calendar-table-cell">18</td>
                  <td className="calendar-table-cell">19</td>
                  <td className="calendar-table-cell">20</td>
                  <td className="calendar-table-cell">21</td>
                  <td className="calendar-table-cell">22</td>
                  <td className="calendar-table-cell">23</td>
                  <td className="calendar-table-cell">24</td>
                </tr>
                <tr className="calendar-table-row">
                  <td className="calendar-table-cell">25</td>
                  <td className="calendar-table-cell">26</td>
                  <td className="calendar-table-cell">27</td>
                  <td className="calendar-table-cell">28</td>
                  <td className="calendar-table-cell">29</td>
                  <td className="calendar-table-cell">30</td>
                  <td className="calendar-table-cell">1</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </MainLayout>
    );
  }
}
