import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

interface BasketItem {
  name: string;
  source: any;
  price: string;
  quantity: number;
}

interface BasketScreenProps {
  navigation: any;
  route: {
    params: {
      basketItems: BasketItem[];
      setBasketItems: (items: BasketItem[]) => void;
    };
  };
}

const BasketScreen: React.FC<BasketScreenProps> = ({ navigation, route }) => {
  const { basketItems: initialBasketItems, setBasketItems } = route.params;

  // Local state for basket items
  const [basketItems, setLocalBasketItems] = useState<BasketItem[]>(initialBasketItems);

  // Calculate total price
  const calculateTotalPrice = () => {
    return basketItems
      .reduce((acc, item) => acc + parseFloat(item.price.replace("$", "")) * item.quantity, 0)
      .toFixed(2);
  };

  const totalPrice = calculateTotalPrice();

  const handleDecrement = (index: number) => {
    const newBasketItems = [...basketItems];
    if (newBasketItems[index].quantity > 1) {
      newBasketItems[index].quantity -= 1;
    } else {
      newBasketItems.splice(index, 1); // Remove item if quantity is 1
    }
    setLocalBasketItems(newBasketItems);
    setBasketItems(newBasketItems); // Update state in HomeScreen
  };

  const handleIncrement = (index: number) => {
    const newBasketItems = [...basketItems];
    newBasketItems[index].quantity += 1;
    setLocalBasketItems(newBasketItems);
    setBasketItems(newBasketItems); // Update state in HomeScreen
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Basket</Text>
        <TouchableOpacity>
          <Icon name="search" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      {/* Location Container */}
      <View style={styles.locationContainer}>
        <Text style={styles.locationText}>Deliver</Text>
        <Icon name="place" size={24} color="#000" />
        <Text style={styles.toText}>to Selected Location</Text>
        <Icon name="arrow-drop-down" size={24} color="#000" />
      </View>

      {/* Delivery Info */}
      <View style={styles.deliveryInfo}>
        <Text style={styles.deliveryText}>
          Delivery in <Icon name="flash-on" size={16} color="#000" /> 30 min
        </Text>
        <Text style={styles.productCount}>
          {basketItems.reduce((acc, item) => acc + item.quantity, 0)} Products
        </Text>
      </View>

      {/* Basket Items List */}
      <ScrollView style={styles.itemList}>
        {basketItems.map((item, index) => (
          <View key={index} style={styles.itemContainer}>
            <Image source={item.source} style={styles.itemImage} />
            <View style={styles.itemDetails}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemPrice}>{item.price}</Text>
            </View>
            <View style={styles.quantityContainer}>
              <TouchableOpacity onPress={() => handleDecrement(index)}>
                <Text style={styles.quantityButton}>-</Text>
              </TouchableOpacity>
              <Text style={styles.quantityText}>{item.quantity}</Text>
              <TouchableOpacity onPress={() => handleIncrement(index)}>
                <Text style={styles.quantityButton}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Total and Payment Button */}
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total: ${totalPrice}</Text>
        <TouchableOpacity style={styles.paymentButton}>
          <Text style={styles.paymentButtonText}>Proceed to Payment</Text>
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
    padding: 10,
    backgroundColor: "#fff",
    elevation: 5,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: "#e0f7fa",
    borderRadius: 10,
    margin: 10,
  },
  locationText: {
    fontSize: 16,
    marginRight: 5,
    fontWeight: "bold",
  },
  toText: {
    fontSize: 16,
    marginRight: 5,
  },
  deliveryInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  deliveryText: {
    fontSize: 16,
  },
  productCount: {
    fontSize: 16,
    fontWeight: "bold",
  },
  itemList: {
    flex: 1,
    paddingHorizontal: 10,
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  itemImage: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
  itemDetails: {
    flex: 1,
    marginLeft: 10,
  },
  itemName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  itemPrice: {
    fontSize: 14,
    color: "#777",
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  quantityButton: {
    fontSize: 18,
    color: "#4CAF50",
    paddingHorizontal: 10,
  },
  quantityText: {
    fontSize: 16,
    paddingHorizontal: 10,
  },
  totalContainer: {
    padding: 15,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#ccc",
  },
  totalText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  paymentButton: {
    backgroundColor: "#4CAF50",
    borderRadius: 5,
    paddingVertical: 10,
    alignItems: "center",
    marginTop: 10,
  },
  paymentButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default BasketScreen;