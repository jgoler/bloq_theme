import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Button, Modal } from 'react-native';
import { useFonts, Quicksand_700Bold, Quicksand_600SemiBold, Quicksand_400Regular } from '@expo-google-fonts/quicksand';
import ImagePicker from '../components/ImagePicker';


const FinishProfile = props => {
  const [firstIsVisible, setFirstIsVisible] = useState(false);
  const [secondIsVisible, setSecondIsVisible] = useState(false);

  const displayFirstModal = show => {
    setFirstIsVisible(show);
  }

  const displaySecondModal = show => {
    setSecondIsVisible(show);
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
    <View style={styles.container}>
      <Modal
        animationType={"slide"}
        transparent={false}
        visible={firstIsVisible}
        onRequestClose={() => {
          Alert.alert("Modal has now been closed");
        }}
      >
        <View style={styles.container}>
          <View style={styles.modalButtonStyles}>
            <Button color="#e64951" title="save" onPress={() => {
              displayFirstModal(!firstIsVisible);
            }} />
          </View>
          <View style={styles.descriptionContainer}>
            <Text style={styles.description}>Choose Main Profile Picture</Text>
          </View>
          <View style={styles.modalBody}>
            <ImagePicker />
          </View>
        </View>
      </Modal>
      <Modal
        animationType={"slide"}
        transparent={false}
        visible={secondIsVisible}
        onRequestClose={() => {
          Alert.alert("Modal has now been closed");
        }}
      >
        <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1, }}>
          <Button color="#e64951" title="save" onPress={() => {
            displaySecondModal(!secondIsVisible);
          }} />
          <Text>Profile Pictures Modal</Text>
        </View>
      </Modal>


      <View style={styles.headerContainer}>
        <Text style={styles.titleStyles}>Finish Profile</Text>
      </View>
      <View style={styles.description}>
        <Text style={styles.descriptionText}>Fill out the following form to start connecting</Text>
      </View>
      <View style={styles.body}>
        <View style={styles.inputContainer}>

          <View style={styles.buttonContainer}>
            <Button color="#e64951" title="Choose Main Picture" onPress={() => {
              displayFirstModal(true);
            }} />
          </View>


          <View style={styles.buttonContainer}>
            <Button color="#e64951" title="Choose Profile Pictures" onPress={() => {
              displaySecondModal(true);
            }} />
          </View>
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
  headerContainer: {
    flex: 0.8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleStyles: {
    fontFamily: 'Quicksand_700Bold',
    fontSize: 35
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
  inputContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: '35%'
  },
  modalButtonStyles: {
    flex: 0.5,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    width: '80%',
  },
  descriptionContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  description: {
    fontFamily: 'Quicksand_700Bold',
    opacity: 0.7,
    fontSize: 15,
  },
  modalBody: {
    flex: 5,
    width: '100%',
  }
});

export default FinishProfile;