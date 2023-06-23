import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Details from '../screens/Details';
import Products from '../screens/Products';


const ProductStack = createNativeStackNavigator();

const ProductStackScreen = () => {
  return (
    <ProductStack.Navigator>
        <ProductStack.Screen name="Product List" component={Products} />
        <ProductStack.Screen name="Details" component={Details} />
    </ProductStack.Navigator>
  );
}

export default ProductStackScreen