import { observable } from 'mobx';

import {
  SelectOption,
} from '../components';

export class ExercisesStore {
  @observable searchQuery: string;
  @observable categories: SelectOption[] = [];
  @observable types: SelectOption[] = [];
  @observable selectedCategory: string;
  @observable selectedType: string;
  @observable exercises: any[];

  constructor() {
    this.categories = [
      { label: 'Chest', value: 'chest' },
      { label: 'Legs', value: 'legs' },
      { label: 'Arms', value: 'arms' },
      { label: 'Full body', value: 'full_body' },
    ];
    this.types = [
      { label: 'Soft', value: 'soft' },
      { label: 'Medium', value: 'medium' },
      { label: 'Hard', value: 'hard' },
    ];
    this.exercises = [{
      id: '1',
      title: 'The Neck Lat Pull-Down',
      category: 'Neck',
      level: 'Hard',
    }, {
      id: '2',
      title: 'Squats',
      category: 'Chest',
      level: 'Soft',
    }, {
      id: '3',
      title: 'Burpees',
      category: 'Athletics',
      level: 'Medium',
    }, {
      id: '4',
      title: 'Abs Training',
      category: 'Cario',
      level: 'Soft',
    }, {
      id: '5',
      title: 'Goblet Squat',
      category: 'Chest',
      level: 'Medium',
    }, {
      id: '6',
      title: 'Split Squat',
      category: 'Chest',
      level: 'Medium',
    }];
  }
}
