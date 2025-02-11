import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Modal,
  TextInput,
  Button,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons"; // For icons

const ManageProducts = ({ navigation }) => {
  const [products, setProducts] = useState([
    { id: "1", name: "Tomatoes", price: "2.00" },
    { id: "2", name: "Potatoes", price: "1.50" },
    { id: "3", name: "Carrots", price: "1.20" },
  ]);
  const [modalVisible, setModalVisible] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");

  const handleAddProduct = () => {
    if (currentProduct) {
      // Edit existing product
      setProducts((prevProducts) =>
        prevProducts.map((product) =>
          product.id === currentProduct.id
            ? { ...product, name: productName, price: productPrice }
            : product
        )
      );
    } else {
      // Add new product
      const newProduct = {
        id: Math.random().toString(),
        name: productName,
        price: productPrice,
      };
      setProducts((prevProducts) => [...prevProducts, newProduct]);
    }
    resetForm();
  };

  const resetForm = () => {
    setProductName("");
    setProductPrice("");
    setCurrentProduct(null);
    setModalVisible(false);
  };

  const handleEditProduct = (product) => {
    setCurrentProduct(product);
    setProductName(product.name);
    setProductPrice(product.price);
    setModalVisible(true);
  };

  const handleDeleteProduct = (id) => {
    setProducts((prevProducts) => prevProducts.filter((product) => product.id !== id));
  };

  const renderProductItem = ({ item }) => (
    <View style={styles.productItem}>
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productPrice}>${item.price}</Text>
      <View style={styles.productActions}>
        <TouchableOpacity onPress={() => handleEditProduct(item)}>
          <Icon name="edit" size={24} color="#4CAF50" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleDeleteProduct(item.id)}>
          <Icon name="delete" size={24} color="#f44336" />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header with back arrow and centered title */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={30} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Manage Products</Text>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Icon name="add" size={30} color="#4CAF50" />
        </TouchableOpacity>
      </View>

      {/* Product List */}
      <FlatList
        data={products}
        renderItem={renderProductItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.productList}
      />

      {/* Modal for Adding/Editing Product */}
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={resetForm}
      >
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>{currentProduct ? "Edit Product" : "Add Product"}</Text>
          <TextInput
            style={styles.input}
            placeholder="Product Name"
            value={productName}
            onChangeText={setProductName}
          />
          <TextInput
            style={styles.input}
            placeholder="Product Price"
            value={productPrice}
            onChangeText={setProductPrice}
            keyboardType="numeric"
          />
          <Button title="Save" onPress={handleAddProduct} />
          <Button title="Cancel" onPress={resetForm} color="#f44336" />
        </View>
      </Modal>
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
    flex: 1,
    textAlign: "center",
    marginLeft: 10, // Adjust margin to center the title properly
  },
  productList: {
    padding: 15,
  },
  productItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    backgroundColor: "#fff",
    borderRadius: 10,
    marginBottom: 10,
    elevation: 2,
  },
  productName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  productPrice: {
    fontSize: 16,
    color: "#777",
  },
  productActions: {
    flexDirection: "row",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
});

export default ManageProducts;