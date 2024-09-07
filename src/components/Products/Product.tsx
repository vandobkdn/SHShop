import React from 'react';

import { useAppContext } from '../../context';
import { Clickable, View, Text } from '../../primitives';

import './products.scss';

export const Products = () => {
  const {
    state: { products = [], cartItems = [] },
    addToCart,
    setProduct,
  } = useAppContext();

  return (
    <View className="listProduct">
      {products.map((p) => (
        <View className="item" key={p.id}>
          <Clickable tag="a" onClick={() => setProduct(p)}>
            <img src={`${p.image}`} alt={`${p.name}`} />
          </Clickable>
          <Text tag="h2">${p.name}</Text>
          <View className="price">$${p.price}</View>
          <Clickable
            tag="button"
            className={`addCart`}
            attrs={{ id: `${p.id}` }}
            isDisabled={cartItems.filter(({ id }) => id === p.id).length > 0}
            onClick={() => addToCart({ ...p, quantity: 1 })}
          >
            Add To Cart
          </Clickable>
        </View>
      ))}
    </View>
  );
};
