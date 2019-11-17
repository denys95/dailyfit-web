import { action, computed, observable, runInAction } from 'mobx';

import { User } from '../models';
import { Gender, OperationState } from '../enums';
import { apiService } from '../services';
import { SelectOption } from '../components';

export class SettingsStore {
  @observable user: User;
  @observable countries: SelectOption[];
  @observable state: OperationState = OperationState.None;

  constructor() {
    this.user = {
      name: '',
      email: '',
      avatar: '',
      birthday: '',
      gender: Gender.MALE,
      language: '',
    };

    this.countries = [];
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

  @action
  getCountries = async () => {
    this.state = OperationState.Pending;
    try {
      const response = await apiService.getCountries();
      if (!response.error) {
        runInAction(() => {
          this.state = OperationState.Success;
          this.countries = response.data.map(item => ({
            label: item.name,
            value: item.code,
          }));
        });
      } else {
        this.state = OperationState.Error;
      }
    } catch (event) {
      this.state = OperationState.Error;
    }
  };
}
