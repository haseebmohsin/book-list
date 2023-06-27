import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BookListScreen from './src/screens/BookListScreen';
import BookDetailsScreen from './src/screens/BookDetailsScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='BookList'>
        <Stack.Screen name='BookList' component={BookListScreen} options={{ headerShown: false }} />
        <Stack.Screen name='BookDetails' component={BookDetailsScreen} options={{ title: 'Book Details' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
