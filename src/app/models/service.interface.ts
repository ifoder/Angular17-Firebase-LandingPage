export interface Service {
  id?: any;
  categoryId?: any;
  title?: string;
  price?: number;
  description?: string;
  active?: boolean;
}

export interface CategoryServices {
  id?: any;
  title?: string;
  list?: Service[];
  active?: boolean;
}
