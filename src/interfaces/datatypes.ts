export interface Client {
  id: number;
  name: string;
  email: string;
  address: string;
}

export interface Product {
  id: number;
  reference: string;
  type: string;
  stock: number;
  price: number;
}
