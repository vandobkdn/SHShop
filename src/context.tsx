import React, {
  createContext,
  useCallback,
  useReducer,
  useContext,
} from 'react';

import PRODUCTS from './assets/products';

type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
};

type CartItem = Product & {
  quantity: number;
};

type Screen = 'products' | 'detail';

type State = {
  isOpenCart: boolean;
  screen: Screen;
  products: Product[];
  cartItems: CartItem[];
  product: Product | undefined;
};

type Action =
  | { type: 'SET_SCREEN'; payload: Screen }
  | { type: 'SET_PRODUCT'; payload: Product | undefined }
  | { type: 'IS_OPEN_CART'; payload: boolean }
  | { type: 'ADD_TO_CART'; payload: CartItem }
  | { type: 'REMOVE_FROM_CART'; payload: string };

const Context = createContext<
  | {
      state: State;
      setScreen: (page: Screen) => void;
      setProduct: (product: Product) => void;
      openCartList: (isOpen: boolean) => void;
      addToCart: (item: CartItem) => void;
      removeFromCart: (itemId: string) => void;
    }
  | undefined
>(undefined);

const reducer = (state: State, { type, payload }: Action): State => {
  switch (type) {
    case 'SET_SCREEN': {
      return {
        ...state,
        screen: payload,
      };
    }

    case 'IS_OPEN_CART': {
      return {
        ...state,
        isOpenCart: payload,
      };
    }

    case 'SET_PRODUCT': {
      return {
        ...state,
        product: payload,
      };
    }

    case 'ADD_TO_CART': {
      return {
        ...state,
        cartItems: [...state.cartItems].concat(payload),
      };
    }

    case 'REMOVE_FROM_CART': {
      return {
        ...state,
        cartItems: [...state.cartItems].filter((item) => item.id !== payload),
      };
    }

    default:
      return state;
  }
};

const ContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, {
    products: PRODUCTS as unknown as Product[],
    cartItems: [],
    product: undefined,
    isOpenCart: false,
    screen: 'products',
  });

  const setScreen = useCallback((screen: Screen) => {
    dispatch({ type: 'SET_SCREEN', payload: screen });
  }, []);

  const setProduct = useCallback((product: Product | undefined) => {
    dispatch({ type: 'SET_PRODUCT', payload: product });
  }, []);

  const addToCart = useCallback((item: CartItem) => {
    dispatch({ type: 'ADD_TO_CART', payload: item });
  }, []);

  const removeFromCart = useCallback((itemId: string) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: itemId });
  }, []);

  const openCartList = useCallback((isOpen: boolean) => {
    dispatch({ type: 'IS_OPEN_CART', payload: isOpen });
  }, []);

  return (
    <Context.Provider
      value={{
        state,
        setScreen,
        setProduct,
        addToCart,
        removeFromCart,
        openCartList,
      }}
    >
      {children}
    </Context.Provider>
  );
};

const useAppContext = () => {
  const context = useContext(Context);
  if (context === undefined) {
    throw new Error('useGlobalContext must be used within a GlobalProvider');
  }
  return context;
};

export { ContextProvider, useAppContext };
