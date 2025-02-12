import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import ListedProductsScreen from "../BuyerSide/ListedProductsScreen"; // Import the ListedProductsScreen
import ListProductsScreen from "../BuyerSide/ListProductsScreen"; // Import the ListProductsScreen
import ProductSalesScreen from "../BuyerSide/ProductSalesScreen"; // Import the ProductSalesScreen

const SHomeScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState("Product Sales");

  const renderContent = () => {
    switch (activeTab) {
      case "Product Sales":
        return <ProductSalesScreen navigation={navigation} />; // Pass navigation prop
      case "List Products":
        return <ListProductsScreen navigation={navigation} />;
      case "Listed Products":
        return <ListedProductsScreen navigation={navigation} />;
      default:
        return <ProductSalesScreen navigation={navigation} />; // Default to ProductSalesScreen
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Image
            source={require("../../../assets/images/logo.png")}
            style={styles.logo}
          />
          <Text style={styles.logoText}>SupVeggies</Text>
        </View>
        <TouchableOpacity
          style={styles.profileButton}
          onPress={() => navigation.navigate("SProfile")}
        >
          <Icon name="account-circle" size={30} color="#4CAF50" />
        </TouchableOpacity>
      </View>

      {/* Main Content */}
      {renderContent()}

      {/* Bottom Navigation Bar */}
      <View style={styles.navBar}>
        <TouchableOpacity
          style={[
            styles.navItem,
            activeTab === "Product Sales"
              ? styles.activeNavItem
              : styles.inactiveNavItem,
          ]}
          onPress={() => setActiveTab("Product Sales")}
        >
          <Icon
            name="shopping-cart"
            size={30}
            color={activeTab === "Product Sales" ? "#fff" : "#343434"}
          />
          <Text
            style={[
              styles.navText,
              { color: activeTab === "Product Sales" ? "#fff" : "#343434" },
            ]}
          >
            Product Sales
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.navItem,
            activeTab === "List Products"
              ? styles.activeNavItem
              : styles.inactiveNavItem,
          ]}
          onPress={() => setActiveTab("List Products")}
        >
          <Icon
            name="list"
            size={30}
            color={activeTab === "List Products" ? "#fff" : "#343434"}
          />
          <Text
            style={[
              styles.navText,
              { color: activeTab === "List Products" ? "#fff" : "#343434" },
            ]}
          >
            List Products
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.navItem,
            activeTab === "Listed Products"
              ? styles.activeNavItem
              : styles.inactiveNavItem,
          ]}
          onPress={() => setActiveTab("Listed Products")}
        >
          <Icon
            name="check-circle"
            size={30}
            color={activeTab === "Listed Products" ? "#fff" : "#343434"}
          />
          <Text
            style={[
              styles.navText,
              { color: activeTab === "Listed Products" ? "#fff" : "#343434" },
            ]}
          >
            Listed Products
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "#f5f5f5",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  logoContainer: {
    flexDirection: "row",
    alignItems: "center", // Center logo and text vertically
  },
  logo: {
    width: 80,
    height: 80,
  },
  logoText: {
    fontSize: 24,
    fontWeight: "bold",
    marginLeft: 10,
    color: "#4CAF50",
  },
  profileButton: {
    padding: 5,
  },
  navBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  navItem: {
    alignItems: "center",
    padding: 10,
    flex: 1,
  },
  activeNavItem: {
    backgroundColor: "#007bff", // Blue background for active tab
  },
  inactiveNavItem: {
    backgroundColor: "#ccc", // Gray background for inactive tabs
  },
  navText: {
    fontSize: 14,
  },
});

export default SHomeScreen;
