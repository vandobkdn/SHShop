import React, { useRef, useEffect } from 'react';

import { View, ViewRef, Icons } from '../../primitives';
import { useAppContext } from '../../context';

export const Header = () => {
  const cartIconRef = useRef<HTMLDivElement>(null);
  const {
    state: { cartItems, isOpenCart },
    openCartList,
  } = useAppContext();

  useEffect(() => {
    if (!cartIconRef?.current) return;

    const handleClick = () => {
      openCartList(!isOpenCart);
    };

    const cartIcon = cartIconRef.current;
    cartIcon.addEventListener('click', handleClick);
    return () => {
      cartIcon.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <header>
      <View className="title">
        <a href="/">DHShop</a>
      </View>
      <View className="icon-cart">
        <ViewRef ref={cartIconRef}>
          <Icons.Cart />
        </ViewRef>
        <View tag="span">{cartItems.length}</View>
      </View>
    </header>
  );
};
