import * as React from 'react';
import { StyleSheet, View, Text, Button, TouchableOpacity } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import { ApolloProvider } from '@apollo/client';
import { client } from './src/graphql/Client'
import UsersListScreen from './src/screens/UsersListScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <>
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={UsersListScreen}
            options={{
              title: 'Listado de usuarios',
              headerStyle: {
                backgroundColor: '#f4511e',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
    </>
  );
}; 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ebebeb'
  }
})
