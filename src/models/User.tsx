import { Gender } from '../enums';

export interface User {
  firstName?: string;
  lastName?: string;
  email: string;
  avatar?: string;
  birthday?: string;
  gender?: Gender;
  city?: string;
  facebook?: string;
  twitter?: string;
  instagram?: string;
}
