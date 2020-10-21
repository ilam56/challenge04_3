
import { Business } from './business';

export interface City {
  id: string;
  cityName: string;
  businesses: Array<Business>;
}