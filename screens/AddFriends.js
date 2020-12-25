import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, TextInput, TouchableWithoutFeedback, Keyboard, Picker, Button } from 'react-native';
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
          <View style={styles.card}>
            <View style={{ marginBottom: '25%' }}>
              <Text style={styles.inputLabel}>Grade</Text>
              <TextInput style={styles.inputTextStyles} textAlign={'center'} keyboardType="numeric" placeholder="grade #" />
            </View>
            <View style={{ marginBottom: '25%' }}>
              <Text style={styles.inputLabel}>Gender</Text>
            </View>
            <View style={styles.buttonContainer}>
              <Button color="black" title="Go" />
            </View>
          </View>
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
    alignItems: 'center',
    flex: 4,
    width: '90%'
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
    marginBottom: 25,
    width: 50
  },
  card: {
    width: '95%',
    borderWidth: 2,
    borderColor: '#e64951',
    height: '80%',
    borderRadius: 40,
    backgroundColor: 'rgba(230, 73, 81, 0.1)',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputLabel: {
    fontFamily: 'Quicksand_700Bold',
    fontSize: 18,
    marginBottom: 20,
    //color: 'gray',
    fontWeight: 'bold'
  },
  buttonContainer: {
    width: '80%',
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 10
  }
});

export default AddFriends;