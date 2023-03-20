export interface IAddress {
  address: string;
  city: string;
}

export interface IForm<T> {
  age: number;
  age2: number;
  color: string;
  date: Array<{}>;
  isCoder: string;
  firstname: string;
  lastname: string;
  sex: string;
  useraddress: Array<T>;
}
