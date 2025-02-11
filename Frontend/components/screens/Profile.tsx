// Profile.tsx
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons"; // For icons

const Profile = ({ navigation }) => {
  // Sample user data
  const user = {
    username: "John Doe",
    email: "john.doe@example.com",
    phone: "+1234567890",
    pincode: "123456",
    place: "Sample City",
    profilePicture: null, // Set to null for default image
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>My Account</Text>
        <TouchableOpacity>
          <Icon name="chat" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {/* Section 1: User Information */}
        <View style={styles.section}>
          <View style={styles.profileInfo}>
            <Image
              source={
                user.profilePicture
                  ? { uri: user.profilePicture }
                  : require("../../assets/images/5402435_account_profile_user_avatar_man_icon.png") // Default image
              }
              style={styles.profileImage}
            />
            <View style={styles.userDetails}>
              <Text style={styles.username}>{user.username}</Text>
              <Text style={styles.email}>{user.email}</Text>
              <Text style={styles.phone}>{user.phone}</Text>
            </View>
            <TouchableOpacity style={styles.editButton}>
              <Icon name="edit" size={24} color="#4CAF50" />
            </TouchableOpacity>
          </View>

          <View style={styles.locationInfo}>
            <Icon name="place" size={20} color="#000" />
            <View style={styles.locationDetails}>
              <Text style={styles.pincodeLabel}>Pincode</Text>
              <Text style={styles.place}>
                {user.place} - {user.pincode}
              </Text>
            </View>
            <TouchableOpacity style={styles.changeButton}>
              <Text style={styles.changeButtonText}>Change</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Section 2: List of Screen Pages */}
        <View style={styles.section}>
          {[
            { title: "Orders", icon: "shopping-bag", screen: "Order" }, // Updated screen name
            { title: "Addresses", icon: "place", screen: "Addresses" },
            {
              title: "svWallet",
              icon: "account-balance-wallet",
              extra: "$0",
              screen: "Wallet",
            },
            {
              title: "Saved Payments",
              icon: "credit-card",
              screen: "SavedPayments",
            },
            { title: "Ratings & Reviews", icon: "star", screen: "Ratings" },
            { title: "Support", icon: "headset", screen: "Support" },
            {
              title: "Notifications",
              icon: "notifications",
              screen: "Notifications",
            },
          ].map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.listItem}
              onPress={() => navigation.navigate(item.screen)}
            >
              <Icon name={item.icon} size={24} color="#000" />
              <Text style={styles.listItemText}>{item.title}</Text>
              {item.extra && <Text style={styles.extraText}>{item.extra}</Text>}
            </TouchableOpacity>
          ))}
        </View>

        {/* Section 3: Additional Options */}
        <View style={styles.section}>
          {["FAQs", "Terms & Conditions", "Privacy Policy", "Logout"].map(
            (item, index) => (
              <TouchableOpacity key={index} style={styles.listItem}>
                <Text style={styles.listItemText}>{item}</Text>
              </TouchableOpacity>
            )
          )}
        </View>
      </ScrollView>

      {/* App Version */}
      <Text style={styles.appVersion}>App Version: 1.0.0</Text>
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
  section: {
    marginBottom: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    elevation: 2,
  },
  profileInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },
  userDetails: {
    flex: 1,
  },
  username: {
    fontSize: 16,
    fontWeight: "bold",
  },
  email: {
    color: "#777",
  },
  phone: {
    color: "#777",
  },
  locationInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  locationDetails: {
    flex: 1,
    marginLeft: 10,
  },
  pincodeLabel: {
    fontWeight: "bold",
  },
  changeButton: {
    backgroundColor: "#4CAF50",
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  changeButtonText: {
    color: "#fff",
  },
  editButton: {
    marginLeft: "auto", // Push the edit button to the right
  },
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 10,
  },
  listItemText: {
    fontSize: 16,
    flex: 1,
    marginLeft: 10,
  },
  extraText: {
    color: "#777",
  },
  appVersion: {
    textAlign: "center",
    marginVertical: 20,
    color: "#777",
  },
});

export default Profile;
