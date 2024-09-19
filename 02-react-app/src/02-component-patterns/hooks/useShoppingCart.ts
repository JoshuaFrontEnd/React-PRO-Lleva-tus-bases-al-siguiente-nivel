import { useState } from 'react';
import { Product, ProductInCard } from '../interfaces/interfaces';

type cart = { [key: string]: ProductInCard };

export const useShoppingCart = () => {
  // Definiendo el tipado de los datos del estado que es un objeto que recibe una llave "key" de tipo "string" y un valor de tipo "ProductInCard"
  // const [shoppingCart, setShoppingCart] = useState<{
  //   [key: string]: ProductInCard;
  // }>({});

  // Otra forma de declarar el tipado de los datos en un useState es usando un "type"
  const [shoppingCart, setShoppingCart] = useState<cart>({});

  const onProductCountChange = ({
    count,
    product,
  }: {
    count: number;
    product: Product;
  }) => {
    setShoppingCart(oldShoppingCart => {
      if (count === 0) {
        const { [product.id]: toDelete, ...rest } = oldShoppingCart;
        return rest;
      }
      return {
        ...oldShoppingCart,
        [product.id]: { ...product, count },
      };
    });
  };

  return {
    onProductCountChange,
    shoppingCart,
  };
};
