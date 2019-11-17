import { History } from 'history';

import {
  RouterStore,
  SettingsStore,
  ExercisesStore,
  WorkoutsStore,
} from './index';

import { Stores } from '../enums';

export const createStore = (history: History) => {
  const routerStore = new RouterStore(history);
  const settingsStore = new SettingsStore();
  const exercisesStore = new ExercisesStore();
  const workoutsStore = new WorkoutsStore();

  return {
    [Stores.ROUTER]: routerStore,
    [Stores.SETTINGS]: settingsStore,
    [Stores.EXERCISES]: exercisesStore,
    [Stores.WORKOUTS]: workoutsStore,
  };
};
