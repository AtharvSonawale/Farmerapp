// SProfile.tsx
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

const SProfile = ({ navigation }) => {
  // Sample seller data
  const seller = {
    username: "Jane Smith",
    email: "jane.smith@example.com",
    phone: "+1234567890",
    shopName: "Jane's Veggies",
    shopAddress: "123 Veggie Lane, Sample City",
    profilePicture: null, // Set to null for default image
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>My Seller Profile</Text>
        <TouchableOpacity>
          <Icon name="chat" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {/* Section 1: Seller Information */}
        <View style={styles.section}>
          <View style={styles.profileInfo}>
            <Image
              source={
                seller.profilePicture
                  ? { uri: seller.profilePicture }
                  : require("../../../assets/images/5402435_account_profile_user_avatar_man_icon.png") // Default image
              }
              style={styles.profileImage}
            />
            <View style={styles.userDetails}>
              <Text style={styles.username}>{seller.username}</Text>
              <Text style={styles.shopName}>{seller.shopName}</Text>
              <Text style={styles.email}>{seller.email}</Text>
              <Text style={styles.phone}>{seller.phone}</Text>
            </View>
            <TouchableOpacity style={styles.editButton}>
              <Icon name="edit" size={24} color="#4CAF50" />
            </TouchableOpacity>
          </View>

          <View style={styles.locationInfo}>
            <Icon name="place" size={20} color="#000" />
            <View style={styles.locationDetails}>
              <Text style={styles.shopAddressLabel}>Shop Address</Text>
              <Text style={styles.shopAddress}>{seller.shopAddress}</Text>
            </View>
            <TouchableOpacity style={styles.changeButton}>
              <Text style={styles.changeButtonText}>Change</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Section 2: Seller Dashboard Options */}
        <View style={styles.section}>
          {[
            { title: "Manage Products", icon: "shopping-cart", screen: "ManageProducts" },
            { title: "Orders", icon: "shopping-bag", screen: "SellerOrders" },
            { title: "Sales Reports", icon: "assessment", screen: "SalesReports" },
            { title: "Customer Messages", icon: "chat", screen: "CustomerMessages" },
            { title: "Promotions", icon: "local-offer", screen: "Promotions" },
            { title: "Support", icon: "headset", screen: "Support" },
          ].map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.listItem}
              onPress={() => navigation.navigate(item.screen)}
            >
              <Icon name={item.icon} size={24} color="#000" />
              <Text style={styles.listItemText}>{item.title}</Text>
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
  shopName: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#4CAF50",
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
  shopAddressLabel: {
    fontWeight: "bold",
  },
  shopAddress: {
    color: "#777",
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
  appVersion: {
    textAlign: "center",
    marginVertical: 20,
    color: "#777",
  },
});

export default SProfile;