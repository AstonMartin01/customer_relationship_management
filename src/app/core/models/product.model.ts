export interface Product {  
  name: string;
  description: string;
  price: number;
  priceWithVAT: number;
  priceByPartner: number;
  rating: number;
  type: string;
  quantity: number;
  deliveredQuantity: number;
  returnedQuantity: number;
  repairedQuantity: number;
  discountedQuantity: number;
  soldQuantity: number;
}