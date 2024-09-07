import { useAppContext } from '../../context';
import { View, Text, Clickable } from '../../primitives';

export const CartList = () => {
  const {
    state: { isOpenCart, cartItems = [] },
    openCartList,
  } = useAppContext();

  if (!isOpenCart) return null;

  return (
    <View className="activeTabCart cartTab">
      <Text tag="h1">Shopping Cart</Text>
      <View className="listCart">
        {cartItems.map(({ id, price, quantity, name, image }) => (
          <View className="item" key={id}>
            <View className="image">
              <img src={`${image}`} />
            </View>
            <Text className="name">{name}</Text>
            <Text className="totalPrice">${price * quantity}</Text>
            <View className="quantity">
              <span className="minus" data-id="${info.id}">
                -
              </span>
              <span>{quantity}</span>
              <span className="plus" data-id="${info.id}">
                +
              </span>
            </View>
          </View>
        ))}
      </View>
      <View className="btn">
        <Clickable
          tag="button"
          className="close"
          onClick={() => openCartList(false)}
        >
          CLOSE
        </Clickable>
        <button className="checkOut">Check Out</button>
      </View>
    </View>
  );
};
