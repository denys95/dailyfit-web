import { action, computed, observable, runInAction } from 'mobx';

import { User } from '../models';
import { Gender, OperationState } from '../enums';
import { apiService } from '../services';

export class SettingsStore {
  @observable user: User;
  @observable state: OperationState = OperationState.None;

  constructor() {
    this.user = {
      firstName: '',
      lastName: '',
      email: '',
      avatar: '',
      birthday: '',
      gender: Gender.MALE,
      city: '',
    };
  }

  @action
  getUser = async () => {
    this.state = OperationState.Pending;
    try {
      const response = await apiService.getUser();
      if (!response.error) {
        runInAction(() => {
          this.state = OperationState.Success;
          this.user = response.data;
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
