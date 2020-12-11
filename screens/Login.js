import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useFonts, Quicksand_700Bold } from '@expo-google-fonts/quicksand';
import { Ionicons } from '@expo/vector-icons';
import { StackActions } from '@react-navigation/native';

const popAction = StackActions.pop(1);

const Login = props => {
  let [fontsLoaded] = useFonts({
    Quicksand_700Bold,
  });

  if (!fontsLoaded) {
    return <View>
      <Text>Loading...</Text>
    </View>
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.backButtonContainer}>
          <Ionicons name="ios-arrow-back" size={40} color="black" onPress={() => {
            props.navigation.dispatch(popAction);
          }} />
        </View>
      </View>
      <View style={styles.titleContainer}>
        <View>
          <Text style={styles.title}>Log In</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    //backgroundColor: '#e64951'
  },
  title: {
    fontFamily: 'Quicksand_700Bold',
    fontSize: 35
  },
  titleContainer: {
    flex: 1,
    alignItems: 'flex-start'
  },
  backButtonContainer: {
    marginTop: 50,
    width: '15%',
    alignItems: 'center'

  },
  header: {
    width: '80%'
  }
});

export default Login;