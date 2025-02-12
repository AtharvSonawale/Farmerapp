import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { GestureHandlerRootView } from "react-native-gesture-handler"; // Import GestureHandlerRootView
import SplashScreen from "../components/screens/BuyerSide/SplashScreen";
import LoginScreen from "../components/screens/BuyerSide/LoginScreen";
import SignupScreen from "../components/screens/BuyerSide/SignupScreen";
import HomeScreen from "../components/screens/BuyerSide/HomeScreen";
import BasketScreen from "../components/screens/BuyerSide/BasketScreen";
import ForgotPasswordScreen from "@/components/screens/BuyerSide/ForgotPassword";
import ItemDetails from "@/components/screens/BuyerSide/ItemDetails";
import Profile from "../components/screens/BuyerSide/Profile"; // Ensure this path is correct
import Order from "../components/screens/BuyerSide/Order";
import AddressesScreen from "../components/screens/SellerSide/AddressesScreen";
import LocationGrantScreen from "../components/screens/BuyerSide/LocationGrantScreen";
import UseThisLocationScreen from "../components/screens/BuyerSide/UseThisLocationScreen";
import CurrentLocationScreen from "../components/screens/BuyerSide/CurrentLocation";
import SLoginScreen from "../components/screens/SellerSide/SLoginScreen";
import SHomeScreen from "../components/screens/SellerSide/SHomeScreen";
import SProfile from "@/components/screens/SellerSide/SProfile";
import ManageProducts from "@/components/screens/BuyerSide/ManageProducts";
import ListProductsScreen from "@/components/screens/BuyerSide/ListProductsScreen";
import IndividualProduct from "@/components/screens/BuyerSide/IndividualProduct";

const Stack = createNativeStackNavigator();

const App: React.FC = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      {" "}
      {/* Wrap the entire app with GestureHandlerRootView */}
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
        <Stack.Screen
          name="UseThisLocation"
          component={UseThisLocationScreen}
        />
        <Stack.Screen
          name="CurrentLocation"
          component={CurrentLocationScreen}
        />
        <Stack.Screen name="Basket" component={BasketScreen} />
        <Stack.Screen name="ManageProducts" component={ManageProducts} />
        <Stack.Screen name="ListProducts" component={ListProductsScreen} />
        <Stack.Screen name="IndividualProduct" component={IndividualProduct} />
      </Stack.Navigator>
    </GestureHandlerRootView>
  );
};

export default App;
