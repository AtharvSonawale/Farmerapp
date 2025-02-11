// UseThisLocationScreen.tsx
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // For icons

const UseThisLocationScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Confirm Location</Text>
      </View>

      <View style={styles.locationDetails}>
        <Icon name="location-on" size={50} color="#000" />
        <Text style={styles.locationName}>Name of the Place</Text>
        <Text style={styles.locationAddress}>Place Name, Full Address, Pin Code</Text>
      </View>

      <TouchableOpacity style={styles.confirmButton} onPress={() => {
        // Logic to save the selected location
        navigation.navigate('AddressesScreen');
      }}>
        <Text style={styles.confirmButtonText}>Use This Location</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: '#fff',
    elevation: 5,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  locationDetails: {
    alignItems: 'center',
    marginTop: 20,
  },
  locationName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  locationAddress: {
    fontSize: 16,
    color: '#777',
    textAlign: 'center',
  },
  confirmButton: {
    backgroundColor: '#4CAF50',
    borderRadius: 5,
    paddingVertical: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  confirmButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default UseThisLocationScreen;