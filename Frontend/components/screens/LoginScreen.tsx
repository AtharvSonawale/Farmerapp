import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
  StyleSheet,
  ActivityIndicator,
  ImageBackground,
} from "react-native";
import { mockDB } from "../../assets/db/mockdb"; // Importing mock database

const LoginScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [attempts, setAttempts] = useState(0);
  const [loading, setLoading] = useState(false); // Loading state for the login process
  const [clickCount, setClickCount] = useState(0); // Track the number of clicks on the Login header

  // Function to handle clicks on the Login header
  const handleHeaderClick = () => {
    setClickCount((prev) => prev + 1); // Increment click count

    // Check if the header has been clicked 3 times
    if (clickCount + 1 >= 3) {
      navigation.navigate("SLogin");
      setClickCount(0); // Reset click count after navigation
    }
  };

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
      source={require("../../assets/images/Gemini_Generated_Image_omh53bomh53bomh5.jpg")} // Replace with your image path
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.header} onPress={handleHeaderClick}>
          Login
        </Text>

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

        <Button title="Login" onPress={handleLogin} disabled={loading} />

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

export default LoginScreen;