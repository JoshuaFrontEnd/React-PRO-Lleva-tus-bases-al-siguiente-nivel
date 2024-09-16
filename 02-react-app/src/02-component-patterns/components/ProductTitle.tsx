import { useContext } from 'react';
import { ProductContext } from './ProductCard';
import styles from '../styles/styles.module.css';

export const ProductTitle = ({ title }: { title?: string }) => {
  const { product } = useContext(ProductContext);

  return (
    <span className={styles.productDescription}>
      {/* Si no viene el title en los argumentos del componente ProductTitle, entonces el title será el que viene del atributo "title" de "product" */}
      {title ? title : product.title}
    </span>
  );
};
