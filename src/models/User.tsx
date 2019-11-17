import { Gender } from '../enums';

export interface User {
  id?: number;
  email: string;
  name?: string;
  birthday?: string;
  avatar?: string;
  gender?: Gender;
  // country language code
  language?: string;
}
