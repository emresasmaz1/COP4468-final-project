import { View, FlatList } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Categories from '../screens/Categories';
import UpdateScreen from '../screens/UpdateScreen';

const CategoryStack = createNativeStackNavigator();

const CategoriesStackScreen = () => {
  return (
    <CategoryStack.Navigator>
        <CategoryStack.Screen name="Category List" component={Categories} />
        <CategoryStack.Screen name="Update" component={UpdateScreen} />
    </CategoryStack.Navigator>
  )
}

export default CategoriesStackScreen