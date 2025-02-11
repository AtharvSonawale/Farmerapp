// LocationGrantScreen.tsx
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // For icons

const LocationGrantScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Grant Location Access</Text>
      </View>

      <View style={styles.content}>
        <Icon name="location-on" size={50} color="#000" />
        <Text style={styles.title}>Grant location access for hassle-free delivery</Text>
        <Text style={styles.subtitle}>To provide access, open settings and follow the steps:</Text>
        <View style={styles.list}>
          <Text style={styles.listItem}>• Tap on <Text style={styles.highlight}>Permissions</Text></Text>
          <Text style={styles.listItem}>• Tap on <Text style={styles.highlight}>Location</Text></Text>
          <Text style={styles.listItem}>• Select <Text style={styles.highlight}>Allow only while using the app</Text></Text>
          <Text style={styles.listItem}>• Enable <Text style={styles.highlight}>Precise Location</Text></Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.selectButton} onPress={() => navigation.goBack()}>
            <Text style={styles.buttonText}>Select Location</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.settingsButton} onPress={() => {
            // Open app settings logic here
          }}>
            <Text style={styles.buttonText}>Open Settings</Text>
          </TouchableOpacity>
        </View>
      </View>
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
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  subtitle: {
    textAlign: 'center',
    marginBottom: 20,
  },
  list: {
    marginBottom: 20,
  },
  listItem: {
    fontSize: 16,
  },
  highlight: {
    backgroundColor: '#e0e0e0',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  selectButton: {
    backgroundColor: '# 4CAF50',
    borderRadius: 5,
    paddingVertical: 10,
    flex: 1,
    marginRight: 5,
    alignItems: 'center',
  },
  settingsButton: {
    backgroundColor: '#f44336',
    borderRadius: 5,
    paddingVertical: 10,
    flex: 1,
    marginLeft: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default LocationGrantScreen;