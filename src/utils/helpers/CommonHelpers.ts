import { SelectOption } from '../../components';

export class CommonHelpers {
  static mapSelectOptions(
    options: any[],
    labelField: string,
    valueField: string,
  ): SelectOption[] {
    return options.map(option => ({
      label: option[labelField],
      value: option[valueField],
    }));
  }
}
