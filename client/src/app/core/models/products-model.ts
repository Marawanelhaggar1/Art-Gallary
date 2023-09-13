export interface ProductsModel {
  id: number;
  name: string;
  description: string;
  discount: number;
  price: number;
  stock: number;
  image: string;
  status: string;
  category_id: number;
  artist_id: number;

  meta: {
    current_page: number;
    from: number;
    last_page: number;
  };
}
