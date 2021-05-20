import React from 'react';
import { StyleSheet } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import { ApolloProvider } from '@apollo/client';
import { client } from './src/graphql/Client'
import UsersListScreen from './src/screens/UsersListScreen';

const Stack = createStackNavigator();
export default function App() {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={UsersListScreen}
          options={{ title: 'Listado de usuarios' }}
        />
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
