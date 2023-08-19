export type GetProductRequest = {
  id: number;
};

export type ProductResponse = {
  id: number;
  name: string;
  description: string;
  picture: string;
  type: Type;
  categories: Array<Category>;
  implementationEffortText: any;
  investmentEffort: string;
  trl: Trl;
  video: string;
  user: User;
  company: Company;
  businessModels: Array<BusinessModel>;
};

export type Type = {
  id: number;
  name: string;
};

export type Category = {
  id: number;
  name: string;
};

export type Trl = {
  id: number;
  name: string;
};

export type User = {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  sex: number;
  profilePicture: string;
  position: string;
};

export type Company = {
  name: string;
  logo: string;
  address: Address;
};

export type Address = {
  country: Country;
  city: City;
  street: string;
  house: string;
  zipCode: string;
  longitude: string;
  latitude: string;
};

export type Country = {
  name: string;
};

export type City = {
  name: string;
};

export type BusinessModel = {
  id: number;
  name: string;
};
