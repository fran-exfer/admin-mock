export interface Client {
  id: number;
  name: string;
  email: string;
  address: string;
}

export interface Product {
  id: number;
  name: string;
  reference: string;
  type: string;
  stock: number;
  price: number;
}
