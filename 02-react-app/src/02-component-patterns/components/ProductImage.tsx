import { CSSProperties, useContext } from 'react';
import { ProductContext } from './ProductCard';
import styles from '../styles/styles.module.css';
import noImage from '../assets/no-image.jpg';

export interface Props {
  img?: string;
  className?: string;
  style?: CSSProperties;
}

export const ProductImage = ({ img = '', className, style }: Props) => {
  const { product } = useContext(ProductContext);

  let imgToShow: string;

  if (img) {
    // Si viene la imagen en los argumentos del componente ProductImage, entonces esa imagen va a mostrar
    imgToShow = img;
  } else if (product.img) {
    // Si no viene la imagen en los argumentos del componente ProductImage, entonces busca si hay una imagen el atributo "img" de "product", si la encuentra, esa es la imagen que mostrara
    imgToShow = product.img;
  } else {
    // Pero si no encuentra ni en los argumentos del componente ni en los atributos de "product", entonces va a mostrar la imagen por defecto seteada en "noImage"
    imgToShow = noImage;
  }

  return (
    <img
      className={`${styles.productImg} ${className}`}
      style={style}
      src={imgToShow}
      alt="Coffee Mug"
    />
  );
};
