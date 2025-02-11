import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const IndividualProduct = ({ route, navigation }) => {
  const { order } = route.params; // Get the order details from route params

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="#4CAF50" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{order.productName}</Text>
        <View style={styles.headerPlaceholder} /> {/* Placeholder for alignment */}
      </View>

      {/* Section */}
      <View style={styles.section}>
        <Image source={order.productImage} style={styles.productImage} />
        <View style={styles.metaDataContainer}>
          <Text style={styles.metaDataTitle}>Product Name: {order.productName}</Text>
          <Text style={styles.metaData}>Quantity: {order.quantity}</Text>
          <Text style={styles.metaData}>District: {order.buyerAddress}</Text>
          <Text style={styles.metaData}>Order ID: {order.id}</Text>
          <Text style={styles.metaData}>Order Price: ${order.orderPrice.toFixed(2)}</Text>
          <Text style={styles.metaData}>Buyer Name: {order.buyerName}</Text>
          <Text style={styles.metaData}>Payment ID: {order.paymentId}</Text>
          <Text style={styles.metaData}>Buyer Phone: {order.buyerPhone}</Text>
          <Text style={styles.metaData}>Shelf Life: {order.shelfLife}</Text>
          <Text style={styles.metaData}>
            Status: {order.status}{" "}
            {order.status === "Delivered" ? (
              <Icon name="check-circle" size={24} color="#4CAF50" />
            ) : (
              <Icon name="pending" size={24} color="#f44336" />
            )}
          </Text>
          <Text style={styles.metaData}>Order Date: {order.orderDate}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    backgroundColor: "#f5f5f5",
    elevation: 2,
  },
  headerTitle: {
    flex: 1,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  headerPlaceholder: {
    width: 24, // Placeholder width for alignment
  },
  section: {
    alignItems: "center",
    padding: 20,
  },
  productImage: {
    width: Dimensions.get("window").width * 0.9, // Cover 90% of the screen width
    height: Dimensions.get("window").width * 0.9, // Maintain aspect ratio
    borderRadius: 55,
    marginBottom: 15,
  },
  metaDataContainer: {
    alignItems: "flex-start", // Align items to the start (left)
    width: "100%", // Ensure it takes full width
  },
  metaDataTitle: {
    fontSize: 18, // Smaller font size for title
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "left", // Align text to the left
  },
  metaData: {
    fontSize: 14, // Smaller font size for metadata
    marginBottom: 5,
    textAlign: "left", // Align text to the left
  },
});

export default IndividualProduct;