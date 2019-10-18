/** @prettier */
import { History } from 'history';

import { RouterStore } from "./RouterStore";
import { SettingsStore } from './SettingsStore';

import { Stores } from '../enums';

export const createStore = (history: History) => {
  const routerStore = new RouterStore(history);
  const settingsStore = new SettingsStore();

  return {
    [Stores.ROUTER]: routerStore,
    [Stores.SETTINGS]: settingsStore,
  };
};
