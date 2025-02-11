// AddressesScreen.tsx
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Alert,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons"; // For icons

const AddressesScreen = ({ navigation }) => {
  const [addresses, setAddresses] = useState([]); // Replace with actual address data

  const handleAddNewAddress = () => {
    // Check if location permission is granted
    const permissionGranted = false; // Replace with actual permission check
    if (permissionGranted) {
      navigation.navigate("AddNewAddress");
    } else {
      navigation.navigate("LocationGrant");
    }
  };

  const handleDeleteAddress = (index) => {
    Alert.alert(
      "Confirm Delete",
      "Are you sure you want to delete the address?",
      [
        { text: "NO", style: "cancel" },
        {
          text: "YES",
          onPress: () => {
            const newAddresses = addresses.filter((_, i) => i !== index);
            setAddresses(newAddresses);
            // Show success message
            Alert.alert("Address has been deleted successfully");
          },
        },
      ],
      { cancelable: true }
    );
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Choose Delivery Address</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {addresses.length === 0 ? (
          // No addresses scenario
          <View style={styles.emptyContainer}>
            <Image
              source={require("../../assets/images/299061_house_icon.png")} // Replace with your house image
              style={styles.emptyImage}
            />
            <Text style={styles.emptyText}>
              Let us know where to deliver your order!
            </Text>
            <Text style={styles.emptyText}>
              Add address and experience faster checkout!
            </Text>
          </View>
        ) : (
          // Display saved addresses
          <View style={styles.addressContainer}>
            <Text style={styles.savedAddressesTitle}>SAVED ADDRESSES</Text>
            {addresses.map((address, index) => (
              <View key={index} style={styles.addressBox}>
                {address.isDefault && (
                  <Icon
                    name="check-circle"
                    size={24}
                    color="red"
                    style={styles.defaultIcon}
                  />
                )}
                <View style={styles.addressDetails}>
                  <Text style={styles.addressType}>
                    Default Address: {address.type}
                  </Text>
                  <Text>{address.userName}</Text>
                  <Text>{address.apartmentNo}</Text>
                  <Text>
                    {address.placeName}, {address.district} - {address.pinCode}
                  </Text>
                  <Text>Ph: {address.mobileNo}</Text>
                </View>
                <View style={styles.addressActions}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate("AddNewAddressScreen")}
                  >
                    <Icon name="edit" size={24} color="#4CAF50" />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => handleDeleteAddress(index)}>
                    <Icon name="delete" size={24} color="red" />
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </View>
        )}
        <TouchableOpacity
          style={styles.addButton}
          onPress={handleAddNewAddress}
        >
          <Text style={styles.addButtonText}>+ ADD NEW ADDRESS</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
    backgroundColor: "#fff",
    elevation: 5,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  scrollViewContent: {
    padding: 15,
  },
  emptyContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  emptyImage: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  emptyText: {
    textAlign: "center",
    marginBottom: 5,
  },
  addressContainer: {
    marginTop: 20,
  },
  savedAddressesTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  addressBox: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    elevation: 2,
    flexDirection: "row",
    alignItems: "flex-start",
  },
  defaultIcon: {
    marginRight: 10,
  },
  addressDetails: {
    flex: 1,
  },
  addressType: {
    fontWeight: "bold",
  },
  addressActions: {
    flexDirection: "row",
    alignItems: "center",
  },
  addButton: {
    backgroundColor: "#343434",
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: "center",
    marginTop: 20,
  },
  addButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default AddressesScreen;
