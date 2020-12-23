import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useFonts, Quicksand_700Bold, Quicksand_600SemiBold } from '@expo-google-fonts/quicksand';
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
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
    }}>
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
        <View style={styles.inputContainer}>
          <Text style={styles.inputText}>Email</Text>
          <TextInput
            style={{ height: 30, borderColor: '#e64951', borderBottomWidth: 2, marginBottom: 30 }}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <Text style={styles.inputText}>Password</Text>
          <TextInput
            style={{ height: 30, borderColor: '#e64951', borderBottomWidth: 2 }}
            secureTextEntry={true}
          />
          <Text style={styles.forgotPassword}>Forgot Your Password?</Text>
        </View>
        <View style={styles.loginButtonContainer}>
          <Button color="white" title="Log In" onPress={() => {
            props.navigation.push('Home');
          }} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    //backgroundColor: '#e64951'
  },
  loginButtonContainer: {
    //flex: 4,
    width: '75%',
    borderColor: '#e64951',
    backgroundColor: '#e64951',
    borderRadius: 10,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    marginBottom: 170
  },
  forgotPassword: {
    fontFamily: 'Quicksand_700Bold',
    color: '#e64951',
    marginTop: 5
  },
  buttonContainer: {
    borderWidth: 2,
    borderColor: 'black'
  },
  inputContainer: {
    flex: 7,
    marginTop: '5%',
    width: '75%'
  },
  inputText: {
    fontFamily: 'Quicksand_700Bold',
    color: 'grey',
    fontSize: 18,
    fontWeight: 'bold'
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