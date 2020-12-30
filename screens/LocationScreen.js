import React, { useState } from 'react';
import {
  ScrollView,
  View,
  Button,
  Text,
  TextInput,
  StyleSheet
} from 'react-native';
import LocationPicker from '../components/LocationPicker';

const LocationScreen = props => {
  return (
    <View style={styles.container}>
      <View style={{ width: '80%' }}>
        <LocationPicker />
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default LocationScreen;