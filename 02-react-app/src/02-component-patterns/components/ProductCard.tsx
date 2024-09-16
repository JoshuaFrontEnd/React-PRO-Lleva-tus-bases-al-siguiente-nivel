import { createContext, CSSProperties, ReactElement } from 'react';
import { useProduct } from '../hooks/useProduct';
import { Product, ProductContextProps } from '../interfaces/interfaces';
import styles from '../styles/styles.module.css';

// - Para compartir informacion desde un componente padre a sus hijos sin usar las props puedo usar el context API
// - Para definir el tipado de los datos que pasara el Provider se debe usar "as" en la creacion del contexto
export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

// Definiendo las propiedades del objeto Props
export interface Props {
  product: Product;
  children?: ReactElement | ReactElement[];
  className?: string;
  style?: CSSProperties;
}

export const ProductCard = ({ product, children, className, style }: Props) => {
  const { counter, increaseBy } = useProduct();

  return (
    <Provider value={{ counter, increaseBy, product }}>
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children}
        {/* <ProductImage img={product.img} />
      <ProductTitle title={product.title} />
      <ProductButtons counter={counter} increaseBy={increaseBy} /> */}
      </div>
    </Provider>
  );
};
