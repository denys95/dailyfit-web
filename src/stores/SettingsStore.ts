import { action, computed, observable, runInAction } from 'mobx';

import { User } from '../models';
import { Gender, OperationState } from '../enums';
import { apiService } from '../services';

export class SettingsStore {
  @observable user: User;
  @observable state: OperationState = OperationState.None;

  constructor() {
    this.user = {
      firstName: 'Jacqueline',
      lastName: 'Reid',
      email: 'jacqueline@company.co',
      avatar: 'http://flatfull.com/themes/basik/assets/img/a9.jpg',
      birthday: '28.05.1995',
      gender: Gender.MALE,
      city: 'Paris',
    };
  }

  @action
  login = async (authData: any) => {
    this.state = OperationState.Pending;
    try {
      const response = await apiService.login(authData);
      if (!response.error) {
        runInAction(() => {
          this.state = OperationState.Success;
        });
      } else {
        this.state = OperationState.Error;
      }
    } catch (event) {
      this.state = OperationState.Error;
    }
  };

  @computed get userName() {
    const { firstName = '', lastName = '' } = this.user;
    return `${firstName} ${lastName}`;
  }
}
