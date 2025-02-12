import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { NavigationProp } from '@react-navigation/native';

type SplashScreenProps = {
  navigation: NavigationProp<any>;
};

const SplashScreen: React.FC<SplashScreenProps> = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Login'); // Navigate to Home after 2 seconds
    }, 1000);

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/images/Gemini_Generated_Image_9al4c79al4c79al41.jpg')} // Replace with your image path
        style={styles.image}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  image: {
    width: 800,
    height: 900,
  },
});

export default SplashScreen;
