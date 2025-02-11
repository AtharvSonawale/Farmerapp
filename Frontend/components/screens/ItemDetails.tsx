// ItemDetails.js
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons"; // For icons

const ItemDetails = ({ route, navigation }) => {
  const { item } = route.params; // Get the item passed from HomeScreen

  // Sample data for pricing
  const prices = {
    "1kg": {
      price: item.price,
      rate: (parseFloat(item.price.replace("$", "")) / 1).toFixed(2),
    },
    "500g": {
      price: (parseFloat(item.price.replace("$", "")) / 2).toFixed(2),
      rate: (parseFloat(item.price.replace("$", "")) / 0.5).toFixed(2),
    },
    "250g": {
      price: (parseFloat(item.price.replace("$", "")) / 4).toFixed(2),
      rate: (parseFloat(item.price.replace("$", "")) / 0.25).toFixed(2),
    },
  };

  // Function to handle item selection from the "More Items" list
  const handleItemPress = (selectedItem) => {
    navigation.navigate("Item", { item: selectedItem });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="#4CAF50" />
        </TouchableOpacity>
        <View style={styles.headerIcons}>
          <Icon name="search" size={24} color="#4CAF50" />
          <Icon name="share" size={24} color="#4CAF50" />
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Image source={item.source} style={styles.image} />

        <Text style={styles.packSize}>Pack sizes: 1 kg</Text>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.packSizeButtons}
        >
          {Object.keys(prices).map((size) => (
            <TouchableOpacity key={size} style={styles.packSizeButton}>
              <Text style={styles.packSizeText}>{size}</Text>
              <Text style={styles.packSizePrice}>
                ${prices[size].price} ({prices[size].rate}/kg)
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <View style={styles.infoContainer}>
          <Text style={styles.sectionTitle}>About the Product</Text>
          <Text style={styles.productInfo}>
            Color: Green, Used in salads and cooking.
          </Text>

          <Text style={styles.sectionTitle}>Other Product Info</Text>
          <Text style={styles.productInfo}>EAN Code: 1234567890123</Text>
          <Text style={styles.productInfo}>
            Sourced & Marketed By: Fresh Farms
          </Text>
          <Text style={styles.productInfo}>Country of Origin: USA</Text>
          <Text style={styles.productInfo}>Best Before: 2023-12-31</Text>
          <Text style={styles.productInfo}>Disclaimer: Keep refrigerated.</Text>
          <Text style={styles.productInfo}>
            For Queries/Feedback/Complaints: contact@freshfarms.com
          </Text>

          <Text style={styles.sectionTitle}>Variable Weight</Text>
          <Text style={styles.productInfo}>
            Product weight may vary at the time of delivery.
          </Text>
        </View>

        {/* Horizontal item list for further shopping */}
        <Text style={styles.sectionTitle2}>More Items</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {[
            {
              source: require("../../assets/images/YellowBellPepper.jpg"),
              price: "$2.00",
              quantity: "1kg",
            },
            {
              source: require("../../assets/images/Tomatoes.jpg"),
              price: "$1.50",
              quantity: "1kg",
            },
            {
              source: require("../../assets/images/Ginger.jpg"),
              price: "$3.00",
              quantity: "500g",
            },
          ].map((moreItem, index) => (
            <TouchableOpacity
              key={index}
              style={styles.itemContainer}
              onPress={() => handleItemPress(moreItem)}
            >
              <Image source={moreItem.source} style={styles.itemImage} />
              <Text style={styles.itemPrice}>Price: {moreItem.price}</Text>
              <Text style={styles.itemQuantity}>
                Quantity: {moreItem.quantity}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </ScrollView>

      <View style={styles.footer}>
        <View>
          <Text style={styles.footerPrice}>{item.price}</Text>
          <Text style={styles.footerTax}>Inclusive of all taxes</Text>
        </View>
        <TouchableOpacity style={styles.loveButton}>
          <Icon name="favorite-border" size={24} color="#4CAF50" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>Add</Text>
        </TouchableOpacity>
      </View>
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
    backgroundColor: "#ffffff",
    elevation: 5,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#4CAF50",
  },
  headerIcons: {
    flexDirection: "row",
    alignItems: "center",
  },
  scrollViewContent: {
    paddingBottom: 20,
  },
  image: {
    width: "90%", // Center the image with horizontal margins
    height: 300,
    borderRadius: 15,
    marginHorizontal: "5%", // Add horizontal margin
    marginTop: 15,
    borderWidth: 1,
    borderColor: "#ddd", // Add border for better visibility
  },
  packSize: {
    fontSize: 20,
    marginVertical: 10,
    textAlign: "center",
    fontWeight: "600",
  },
  packSizeButtons: {
    marginVertical: 10,
  },
  packSizeButton: {
    backgroundColor: "#e0f7fa",
    padding: 15,
    borderRadius: 10,
    marginHorizontal: 10,
    alignItems: "center",
    elevation: 2,
  },
  packSizeText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  packSizePrice: {
    fontSize: 14,
    color: "#00796b",
  },
  infoContainer: {
    padding: 20,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    marginVertical: 10,
    marginHorizontal: 10,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#4CAF50",
  },
  sectionTitle2: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#4CAF50",
    marginLeft: 20,
  },
  productInfo: {
    fontSize: 14,
    marginBottom: 5,
    color: "#555",
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
    backgroundColor: "#ffffff",
    borderTopWidth: 1,
    borderTopColor: "#ccc",
  },
  footerPrice: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#4CAF50",
  },
  footerTax: {
    fontSize: 12,
    color: "#777",
  },
  loveButton: {
    marginLeft: 10,
  },
  addButton: {
    backgroundColor: "#4CAF50",
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 15,
    marginLeft: 10,
  },
  addButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  itemContainer: {
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderRadius: 10,
    padding: 10,
    elevation: 2,
    marginLeft: 10,
    marginBottom: 10, // Added margin for spacing
  },
  itemImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  itemPrice: {
    fontWeight: "bold",
  },
  itemQuantity: {
    color: "#777",
  },
});

export default ItemDetails;