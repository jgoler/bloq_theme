import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from './screens/Welcome';
import Login from './screens/Login';
import Home from './screens/Home';
import Chat from './screens/Chat';


const Stack = createStackNavigator();
/*
Home: {
    screen: TabNavigator({
      Home: {
        screen: HomeScreen,
        navigationOptions: ({ navigation }) => ({
          title: 'Home',
        }),
      },
      Friends: {
        screen: FriendsScreen,
        navigationOptions: ({ navigation }) => ({
          title: 'My Friends',
        }),
      },
    }),
*/
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="Welcome" component={Welcome} />
        <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
        <Stack.Screen options={{ headerShown: false }} name="Home" component={Home} />
        <Stack.Screen options={{ headerShown: false }} name="Chat" component={Chat} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
});

export default App;