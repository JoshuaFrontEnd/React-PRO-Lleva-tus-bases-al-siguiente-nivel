import { Props as ProductCardProps } from '../components/ProductCard';
import { Props as ProductTitleProps } from '../components/ProductTitle';
import { Props as ProductImageProps } from '../components/ProductImage';
import { Props as ProductButtonsProps } from '../components/ProductButtons';

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
  Title: (Props: ProductTitleProps) => JSX.Element;
  Image: (Props: ProductImageProps) => JSX.Element;
  Buttons: (Props: ProductButtonsProps) => JSX.Element;
}

export interface onChangeArgs {
  product: Product;
  count: number;
}

// Agrego una nueva propiedad a la interfaz Product sin modificar la interfaz original
export interface ProductInCard extends Product {
  count: number;
}
