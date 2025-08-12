export interface User {
  id?: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  birthDate: Date;
  address: string;
  city: string;
  country: string;
  createdAt?: Date;
}
