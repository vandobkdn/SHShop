import { useAppContext } from '../../context';
import { View, Text, Icons, Clickable } from '../../primitives';
import { Products } from '../Products';

import './detail.scss';

export const Detail = () => {
  const {
    state: { product, cartItems },
    addToCart,
  } = useAppContext();

  if (!product) {
    return null;
  }

  const { id, name, image, price, description } = product;

  console.log('cartItems', cartItems);
  console.log(
    'ProductId',
    id,
    cartItems.filter((item) => item.id === id).length > 0
  );

  return (
    <View attrs={{ id }}>
      <div className="title">PRODUCT DETAIL</div>
      <div className="detail">
        <div className="image">
          <img src={`${image}`} alt={`${name}`} />
        </div>
        <div className="content">
          <Text tag="h3" className="name">
            {name}
          </Text>
          <div className="price">${price}</div>
          <View className="buttons">
            <button>Check Out</button>
            <Clickable
              tag="button"
              className="addCart"
              isDisabled={cartItems.filter((item) => item.id === id).length > 0}
              onClick={() => addToCart({ ...product, quantity: 1 })}
            >
              Add To Cart
              <span>
                <Icons.Cart />
              </span>
            </Clickable>
          </View>
          <div className="description">{description}</div>
        </div>
      </div>

      <Text tag="h2" className="title">
        Similar product
      </Text>
      <Products />
    </View>
  );
};
