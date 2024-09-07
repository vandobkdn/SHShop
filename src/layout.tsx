import React from 'react';

import { Header } from './components';
import { View } from './primitives';

const Layout = ({ children }) => (
  <View className="container">
    <Header />
    <View tag="main" attrs={{ id: 'contentTab' }}>
      {children}
    </View>
  </View>
);

export default Layout;
