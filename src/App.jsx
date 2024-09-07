import React from 'react';

import Layout from './layout';
import { useAppContext } from './context';
import { Products, Detail, CartList } from './components';

const App = () => {
  const {
    state: { product },
  } = useAppContext();

  return (
    <>
      <Layout>{product ? <Detail /> : <Products />}</Layout>
      <CartList />
    </>
  );
};

export default App;
