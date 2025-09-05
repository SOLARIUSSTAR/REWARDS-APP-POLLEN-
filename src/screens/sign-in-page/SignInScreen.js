import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

// Main SignInScreen component
const SignInScreen = ({ navigation }) => {
  // State variables to store user input
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Function to handle the login process
  const handleLogin = () => {
    // Basic validation - check if fields are not empty
    if (!username.trim() || !password.trim()) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    // Reset form and navigate directly to My Businesses page
    setUsername('');
    setPassword('');
    navigation.navigate('MyBusinesses');
  };

  return (
    <View style={styles.container}>
      {/* Status bar with light content for dark background */}
      <StatusBar style="light" />
      
      {/* Main content container - centers everything vertically */}
      <View style={styles.contentContainer}>
        
        {/* Username input field - circular bubble design */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Username"
            placeholderTextColor="#6B422680" // Semi-transparent medium warm brown
            value={username}
            onChangeText={setUsername}
            autoCapitalize="none"
            autoCorrect={false}
          />
        </View>
        
        {/* Password input field - circular bubble design */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#6B422680" // Semi-transparent medium warm brown
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
            autoCapitalize="none"
            autoCorrect={false}
          />
        </View>
        
        {/* Login button - circular button design */}
        <TouchableOpacity
          style={styles.loginButton}
          onPress={handleLogin}
          activeOpacity={0.8}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        
      </View>
    </View>
  );
};

// Styles for the component - using exact colors from palette and View Rewards example
const styles = StyleSheet.create({
  // Main container with exact light cream background from View Rewards example
  container: {
    flex: 1,
    backgroundColor: '#FAF6ED', // Exact light cream background from View Rewards example image
  },
  
  // Content container for centering all elements vertically
  contentContainer: {
    flex: 1,
    justifyContent: 'center', // Centers content vertically
    alignItems: 'center', // Centers content horizontally
    paddingHorizontal: 40,
  },
  
  // Individual input container for each circular bubble
  inputContainer: {
    width: 280, // Fixed width for consistent circular shape
    height: 60, // Fixed height for consistent circular shape
    marginBottom: 30, // Equal spacing between elements
  },
  
  // Input field styling - circular bubble with pastel color from palette
  input: {
    width: '100%',
    height: '100%',
    backgroundColor: '#F5E6D3', // Crema from palette - exact pastel color
    borderRadius: 30, // Makes it perfectly circular
    paddingHorizontal: 25, // Horizontal padding for text
    paddingVertical: 15, // Vertical padding for text
    fontSize: 16,
    color: '#6B4226', // Medium warm brown from View Rewards example for contrast
    textAlign: 'center', // Center the text
    borderWidth: 1, // Subtle border for definition
    borderColor: '#E0D5C7', // Light border color
  },
  
  // Login button styling - circular button with pastel color from palette
  loginButton: {
    width: 280, // Same size as input fields
    height: 60, // Same size as input fields
    backgroundColor: '#F4C2A1', // Apricot from palette - exact pastel color
    borderRadius: 30, // Makes it perfectly circular
    justifyContent: 'center', // Centers text vertically
    alignItems: 'center', // Centers text horizontally
    marginTop: 10, // Small top margin for visual balance
    borderWidth: 1, // Subtle border for definition
    borderColor: '#E0D5C7', // Light border color
  },
  
  // Button text styling - medium warm brown text from View Rewards example
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#6B4226', // Medium warm brown from View Rewards example for contrast
    textAlign: 'center',
  },
});

export default SignInScreen;

