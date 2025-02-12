import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Alert,
  StyleSheet,
  ActivityIndicator,
  ImageBackground,
  TouchableOpacity, // Replace Button with TouchableOpacity
} from "react-native";
import { mockDB } from "../../../assets/db/mockdb"; // Importing mock database

const SignupScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [pincode, setPincode] = useState("");
  const [loading, setLoading] = useState(false); // Loading state for the signup process

  const validatePhoneNo = (phone: string) => /^[0-9]{10}$/.test(phone);
  const validatePassword = (password: string) =>
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      password
    );

  const handleSignUp = async () => {
    setLoading(true); // Start loading

    if (!validatePhoneNo(phoneNo)) {
      Alert.alert("Invalid Phone Number", "Phone number must be 10 digits.");
      setLoading(false);
      return;
    }

    if (mockDB.users.find((user) => user.phoneNo === phoneNo)) {
      Alert.alert(
        "Phone Number Exists",
        "This phone number is already associated with an account."
      );
      setLoading(false);
      return;
    }

    if (!validatePassword(password)) {
      Alert.alert(
        "Invalid Password",
        "Password must contain at least 8 characters, 1 uppercase letter, 1 lowercase letter, and 1 special character."
      );
      setLoading(false);
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert("Passwords Do Not Match", "Please confirm your password.");
      setLoading(false);
      return;
    }

    if (pincode.length !== 6 || isNaN(Number(pincode))) {
      Alert.alert("Invalid Pincode", "Pincode must be 6 digits.");
      setLoading(false);
      return;
    }

    try {
      mockDB.users.push({ username, password, phoneNo, pincode });
      Alert.alert("Success", "Account created successfully!", [
        { text: "OK", onPress: () => navigation.navigate("Home") },
      ]);
    } catch (error) {
      console.error(error);
      Alert.alert("Error", "Something went wrong. Please try again later.");
    } finally {
      setLoading(false); // End loading
    }
  };

  return (
    <ImageBackground
      source={require("../../../assets/images/Gemini_Generated_Image_r3cq1mr3cq1mr3cq.jpg")} // Replace with your image path
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.header}>Sign Up</Text>

        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          keyboardType="numeric"
          value={phoneNo}
          onChangeText={setPhoneNo}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          secureTextEntry
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <TextInput
          style={styles.input}
          placeholder="Pincode"
          keyboardType="numeric"
          value={pincode}
          onChangeText={setPincode}
        />

        <TouchableOpacity
          style={styles.loginButton}
          onPress={handleSignUp}
          disabled={loading}
          activeOpacity={0.9} // Set the opacity when pressed
        >
          <Text style={styles.loginButtonText}>Sign Up</Text>
        </TouchableOpacity>

        {loading && (
          <ActivityIndicator
            size="large"
            color="#0000ff"
            style={styles.loading}
          />
        )}

        <Text style={styles.footerText}>
          Already have an account?{" "}
          <Text
            style={styles.link}
            onPress={() => navigation.navigate("Login")}
          >
            Log in
          </Text>
        </Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
    borderRadius: 10,
    width: "85%", // Adjust width as needed
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "white",
  },
  input: {
    height: 45,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 15,
    marginBottom: 15,
    width: "100%",
    paddingLeft: 10,
    backgroundColor: "white", // Input background to make it readable
    shadowColor: "#000", // Shadow color
    shadowOffset: { width: 0, height: 2 }, // Shadow offset
    shadowOpacity: 0.25, // Shadow opacity
    shadowRadius: 3.84, // Shadow blur radius
    elevation: 5, // Elevation for Android
  },
  loginButton: {
    backgroundColor: "#007bff", // Button background color
    paddingVertical: 10,
    borderRadius: 10, // Add curve to the button
    width: "25%",
    alignItems: "center",
    shadowColor: "#000", // Shadow color
    shadowOffset: { width: 0, height: 1 }, // Shadow offset
    shadowOpacity: 0.25, // Shadow opacity
    shadowRadius: 3.84, // Shadow blur radius
    elevation: 5, // Elevation for Android
  },
  loginButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  footerText: {
    marginTop: 20,
    color: "white",
  },
  link: {
    color: "white",
  },
  loading: {
    marginTop: 10,
  },
});

export default SignupScreen;