import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const screenWidth = Dimensions.get("window").width;

const HomeScreen = ({ navigation }) => {
  const vegetableItems = [
    {
      name: "Yellow Bell Pepper",
      source: require("../../../assets/images/YellowBellPepper.jpg"),
      price: "$2.00",
      quantity: "1kg",
    },
    {
      name: "Tomatoes",
      source: require("../../../assets/images/Tomatoes.jpg"),
      price: "$1.50",
      quantity: "1kg",
    },
    {
      name: "Ginger",
      source: require("../../../assets/images/Ginger.jpg"),
      price: "$3.00",
      quantity: "500g",
    },
  ];

  const [searchText, setSearchText] = useState("");
  const [likedItems, setLikedItems] = useState(Array(vegetableItems.length).fill(false));
  const [messageVisible, setMessageVisible] = useState(false);
  const [basketItems, setBasketItems] = useState([]);

  const handleLike = (index) => {
    const newLikedItems = [...likedItems];
    newLikedItems[index] = !newLikedItems[index];
    setLikedItems(newLikedItems);

    setMessageVisible(true);
    setTimeout(() => {
      setMessageVisible(false);
    }, 2000);
  };

  const handleItemPress = (item) => {
    navigation.navigate("Item", { item });
  };

  const handleAdd = (index) => {
    const item = vegetableItems[index];
    const existingItem = basketItems.find((i) => i.name === item.name);
    if (existingItem) {
      existingItem.quantity += 1;
      setBasketItems([...basketItems]);
    } else {
      setBasketItems([...basketItems, { ...item, quantity: 1 }]);
    }
  };

  const handleDecrement = (index) => {
    const item = vegetableItems[index];
    const existingItem = basketItems.find((i) => i.name === item.name);
    if (existingItem) {
      if (existingItem.quantity > 1) {
        existingItem.quantity -= 1;
        setBasketItems([...basketItems]);
      } else {
        setBasketItems(basketItems.filter((i) => i.name !== item.name));
      }
    }
  };

  const handleIncrement = (index) => {
    const item = vegetableItems[index];
    const existingItem = basketItems.find((i) => i.name === item.name);
    if (existingItem) {
      existingItem.quantity += 1;
      setBasketItems([...basketItems]);
    }
  };

  const handleBasketPress = () => {
    navigation.navigate("Basket", { basketItems, setBasketItems });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("../../../assets/images/logo.png")}
          style={styles.logo}
        />
        <Text style={styles.logoText}>SupVeggies</Text>
        <TouchableOpacity style={styles.profileButton} onPress={() => navigation.navigate("Profile")}>
          <Icon name="account-circle" size={30} color="#4CAF50" />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollViewContent}>
        {/* Search Bar */}
        <View style={styles.searchBar}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search fresh veggies"
            value={searchText}
            onChangeText={setSearchText}
          />
          <TouchableOpacity style={styles.micButton}>
            <Icon name="mic" size={24} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.locationButton}>
            <Icon name="location-on" size={24} color="#000" />
          </TouchableOpacity>
        </View>

        {/* Location Container */}
        <View style={styles.locationContainer}>
          <Text style={styles.locationText}>Deliver</Text>
          <Icon name="place" size={24} color="#000" />
          <Text style={styles.toText}>to Selected Location</Text>
          <Icon name="arrow-drop-down" size={24} color="#000" />
        </View>

        {/* Banner Container */}
        <View style={styles.bannerContainer}>
          <Image
            source={require("../../../assets/images/banner3.jpg")}
            style={styles.bannerImage}
          />
          <Image
            source={require("../../../assets/images/banner4.jpg")}
            style={styles.bannerImage}
          />
        </View>

        {/* Category Buttons */}
        <View style={styles.categoryButtons}>
          {[
            "Your daily Essentials veggies",
            "Exotic veggies",
            "Organic veggies",
            "Natural Jaggery and more",
          ].map((category) => (
            <TouchableOpacity key={category} style={styles.categoryButton}>
              <Text style={styles.categoryButtonText}>{category}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Vegetable Items */}
        <Text style={styles.sectionTitle}>Your daily Essentials veggies</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {vegetableItems.map((item, index) => (
            <TouchableOpacity key={index} onPress={() => handleItemPress(item)} style={styles.itemContainer}>
              <Image source={item.source} style={styles.itemImage} />
              <Text style={styles.itemPrice}>Price: {item.price}</Text>
              <Text style={styles.itemQuantity}>Quantity: {item.quantity}</Text>
              <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={() => handleLike(index)} style={styles.loveButton}>
                  <Icon
                    name={likedItems[index] ? "favorite" : "favorite-border"}
                    size={24}
                    color={likedItems[index] ? "red" : "#000"}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.addButton} onPress={() => handleAdd(index)}>
                  {basketItems.find((i) => i.name === item.name) ? (
                    <View style={styles.quantityContainer}>
                      <TouchableOpacity onPress={() => handleDecrement(index)}>
                        <Text style={styles.quantityButton}>-</Text>
                      </TouchableOpacity>
                      <Text style={styles.quantityText}>{basketItems.find((i) => i.name === item.name).quantity}</Text>
                      <TouchableOpacity onPress={() => handleIncrement(index)}>
                        <Text style={styles.quantityButton}>+</Text>
                      </TouchableOpacity>
                    </View>
                  ) : (
                    <Text style={styles.addButtonText}>Add</Text>
                  )}
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Additional Images */}
        <View style={styles.imageContainer}>
          <Image
            source={require("../../../assets/images/banner3.jpg")}
            style={styles.landscapeImage}
            resizeMode="cover"
          />
        </View>
        <View style={styles.imageContainer}>
          <Image
            source={require("../../../assets/images/banner4.jpg")}
            style={styles.anotherImage}
            resizeMode="cover"
          />
        </View>
      </ScrollView>

      {/* Basket Button */}
      {basketItems.length > 0 && (
        <TouchableOpacity style={styles.basketContainer} onPress={handleBasketPress}>
          <View style={styles.basketBox}>
            <Text style={styles.basketText}>{basketItems.reduce((acc, item) => acc + item.quantity, 0)}</Text>
          </View>
        </TouchableOpacity>
      )}

      {/* Saved Message */}
      {messageVisible && (
        <View style={styles.messageContainer}>
          <Text style={styles.messageText}>Item saved for later</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  header: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 100,
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    elevation: 5,
    zIndex: 10,
  },
  logo: {
    width: 80,
    height: 80,
  },
  logoText: {
    fontSize: 24,
    fontWeight: "bold",
    marginLeft: 10,
    color: "#343434",
  },
  profileButton: {
    marginLeft: "auto",
  },
  scrollView: {
    marginTop: 100,
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    paddingVertical: 10,
    justifyContent: "space-between",
    borderRadius: 30,
    elevation: 3,
    margin: 15,
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 10,
  },
  micButton: {
    marginLeft: 10,
  },
  locationButton: {
    marginLeft: 10,
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
  bannerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  bannerImage: {
    width: "48%",
    height: 100,
    borderRadius: 10,
  },
  categoryButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  categoryButton: {
    flex: 1,
    alignItems: "center",
    padding: 10,
    backgroundColor: "#4CAF50",
    borderRadius: 10,
    marginHorizontal: 5,
  },
  categoryButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10,
    paddingHorizontal: 15,
  },
  itemContainer: {
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    elevation: 2,
    marginLeft: 10,
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
  loveButton: {
    marginVertical: 5,
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 5,
  },
  addButton: {
    backgroundColor: "#4CAF50",
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginLeft: 10,
  },
  addButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  quantityButton: {
    fontSize: 18,
    color: "#fff",
    paddingHorizontal: 10,
  },
  quantityText: {
    fontSize: 18,
    color: "#fff",
    paddingHorizontal: 10,
  },
  imageContainer: {
    overflow: "hidden",
    borderRadius: 20,
    marginVertical: 10,
    marginHorizontal: 10,
  },
  landscapeImage: {
    width: "100%",
    height: 290,
  },
  anotherImage: {
    width: "100%",
    height: 217,
  },
  messageContainer: {
    position: "absolute",
    bottom: 20,
    left: 0,
    right: 0,
    alignItems: "center",
  },
  messageText: {
    backgroundColor: "#4CAF50",
    color: "#fff",
    padding: 10,
    borderRadius: 5,
  },
  basketContainer: {
    position: "absolute",
    bottom: 20,
    right: 20,
  },
  basketBox: {
    backgroundColor: "#4CAF50",
    borderRadius: 10,
    padding: 10,
  },
  basketText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default HomeScreen;