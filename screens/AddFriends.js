import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, TextInput, TouchableWithoutFeedback, Keyboard, Picker } from 'react-native';
import { useFonts, Quicksand_700Bold, Quicksand_600SemiBold, Quicksand_400Regular } from '@expo-google-fonts/quicksand';


const AddFriends = props => {
  let [fontsLoaded] = useFonts({
    Quicksand_700Bold,
    Quicksand_600SemiBold,
    Quicksand_400Regular
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
        <View style={styles.headerContainer}>
          <Text style={styles.headerTitle}>Add Friends</Text>
        </View>
        <View style={styles.body}>
          <Text style={styles.instructionsText}>Fill out the form to connect (note, the questions are optional)</Text>
          <Text style={styles.inputText}>Grade</Text>
          <TextInput style={styles.inputTextStyles} textAlign={'center'} keyboardType="numeric" placeholder="grade #" />
          <Text style={styles.inputText}>Gender</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    //backgroundColor: '#e64951'
  },
  headerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontFamily: 'Quicksand_600SemiBold',
    fontSize: 35,
    color: 'black'
  },
  body: {
    flex: 4,
    width: '75%'
  },
  inputText: {
    fontFamily: 'Quicksand_700Bold',
    color: 'gray',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10
  },
  instructionsText: {
    fontFamily: 'Quicksand_700Bold',
    fontSize: 15,
    marginBottom: 30,
    //color: 'gray',
    fontWeight: 'bold'
  },
  inputTextStyles: {
    width: '17%',
    borderBottomWidth: 2,
    borderBottomColor: 'black',
    height: 20,
    marginBottom: 25
  }
});

export default AddFriends;