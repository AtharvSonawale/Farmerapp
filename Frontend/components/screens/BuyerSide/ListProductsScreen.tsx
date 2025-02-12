import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Button,
  Image,
  Modal,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";
import * as ImagePicker from "expo-image-picker"; // For image selection

const ListProductsScreen = ({ navigation }) => {
  const [productName, setProductName] = useState("");
  const [productImage, setProductImage] = useState(null); // Store the selected image URI
  const [productDescription, setProductDescription] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [selectedWeight, setSelectedWeight] = useState("1kg"); // Default weight unit
  const [productionDate, setProductionDate] = useState("");
  const [isWeightModalVisible, setIsWeightModalVisible] = useState(false); // For weight dropdown

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      const fileSizeInMB = result.assets[0].fileSize / (1024 * 1024);
      if (fileSizeInMB > 2) {
        Alert.alert("Error", "The image size exceeds 2MB.");
      } else {
        setProductImage({ uri: result.assets[0].uri });
      }
    }
  };

  const handleSaveProduct = () => {
    // Validate inputs
    if (
      !productName ||
      !productImage ||
      !productDescription ||
      !productPrice ||
      !productionDate
    ) {
      alert("Please fill in all fields.");
      return;
    }

    // Logic to save the product (e.g., send to backend or update state)
    const newProduct = {
      name: productName,
      image: productImage.uri, // Use the image URI
      description: productDescription,
      price: productPrice,
      weight: selectedWeight,
      productionDate: productionDate,
    };
    console.log("New Product:", newProduct);

    // Reset form fields
    setProductName("");
    setProductImage(null);
    setProductDescription("");
    setProductPrice("");
    setSelectedWeight("1kg");
    setProductionDate("");

    // Navigate back to the ListedProductsScreen
    navigation.goBack();
  };

  const validatePrice = (text) => {
    // Only allow numbers
    if (/^\d*$/.test(text)) {
      setProductPrice(text);
    }
  };

  const validateDate = (text) => {
    // Only allow numbers and enforce YYYY-MM-DD format
    if (/^\d{0,4}-?\d{0,2}-?\d{0,2}$/.test(text)) {
      setProductionDate(text);
    }
  };

  const weightOptions = ["1kg", "500g", "250g"];

  return (
    <View style={styles.container}>
      {/* Product Form */}
      <View style={styles.formContainer}>
        <Text style={styles.formTitle}>Add New Product</Text>

        {/* Product Name */}
        <TextInput
          style={styles.input}
          placeholder="Product Name"
          value={productName}
          onChangeText={setProductName}
        />

        {/* Product Image */}
        <TouchableOpacity style={styles.imagePickerButton} onPress={pickImage}>
          <Text style={styles.imagePickerText}>Choose Image</Text>
        </TouchableOpacity>
        {productImage && (
          <Image source={productImage} style={styles.selectedImage} />
        )}

        {/* Product Description */}
        <TextInput
          style={[styles.input, { height: 100 }]} // Larger input for description
          placeholder="Product Description"
          value={productDescription}
          onChangeText={setProductDescription}
          multiline
        />

        {/* Product Price */}
        <View style={styles.priceContainer}>
          <TextInput
            style={[styles.input, { flex: 1 }]}
            placeholder="Product Price"
            value={productPrice}
            onChangeText={validatePrice}
            keyboardType="numeric"
          />
          <TouchableOpacity
            style={styles.weightDropdownButton}
            onPress={() => setIsWeightModalVisible(true)}
          >
            <Text style={styles.weightDropdownText}>{selectedWeight}</Text>
          </TouchableOpacity>
        </View>

        {/* Weight Dropdown Modal */}
        <Modal
          transparent={true}
          visible={isWeightModalVisible}
          onRequestClose={() => setIsWeightModalVisible(false)}
        >
          <TouchableWithoutFeedback
            onPress={() => setIsWeightModalVisible(false)}
          >
            <View style={styles.modalOverlay}>
              <View style={styles.modalContent}>
                {weightOptions.map((weight, index) => (
                  <TouchableOpacity
                    key={index}
                    style={styles.weightOption}
                    onPress={() => {
                      setSelectedWeight(weight);
                      setIsWeightModalVisible(false);
                    }}
                  >
                    <Text style={styles.weightOptionText}>{weight}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          </TouchableWithoutFeedback>
        </Modal>

        {/* Production Date */}
        <TextInput
          style={styles.input}
          placeholder="Production Date (YYYY-MM-DD)"
          value={productionDate}
          onChangeText={validateDate}
          keyboardType="numeric"
        />

        {/* Save Button */}
        <Button title="Save Product" onPress={handleSaveProduct} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#f5f5f5",
    },
    formContainer: {
      padding: 20,
      backgroundColor: "#fff",
      margin: 15,
      borderRadius: 10,
      elevation: 2,
    },
    formTitle: {
      fontSize: 20,
      fontWeight: "bold",
      marginBottom: 20,
      textAlign: "center",
    },
    input: {
      height: 50, // Increased height for better alignment
      borderColor: "#ccc",
      borderWidth: 1,
      marginBottom: 15,
      paddingHorizontal: 10,
      borderRadius: 5,
    },
    imagePickerButton: {
      backgroundColor: "#007BFF",
      padding: 10,
      borderRadius: 5,
      alignItems: "center",
      marginBottom: 15,
    },
    imagePickerText: {
      color: "#fff",
      fontWeight: "bold",
    },
    selectedImage: {
      width: 100,
      height: 100,
      marginBottom: 15,
      borderRadius: 5,
    },
    priceContainer: {
      flexDirection: "row",
      alignItems: "center", // Ensure vertical alignment
      marginBottom: 15,
    },
    weightDropdownButton: {
      backgroundColor: "#007BFF",
      height: 50, // Match the height of the input field
      paddingHorizontal: 15,
      borderRadius: 5,
      marginLeft: 10,
      justifyContent: "center", // Center the text vertically
      alignItems: "center", // Center the text horizontally
    },
    weightDropdownText: {
      color: "#fff",
      fontWeight: "bold",
    },
    modalOverlay: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    modalContent: {
      width: 300,
      backgroundColor: "#fff",
      borderRadius: 10,
      padding: 20,
      elevation: 5,
    },
    weightOption: {
      padding: 10,
    },
    weightOptionText: {
      fontSize: 18,
    },
  });

export default ListProductsScreen;