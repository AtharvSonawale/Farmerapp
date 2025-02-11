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
      source={require("../../assets/images/Gemini_Generated_Image_omh53bomh53bomh5.jpg")} // Replace with your image path
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
          <Button
            title="Get OTP"
            onPress={handleSendOtp}
            disabled={loading}
          />
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

            <Button
              title="Save Password"
              onPress={handlePasswordReset}
              disabled={loading}
            />
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