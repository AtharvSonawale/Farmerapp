import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Alert,
  StyleSheet,
  ActivityIndicator,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { mockDB } from "../../../assets/db/mockdb1"; // Importing mock database

const SLoginScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [attempts, setAttempts] = useState(0);
  const [loading, setLoading] = useState(false); // Loading state for the login process

  // Function to validate the login
  const handleLogin = async () => {
    setLoading(true); // Start loading

    try {
      const user = mockDB.users.find((user) => user.username === username);

      if (!user) {
        Alert.alert("Invalid username", "Username not found. Please sign up.", [
          { text: "OK", onPress: () => navigation.navigate("Signup") },
        ]);
        setLoading(false);
        return;
      }

      if (user.password !== password) {
        setAttempts((prev) => prev + 1);
        if (attempts + 1 >= 3) {
          Alert.alert("Password Attempt Limit Exceeded", "Forgot password?", [
            {
              text: "OK",
              onPress: () => navigation.navigate("ForgotPassword"),
            },
          ]);
        } else {
          Alert.alert("Invalid password", "Password does not match.");
        }
        setLoading(false);
        return;
      }

      Alert.alert("Success", "Logged in successfully!", [
        { text: "OK", onPress: () => navigation.navigate("SHome") },
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
      source={require("../../../assets/images/Farmer2.jpeg")} // Replace with your image path
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.header}>Login</Text>

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
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          autoCapitalize="none"
          autoCorrect={false}
        />

        <TouchableOpacity
          style={styles.loginButton}
          onPress={handleLogin}
          disabled={loading}
          activeOpacity={0.9} // Set the opacity when pressed
        >
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>

        {loading && (
          <ActivityIndicator
            size="large"
            color="#0000ff"
            style={styles.loading}
          />
        )}

        <Text style={styles.footerText}>
          Don't have an account?{" "}
          <Text
            style={styles.link}
            onPress={() => navigation.navigate("Signup")}
          >
            Sign up
          </Text>
        </Text>
        <Text style={styles.footerText}>
          <Text
            style={styles.link}
            onPress={() => navigation.navigate("ForgotPassword")}
          >
            Forgot Password?
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
    justifyContent: "flex-end", // Align content to the bottom
    alignItems: "center",
    paddingHorizontal: 16,
    paddingBottom: 50, // Add padding to avoid sticking to the very bottom
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

export default SLoginScreen;