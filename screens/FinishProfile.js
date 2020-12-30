import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Button, Modal, TouchableWithoutFeedback } from 'react-native';
import { useFonts, Quicksand_700Bold, Quicksand_600SemiBold, Quicksand_400Regular } from '@expo-google-fonts/quicksand';
import ImgPicker from '../components/ImagePicker';
import ProfilePicPicker from '../components/RegularProfilePicker';
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';


const FinishProfile = props => {
  const [pickedImage, setPickedImage] = useState();
  const [isVisible, setIsVisible] = useState(false);

  const verifyPermissions = async () => {
    const result = await Permissions.askAsync(Permissions.CAMERA, Permissions.CAMERA_ROLL
    );
    if (result.status !== 'granted') {
      Alert.alert("Insufficient permissions!", "You need to grant camera and photo permissions to use this app.",
        [{ text: 'Okay' }]
      );
      return false;
    }
    return true;
  };

  const takeImageHandler = async () => {
    const hasPermission = await verifyPermissions();
    if (!hasPermission) {
      return;
    }
    const image = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      quality: 0.5
    });
    setPickedImage(image.uri);
  };

  const chooseImageHandler = async () => {
    const hasPermission = await verifyPermissions();
    if (!hasPermission) {
      return;
    }
    const image = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 0.5
    });
    setPickedImage(image.uri);
  }


  const displayModal = show => {
    setIsVisible(show);
  }


  let [fontsLoaded] = useFonts({
    Quicksand_700Bold,
    Quicksand_600SemiBold,
    Quicksand_400Regular
  });

  return (
    <View style={styles.container}>
      <Modal
        animationType={"slide"}
        transparent={false}
        visible={isVisible}
        onRequestClose={() => {
          Alert.alert("Modal has now been closed");
        }}>
        <View style={styles.modalCloseButtonStyles}>
          <Button color="#e64951" title="close" onPress={() => {
            displayModal(!isVisible);
          }} />
        </View>
        <View style={styles.modalContainer}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalHeaderTitle}>Choose your profile picture</Text>
          </View>

          <View style={styles.imagePreviewContainer}>
            <View style={styles.imagePreview}>
              {!pickedImage ? (
                <Image style={styles.image} source={{ uri: "https://uwosh.edu/deanofstudents/wp-content/uploads/sites/156/2019/02/profile-default.jpg" }} />
              ) : (
                  <Image source={{ uri: pickedImage }} style={styles.image} />
                )}
            </View>
          </View>
          <View style={styles.modalBody}>
            <View style={styles.buttonContainer}>
              <View style={styles.modalButton}>
                <Button title="Take Photo" color='#e64951' onPress={takeImageHandler} />
              </View>
              <View style={styles.modalButton}>
                <Button title="Choose Existing Photo" color='#e64951' onPress={chooseImageHandler} />
              </View>
            </View>
          </View>
        </View>
      </Modal>
      <View style={styles.headerContainer}>
        <Text style={styles.titleStyles}>Finish Profile</Text>
      </View>
      <View style={styles.descriptionContainer}>
        <Text style={styles.description}>Fill out the following to finish your profile</Text>
      </View>
      <View style={{ flex: 5, justifyContent: 'center', alignItems: 'center', width: '100%' }}>
        <ScrollView showsVerticalScrollIndicator={false} style={styles.body}>

          <TouchableWithoutFeedback onPress={() => {
            displayModal(true);
          }}>
            <View>
              <View style={styles.imagePicker}>
                <View style={styles.imagePreviewContainer}>
                  <View style={styles.imagePreview}>
                    {!pickedImage ? (
                      <Image style={styles.image} source={{ uri: "https://uwosh.edu/deanofstudents/wp-content/uploads/sites/156/2019/02/profile-default.jpg" }} />
                    ) : (
                        <Image source={{ uri: pickedImage }} style={styles.image} />
                      )}
                  </View>
                </View>
              </View>
            </View>

          </TouchableWithoutFeedback>
          <ProfilePicPicker />
          <ProfilePicPicker />
          <ProfilePicPicker />
          <ProfilePicPicker />
          <ProfilePicPicker />
          <Button color="#e64951" title="Done" onPress={() => {
            props.navigation.push('Home');
          }} />
        </ScrollView>
      </View>
    </View >
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
  descriptionContainer: {
    flex: 0.3,
    alignItems: 'center',
    //justifyContent: 'center',
    width: '100%',
    height: '100%'
  },
  description: {
    fontFamily: 'Quicksand_700Bold',
    opacity: 0.7,
    fontSize: 15,
  },
  body: {
    flex: 5,
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  imagePreviewContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 0.8,

  },
  imagePreview: {
    width: 94,
    height: 94,
    borderRadius: 47,
    marginBottom: 10,
    borderColor: '#e64951',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 45
  },
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalHeader: {
    flex: 0.3,
    alignItems: 'center',
    justifyContent: 'center'
  },
  modalHeaderTitle: {
    fontFamily: 'Quicksand_700Bold',
    opacity: 0.7,
    fontSize: 20,
  },
  modalBody: {
    flex: 4,
    borderWidth: 2,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderColor: '#e64951',
    backgroundColor: '#e64951',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40
  },
  modalButton: {
    width: '75%',
    borderColor: 'white',
    backgroundColor: 'white',
    borderRadius: 10,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: '45%'
  },
  modalCloseButtonStyles: {
    flex: 0.1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    width: '80%',
  }
});

export default FinishProfile;
/*
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Button, Modal } from 'react-native';
import { useFonts, Quicksand_700Bold, Quicksand_600SemiBold, Quicksand_400Regular } from '@expo-google-fonts/quicksand';
import ImagePicker from '../components/ImagePicker';


const FinishProfile = props => {
  const [firstIsVisible, setFirstIsVisible] = useState(false);

  const displayFirstModal = show => {
    setFirstIsVisible(show);
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
      <View style={styles.headerContainer}>
        <Text style={styles.titleStyles}>Finish Profile</Text>
      </View>
      <View style={styles.description}>
        <Text style={styles.descriptionText}>Add pictures to your profile</Text>
      </View>
      <View style={styles.body}>
        <View style={styles.inputContainer}>

          <View style={styles.buttonContainer}>
            <Button color="#e64951" title="Choose Profile Pictures" onPress={() => {
              displayFirstModal(true);
            }} />
          </View>
          <View style={styles.buttonContainer}>
            <Button color="#e64951" title="Done" onPress={() => {
              props.navigation.push('Home');
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
*/