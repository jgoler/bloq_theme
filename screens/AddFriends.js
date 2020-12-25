import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, TextInput, TouchableWithoutFeedback, Keyboard, Picker, Button, Modal, Alert } from 'react-native';
import { useFonts, Quicksand_700Bold, Quicksand_600SemiBold, Quicksand_400Regular } from '@expo-google-fonts/quicksand';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/Feather';

const AddFriends = props => {
  const [isVisible, setIsVisible] = useState(false);

  const displayModal = show => {
    setIsVisible(show);
  }

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
        <Modal
          animationType={"slide"}
          transparent={false}
          visible={isVisible}
          onRequestClose={() => {
            Alert.alert("Modal has now been closed");
          }}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalButtonStyles}>
              <Button color="#e64951" title="close" onPress={() => {
                displayModal(!isVisible);
              }} />
            </View>
            <View style={styles.cardContainer}>
              <View style={{ width: '100%', flex: 3 }}>
                <Image style={styles.image}
                  source={{
                    uri: 'https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5f47d4de7637290765bce495%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D1398%26cropX2%3D3908%26cropY1%3D594%26cropY2%3D3102'
                  }}
                />
              </View>
              <View style={styles.userInfo}>
                <View style={styles.nameContainer}>
                  <Text style={styles.name}>Elon Musk</Text>
                </View>
                <View>
                  <Text style={styles.gradeNumber}>Grade: 12</Text>
                </View>
              </View>
            </View>
            <View style={{ flex: 1 }}>

            </View>
          </View>
        </Modal>
        <View style={styles.headerContainer}>
          <Text style={styles.headerTitle}>Add Friends</Text>
        </View>
        <View style={styles.body}>
          <Text style={styles.instructionsText}>Fill out the form to connect (note, the questions are optional)</Text>
          <View style={styles.card}>
            <View style={{ marginTop: 30, width: '100%', alignItems: 'center', justifyContent: 'center' }}>
              <Text style={styles.inputLabel}>Grade</Text>
              <TextInput style={styles.inputTextStyles} textAlign={'center'} keyboardType="numeric" placeholder="grade #" />
            </View>
            <View style={{ marginBottom: 150, width: '100%', alignItems: 'center', justifyContent: 'center' }}>
              <Text style={styles.inputLabel}>Gender</Text>
              <DropDownPicker
                items={[
                  { label: 'Male', value: 'male', },
                  { label: 'Female', value: 'female', },
                  { label: 'Other', value: 'other', },
                ]}
                placeholder="Select a gender"
                containerStyle={{ height: 40, width: '80%' }}
                style={{ backgroundColor: '#fafafa' }}
                itemStyle={{
                  justifyContent: 'flex-start'
                }}
                dropDownStyle={{ backgroundColor: '#fafafa' }}
                onChangeItem={item => this.setState({
                  country: item.value
                })}
              />
            </View>
            <View style={{ width: '100%', alignItems: 'center', justifyContent: 'center' }}>
              <View style={styles.buttonContainer}>
                <Button color="black" title="Go" onPress={() => {
                  displayModal(true);
                }} />
              </View>
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
    height: '85%',
    borderRadius: 40,
    backgroundColor: 'rgba(230, 73, 81, 0.1)',
    alignItems: 'center',
    justifyContent: 'flex-start'
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
  },
  modalButtonStyles: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    width: '80%',
  },
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardContainer: {
    flex: 5,
    width: '100%',
    alignItems: 'center',
    //justifyContent: 'center'
  },
  image: {
    //flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  userInfo: {
    flex: 1,
    width: '90%'
  },
  name: {
    fontFamily: 'Quicksand_700Bold',
    fontSize: 35
  },
  gradeNumber: {
    fontFamily: 'Quicksand_600SemiBold',
    fontSize: 20,
    color: 'gray'
  }
});

export default AddFriends;