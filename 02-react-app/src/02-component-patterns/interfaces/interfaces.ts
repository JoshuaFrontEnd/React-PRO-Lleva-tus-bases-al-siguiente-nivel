import { ReactElement } from 'react';

// Definiendo las propiedades del objeto ProductCardProps
export interface ProductCardProps {
  product: Product;
  children?: ReactElement | ReactElement[];
}

// Creando el tipo Product que es un objeto, y definiendo el tipado de las propiedades de ese objeto
export interface Product {
  id: string;
  title: string;
  img?: string;
}

// Definiendo el tipado de las Props del Provider de ProductContext
export interface ProductContextProps {
  counter: number;
  increaseBy: (value: number) => void;
  product: Product;
}

export interface ProductCardHOCProps {
  ({ children, product }: ProductCardProps): JSX.Element;
  Title: ({ title }: { title?: string }) => JSX.Element;
  Image: ({ img }: { img?: string }) => JSX.Element;
  Buttons: () => JSX.Element;
}
