import { createContext } from 'react';
import { useProduct } from '../hooks/useProduct';
import {
  ProductCardProps,
  ProductContextProps,
} from '../interfaces/interfaces';
import styles from '../styles/styles.module.css';

// - Para compartir informacion desde un componente padre a sus hijos sin usar las props puedo usar el context API
// - Para definir el tipado de los datos que pasara el Provider se debe usar "as" en la creacion del contexto
export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({ product, children }: ProductCardProps) => {
  const { counter, increaseBy } = useProduct();

  return (
    <Provider value={{ counter, increaseBy, product }}>
      <div className={styles.productCard}>
        {children}
        {/* <ProductImage img={product.img} />
      <ProductTitle title={product.title} />
      <ProductButtons counter={counter} increaseBy={increaseBy} /> */}
      </div>
    </Provider>
  );
};
