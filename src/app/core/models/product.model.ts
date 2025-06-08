export interface Product {  
  name: string;
  description: string;
  price: number;
  priceWithVAT: number;
  priceByPartner: number;
  rating: number;
  type: string;
  stock: number;
  delivered: number;
  returned: number;
  repaired: number;
  discounted: number;
  sold: number;
}