import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { GestureHandlerRootView } from "react-native-gesture-handler"; // Import GestureHandlerRootView
import SplashScreen from "../../../FarmerApp/Frontend/components/screens/SplashScreen";
import LoginScreen from "../../../FarmerApp/Frontend/components/screens/LoginScreen";
import SignupScreen from "../../../FarmerApp/Frontend/components/screens/SignupScreen";
import HomeScreen from "../../../FarmerApp/Frontend/components/screens/HomeScreen";
import BasketScreen from "../../../FarmerApp/Frontend/components/screens/BasketScreen";
import ForgotPasswordScreen from "@/components/screens/ForgotPassword";
import ItemDetails from "@/components/screens/ItemDetails";
import Profile from "../../../FarmerApp/Frontend/components/screens/Profile"; // Ensure this path is correct
import Order from "../../../FarmerApp/Frontend/components/screens/Order";
import AddressesScreen from "../../../FarmerApp/Frontend/components/screens/AddressesScreen";
import LocationGrantScreen from "../../../FarmerApp/Frontend/components/screens/LocationGrantScreen";
import UseThisLocationScreen from "../../../FarmerApp/Frontend/components/screens/UseThisLocationScreen";
import CurrentLocationScreen from "../../../FarmerApp/Frontend/components/screens/CurrentLocation";
import SLoginScreen from "../../../FarmerApp/Frontend/components/screens/SLoginScreen";
import SHomeScreen from "../../../FarmerApp/Frontend/components/screens/SHomeScreen";
import SProfile from "@/components/screens/SProfile";
import ManageProducts from "@/components/screens/ManageProducts";
import ListProductsScreen from "@/components/screens/ListProductsScreen";
import IndividualProduct from "@/components/screens/IndividualProduct";

const Stack = createNativeStackNavigator();

const App: React.FC = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}> {/* Wrap the entire app with GestureHandlerRootView */}
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SLogin" component={SLoginScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SHome" component={SHomeScreen} />
        <Stack.Screen name="Item" component={ItemDetails} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="SProfile" component={SProfile} />
        <Stack.Screen name="Order" component={Order} />
        <Stack.Screen name="Addresses" component={AddressesScreen} />
        <Stack.Screen name="LocationGrant" component={LocationGrantScreen} />
        <Stack.Screen name="UseThisLocation" component={UseThisLocationScreen} />
        <Stack.Screen name="CurrentLocation" component={CurrentLocationScreen} />
        <Stack.Screen name="Basket" component={BasketScreen} />
        <Stack.Screen name="ManageProducts" component={ManageProducts} />
        <Stack.Screen name="ListProducts" component={ListProductsScreen} />
        <Stack.Screen name="IndividualProduct" component={IndividualProduct} />
      </Stack.Navigator>
    </GestureHandlerRootView>
  );
};

export default App;