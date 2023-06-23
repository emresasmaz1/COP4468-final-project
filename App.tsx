import { StyleSheet } from 'react-native';
import React from 'react';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './screens/Home';
import { PaperProvider,adaptNavigationTheme, MD3LightTheme, useTheme } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ProductStackScreen from './components/ProductStackScreen';
import CategoriesStackScreen from './components/CategoriesStackScreen';
import Orders from './screens/Orders';

const Tab = createBottomTabNavigator();

const { LightTheme, } = adaptNavigationTheme({ reactNavigationLight: DefaultTheme });

const App = () => {
  const theme = useTheme()
  return (
    <PaperProvider theme={MD3LightTheme}>
      <NavigationContainer theme={LightTheme} >
        <Tab.Navigator  initialRouteName='Home'
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
  
              if (route.name === 'Home') {
                iconName = focused
                  ? 'home'
                  : 'home-outline';
              } else if (route.name === 'Products') {
                iconName = focused ? 'list' : 'list-outline';
              }
              else if (route.name === 'Categories') {
                iconName = focused ? 'grid' : 'grid-outline';
              }
              else {
                iconName = focused ? 'add-circle' : 'add-circle-outline';
              }
              return <Ionicons name={iconName} size={size} color={color} />;
            }, 
          tabBarActiveTintColor: theme.colors.secondary,
          tabBarInactiveTintColor: 'black',
          tabBarLabelStyle: { fontSize: 15 },
          headerShown: route.name === 'Home' ? true : false,
        })}>
          <Tab.Screen name="Home" component={Home}/>
          <Tab.Screen name="Products" component={ProductStackScreen} />
          <Tab.Screen name="Categories" component={CategoriesStackScreen} />
          <Tab.Screen name="Orders" component={Orders} />

        </Tab.Navigator>
      </NavigationContainer>
  </PaperProvider>
  )};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default App;