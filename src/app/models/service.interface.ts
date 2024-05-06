export interface Service {
  id?: any;
  categoryId?: any;
  title?: string;
  price?: number;
  description?: string;
}

export interface CategoryServices {
  id?: any;
  title?: string;
  list?: Service[];
}
