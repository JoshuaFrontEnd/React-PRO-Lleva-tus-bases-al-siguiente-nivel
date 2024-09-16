import { CSSProperties, useContext } from 'react';
import { ProductContext } from './ProductCard';
import styles from '../styles/styles.module.css';

export interface Props {
  className?: string;
  title?: string;
  style?: CSSProperties;
}

export const ProductTitle = ({ title, className, style }: Props) => {
  const { product } = useContext(ProductContext);

  return (
    <span className={`${styles.productDescription} ${className}`} style={style}>
      {/* Si no viene el title en los argumentos del componente ProductTitle, entonces el title será el que viene del atributo "title" de "product" */}
      {title ? title : product.title}
    </span>
  );
};
