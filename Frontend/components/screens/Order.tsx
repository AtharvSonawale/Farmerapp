// Order.tsx
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons"; // For icons

const Order = ({ navigation }) => {
  // Sample order data
  const orders = []; // Replace with actual order data or fetch from API

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>My Orders</Text>
        <View style={{ width: 24 }} /> {/* Placeholder for alignment */}
      </View>

      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {orders.length === 0 ? (
          // No orders scenario
          <View style={styles.emptyContainer}>
            <Image
              source={require("../../assets/images/empty_crate.png")} // Replace with your empty crate image
              style={styles.emptyImage}
            />
            <Text style={styles.emptyText}>Your basket feels light...</Text>
            <Text style={styles.emptyText}>
              We are excited to deliver your first order.
            </Text>
            <Text style={styles.emptyText}>Explore now!</Text>
            <TouchableOpacity 
              style={styles.shopButton} 
              onPress={() => navigation.navigate('Home')} // Navigate to HomeScreen
            >
              <Text style={styles.shopButtonText}>Shop now</Text>
            </TouchableOpacity>
          </View>
        ) : (
          // Orders list scenario
          orders.map((order, index) => (
            <View key={index} style={styles.orderItem}>
              {order.status === "Cancelled" && (
                <Icon
                  name="cancel"
                  size={24}
                  color="red"
                  style={styles.cancelIcon}
                />
              )}
              <View style={styles.orderDetails}>
                <Text style={styles.orderDate}>
                  {order.date} {order.day} {order.month} {order.year}
                </Text>
                <Text style={styles.orderId}>Order ID: {order.id}</Text>
                <Text style={styles.orderPrice}>${order.totalPrice}</Text>
                <Text style={styles.orderItemsCount}>
                  {order.itemsCount} items
                </Text>
                <Text
                  style={[
                    styles.orderStatus,
                    { color: getStatusColor(order.status) },
                  ]}
                >
                  {order.status}
                </Text>
              </View>
            </View>
          ))
        )}
      </ScrollView>
    </View>
  );
};

// Function to get the color based on order status
const getStatusColor = (status) => {
  switch (status) {
    case "Confirmed":
      return "green";
    case "Cancelled":
      return "red";
    case "Out for Delivery":
      return "yellow";
    default:
      return "black";
  }
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
    flexGrow: 1, // Allow the content to grow
    justifyContent: "center", // Center vertically
    alignItems: "center", // Center horizontally
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
  shopButton: {
    backgroundColor: "red",
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  shopButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  orderItem: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    elevation: 2,
    flexDirection: "row",
    alignItems: "flex-start",
  },
  cancelIcon: {
    marginRight: 10,
  },
  orderDetails: {
    flex: 1,
  },
  orderDate: {
    fontWeight: "bold",
  },
  orderId: {
    color: "#777",
  },
  orderPrice: {
    fontWeight: "bold",
  },
  orderItemsCount: {
    color: "#777",
  },
  orderStatus: {
    marginTop: 5,
    fontWeight: "bold",
  },
});

export default Order;