import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  Animated,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const ProductSalesScreen = ({ navigation }) => {
  const [orders] = useState([
    {
      id: "1",
      productImage: require("../../../assets/images/Tomatoes.jpg"),
      productName: "Tomatoes",
      quantity: 5,
      buyerAddress: "District A",
      status: "Pending",
      orderDate: "2023-10-01",
      orderPrice: 10.0,
      buyerName: "John Doe",
      paymentId: "PAY123456",
      buyerPhone: "123-456-7890",
      shelfLife: "5 days",
    },
    {
      id: "2",
      productImage: require("../../../assets/images/Gemini_Generated_Image_Potatoes.jpg"),
      productName: "Potatoes",
      quantity: 3,
      buyerAddress: "District B",
      status: "Delivered",
      orderDate: "2023-09-28",
      orderPrice: 4.5,
      buyerName: "Jane Smith",
      paymentId: "PAY654321",
      buyerPhone: "987-654-3210",
      shelfLife: "7 days",
    },
    {
      id: "3",
      productImage: require("../../../assets/images/Gemini_Generated_Image_Carrot.jpg"),
      productName: "Carrots",
      quantity: 10,
      buyerAddress: "District C",
      status: "Pending",
      orderDate: "2023-10-02",
      orderPrice: 12.0,
      buyerName: "Alice Johnson",
      paymentId: "PAY789012",
      buyerPhone: "456-789-0123",
      shelfLife: "4 days",
    },
  ]);

  const renderOrderItem = ({ item }) => {
    const scaleValue = new Animated.Value(1); // Initial scale value

    const handlePress = () => {
      // Animate the scale on press
      Animated.sequence([
        Animated.timing(scaleValue, {
          toValue: 0.95, // Scale down
          duration: 100,
          useNativeDriver: true,
        }),
        Animated.timing(scaleValue, {
          toValue: 1, // Scale back to original
          duration: 100,
          useNativeDriver: true,
        }),
      ]).start(() => {
        navigation.navigate("IndividualProduct", { order: item });
      });
    };

    return (
      <TouchableOpacity onPress={handlePress} activeOpacity={1}>
        <Animated.View style={[styles.orderItem, { transform: [{ scale: scaleValue }] }]}>
          <Image source={item.productImage} style={styles.productImage} />
          <View style={styles.orderDetails}>
            <Text style={styles.productName}>{item.productName}</Text>
            <Text style={styles.quantity}>Quantity: {item.quantity}</Text>
            <Text style={styles.buyerAddress}>District: {item.buyerAddress}</Text>
          </View>
          <View style={styles.statusContainer}>
            {item.status === "Delivered" ? (
              <Icon name="check-circle" size={24} color="#4CAF50" />
            ) : (
              <Icon name="pending" size={24} color="#f44336" />
            )}
          </View>
        </Animated.View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {/* Orders List */}
      <Text style={styles.sectionTitle}>Orders</Text>
      <FlatList
        data={orders}
        renderItem={renderOrderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.ordersList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 15,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  ordersList: {
    paddingBottom: 20,
  },
  orderItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    marginBottom: 10,
    elevation: 2,
  },
  productImage: {
    width: 50,
    height: 50,
    borderRadius: 10,
    marginRight: 15,
  },
  orderDetails: {
    flex: 1,
  },
  productName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  quantity: {
    fontSize: 14,
    color: "#777",
  },
  buyerAddress: {
    fontSize: 14,
    color: "#777",
  },
  statusContainer: {
    marginLeft: 10,
  },
});

export default ProductSalesScreen;