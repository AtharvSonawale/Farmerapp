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

const ForgotPasswordScreen: React.FC<{ navigation: any }> = ({
  navigation,
}) => {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [otpSent, setOtpSent] = useState(false); // State to track if OTP has been sent
  const [otpRequested, setOtpRequested] = useState(false); // State to track if OTP has been requested

  // Function to handle sending OTP
  const handleSendOtp = async () => {
    setLoading(true);
    try {
      if (phone) {
        // Simulate sending OTP
        Alert.alert("Success", "OTP sent to your phone!", [
          { text: "OK" },
        ]);
        setOtpSent(true); // Show OTP input
        setOtpRequested(true); // Mark OTP as requested
      } else {
        Alert.alert("Error", "Please enter a valid phone number.");
      }
    } catch (error) {
      console.error(error);
      Alert.alert("Error", "Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  // Function to handle password reset
  const handlePasswordReset = async () => {
    setLoading(true);
    try {
      if (otp && newPassword && confirmPassword) {
        if (newPassword === confirmPassword) {
          // Simulate password reset
          Alert.alert("Success", "Password has been reset!", [
            { text: "OK", onPress: () => navigation.navigate("Login") },
          ]);
        } else {
          Alert.alert("Error", "Passwords do not match.");
        }
      } else {
        Alert.alert("Error", "Please fill in all fields.");
      }
    } catch (error) {
      console.error(error);
      Alert.alert("Error", "Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <ImageBackground
      source={require("../../../assets/images/Gemini_Generated_Image_omh53bomh53bomh5.jpg")} // Replace with your image path
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.header}>Forgot Password</Text>

        <TextInput
          style={styles.input}
          placeholder="Phone"
          value={phone}
          onChangeText={setPhone}
          autoCapitalize="none"
          autoCorrect={false}
        />

        {!otpRequested && (
          <TouchableOpacity
            style={styles.loginButton}
            onPress={handleSendOtp}
            disabled={loading}
            activeOpacity={0.9} // Set the opacity when pressed
          >
            <Text style={styles.loginButtonText}>Get OTP</Text>
          </TouchableOpacity>
        )}

        {loading && (
          <ActivityIndicator
            size="large"
            color="#0000ff"
            style={styles.loading}
          />
        )}

        {otpSent && (
          <>
            <TextInput
              style={styles.input}
              placeholder="Enter OTP"
              value={otp}
              onChangeText={setOtp}
              autoCapitalize="none"
              autoCorrect={false}
            />

            <TextInput
              style={styles.input}
              placeholder="New Password"
              value={newPassword}
              onChangeText={setNewPassword}
              secureTextEntry
              autoCapitalize="none"
              autoCorrect={false}
            />

            <TextInput
              style={styles.input}
              placeholder="Confirm Password"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              secureTextEntry
              autoCapitalize="none"
              autoCorrect={false}
            />

            <TouchableOpacity
              style={styles.savePasswordButton} // Use the new style for Save Password
              onPress={handlePasswordReset}
              disabled={loading}
              activeOpacity={0.9} // Set the opacity when pressed
            >
              <Text style={styles.loginButtonText}>Save Password</Text>
 </TouchableOpacity>
          </>
        )}

        <Text style={styles.footerText}>
          Remembered your password?{" "}
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
  savePasswordButton: {
    backgroundColor: "#007bff", // Different background color for Save Password
    paddingVertical: 10,
    borderRadius: 10, // Add curve to the button
    width: "50%",
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

export default ForgotPasswordScreen;