import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, TextInput, TouchableWithoutFeedback, Keyboard, Button } from 'react-native';
import { useFonts, Quicksand_700Bold, Quicksand_600SemiBold, Quicksand_400Regular } from '@expo-google-fonts/quicksand';
import DropDownPicker from 'react-native-dropdown-picker';


const CreateProfile = props => {
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
          <Text style={styles.titleStyles}>Create Profile</Text>
        </View>
        <View style={styles.description}>
          <Text style={styles.descriptionText}>Fill out the following form to start connecting</Text>
        </View>
        <View style={styles.body}>
          <View style={styles.inputContainer}>
            <TextInput
              multiline={true}
              placeholder='Enter a description of yourself...'
              style={styles.textInput} />
            <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', marginBottom: 145 }}>
              <DropDownPicker
                items={[
                  { label: '9', value: '9', },
                  { label: '10', value: '10', },
                  { label: '11', value: '11', },
                  { label: '12', value: '12', },
                ]}
                placeholder="Select your grade"
                containerStyle={{ height: 40, width: '75%' }}
                style={{ backgroundColor: '#fafafa', }}
                itemStyle={{
                  justifyContent: 'flex-start'
                }}
                dropDownStyle={{ backgroundColor: '#fafafa', }}
                onChangeItem={item => this.setState({
                  country: item.value
                })}
              />
            </View>
            <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', marginBottom: 120 }}>
              <DropDownPicker
                items={[
                  { label: 'Male', value: 'male', },
                  { label: 'Female', value: 'female', },
                  { label: 'Non-Binary', value: 'nonbinary', },
                ]}
                placeholder="Select Your Gender"
                containerStyle={{ height: 40, width: '75%' }}
                style={{ backgroundColor: '#fafafa', }}
                itemStyle={{
                  justifyContent: 'flex-start',
                }}
                dropDownStyle={{ backgroundColor: '#fafafa', }}
                onChangeItem={item => this.setState({
                  country: item.value
                })}
              />
            </View>
            <View style={styles.buttonContainer}>
              <Button color="#e64951" title="Create" onPress={() => {
                props.navigation.push('FinishProfile');
              }} />
            </View>


          </View>
        </View>
      </View>
    </TouchableWithoutFeedback >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    //backgroundColor: '#e64951'
  },
  buttonContainer: {
    width: '75%',
    borderColor: 'white',
    backgroundColor: 'white',
    borderRadius: 10,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
  },
  headerContainer: {
    flex: 0.8,
    alignItems: 'center',
    justifyContent: 'center',

  },
  titleStyles: {
    fontFamily: 'Quicksand_700Bold',
    fontSize: 35
  },
  body: {
    //display: 'flex',
    flex: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    width: '100%',
    borderColor: '#e64951',
    backgroundColor: '#e64951',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40
  },
  inputContainer: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    minHeight: "auto",
  },
  description: {
    flex: 0.3,
    alignItems: 'center',
    //justifyContent: 'center',
    width: '100%',
    height: '100%'
  },
  descriptionText: {
    fontFamily: 'Quicksand_700Bold',
    opacity: 0.7,
    fontSize: 15,
  },
  input: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    // height: '25%'
  },
  textInput: {
    height: 90,
    backgroundColor: 'white',
    marginTop: 20,
    width: '70%',
    padding: 10,
    marginBottom: 30,
    borderRadius: 10
  }
});

export default CreateProfile;