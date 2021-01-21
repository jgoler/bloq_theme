import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import Welcome from './screens/Welcome';
import Login from './screens/Login';
import Home from './screens/Home';
import Chat from './screens/Chat';
import Profile from './screens/Profile';
import AddFriends from './screens/AddFriends';
import Signup from './screens/Signup';
import CreateProfile from './screens/CreateProfile';
import FinishProfile from './screens/FinishProfile';
import LocationScreen from './screens/LocationScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
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

function MainTabNavigator() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#e64951',
      }}
    >
      <Tab.Screen options={{
        headerShown: false, tabBarIcon: ({ color }) => (
          <Entypo name="home" size={30} color={color} />
        )
      }} name="home" component={Home} />
      <Tab.Screen options={{
        headerShown: false, tabBarIcon: ({ color }) => (
          <FontAwesome5 name="plus" size={30} color={color} />
        )
      }} name="Add Friends" component={AddFriends} />
      <Tab.Screen options={{
        headerShown: false, tabBarIcon: ({ color }) => (
          <FontAwesome name="user" size={30} color={color} />
        )
      }} name="Profile" component={Profile} />
    </Tab.Navigator>
  )
}


function MainStackNavigator() {
  return (
    <Stack.Navigator >
      <Stack.Screen options={{ headerShown: false }} name="Welcome" component={Welcome} />
      <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
      <Stack.Screen options={{ headerShown: false }} name="Signup" component={Signup} />
      <Stack.Screen options={{ headerShown: false }} name="CreateProfile" component={CreateProfile} />
      <Stack.Screen options={{ headerShown: false }} name="FinishProfile" component={FinishProfile} />
      <Stack.Screen options={{ headerShown: false }} name="Chat" component={Chat} />
      <Stack.Screen options={{ headerShown: false }} name="Home" component={MainTabNavigator} />
    </Stack.Navigator>
  )
}



function App() {
  return (
    <NavigationContainer>
      <MainStackNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
});

export default App;