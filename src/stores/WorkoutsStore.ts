import { observable } from 'mobx';

import { Workout } from '../models';

export class WorkoutsStore {
  @observable searchQuery: string;
  @observable workouts: Workout[];

  constructor() {
    this.workouts = [{
      id: 1,
      user_id: 1,
      date: '2019-01-02',
      template_id: 1,
      total_volume: 9500,
      total_time: 2100000,
    }, {
      id: 2,
      user_id: 1,
      date: '2019-02-10',
      template_id: 2,
      total_volume: 2500,
      total_time: 1600000,
    }, {
      id: 3,
      user_id: 1,
      date: '2019-04-16',
      template_id: 3,
      total_volume: 9500,
      total_time: 500000,
    }, {
      id: 4,
      user_id: 1,
      date: '2019-12-29',
      template_id: 1,
      total_volume: 9500,
      total_time: 240000,
    }];
  }
}
