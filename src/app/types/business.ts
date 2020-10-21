import { Review } from './review';

export interface Business {
  id: string;
  city: string;
  businessName: string;
  reviews: Array<Review>;
}