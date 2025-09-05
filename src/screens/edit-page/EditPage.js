import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Alert,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

// Main EditPage component
const EditPage = ({ navigation }) => {
  // State variable to store the business passcode
  const [passcode, setPasscode] = useState('');

  // Function to handle the confirm action
  const handleConfirm = () => {
    // Basic validation - check if passcode is not empty
    if (!passcode.trim()) {
      Alert.alert('Error', 'Please enter a business passcode');
      return;
    }

    // Basic passcode validation - check if it's at least 4 characters
    if (passcode.length < 4) {
      Alert.alert('Error', 'Passcode must be at least 4 characters long');
      return;
    }

    // Show success message
    Alert.alert('Success', 'Business passcode confirmed successfully!', [
      {
        text: 'OK',
        onPress: () => {
          // Reset form and navigate back to Settings
          setPasscode('');
          navigation.navigate('Settings');
        },
      },
    ]);
  };

  // Function to go back to Settings page
  const handleBackToSettings = () => {
    navigation.navigate('Settings');
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Status bar with light content for dark background */}
      <StatusBar style="light" />
      
      {/* Header section with back button and title */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={handleBackToSettings}
        >
          <Text style={styles.backButtonText}>← Back</Text>
        </TouchableOpacity>
        
        <Text style={styles.headerTitle}>Edit</Text>
        
        <View style={styles.headerSpacer} />
      </View>

      {/* Main content container - centered vertical stack with 20px padding */}
      <View style={styles.contentContainer}>
        {/* Business Passcode input field */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter passcode"
            placeholderTextColor="#6B422680" // Semi-transparent medium warm brown
            value={passcode}
            onChangeText={setPasscode}
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={true} // Hide the passcode for security
          />
        </View>
        
        {/* Confirm button - 15px spacing from input */}
        <TouchableOpacity
          style={styles.confirmButton}
          onPress={handleConfirm}
          activeOpacity={0.8}
        >
          <Text style={styles.confirmButtonText}>Confirm</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

// Styles for the component - using exact colors from palette and View Rewards example
const styles = StyleSheet.create({
  // Main container with exact background color from View Rewards example
  container: {
    flex: 1,
    backgroundColor: '#FAF6ED', // Exact light cream background from View Rewards example image
  },
  
  // Header section with back button and title
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#9B6A3B',
  },
  
  // Back button styling - cream background with medium brown text (matching View Rewards)
  backButton: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#FAF6ED', // Same cream background as main container
    borderWidth: 1, // Subtle border for definition
    borderColor: '#E0D5C7', // Light border color
  },
  
  // Back button text styling - medium warm brown text (matching View Rewards)
  backButtonText: {
    color: '#6B4226', // Medium warm brown from View Rewards example for contrast
    fontSize: 16,
    fontWeight: '600',
  },
  
  // Header title styling - very dark orange text from View Rewards example
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#6B4226', // Medium warm brown from View Rewards example for contrast
    textAlign: 'center',
    flex: 1,
  },
  
  // Header spacer for balanced layout
  headerSpacer: {
    width: 60, // Same width as back button for balance
  },
  
  // Main content container - centered vertical stack with 20px padding
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20, // 20px padding as requested
  },
  
  // Input container
  inputContainer: {
    width: '100%',
    marginBottom: 15, // 15px spacing before confirm button
  },
  
  // Input field styling - 80% width, 50px high, 2px border, 10px radius
  input: {
    width: '80%', // 80% width as requested
    height: 50, // 50px high as requested
    backgroundColor: '#F5E6D3', // Crema from palette - exact pastel color
    borderRadius: 10, // 10px radius as requested
    paddingHorizontal: 20,
    fontSize: 16,
    color: '#6B4226', // Medium warm brown from View Rewards example for contrast
    borderWidth: 2, // 2px border as requested
    borderColor: '#8B4513', // Very dark orange border for contrast
    alignSelf: 'center', // Center the input within its container
  },
  
  // Confirm button styling - 80% width, 50px high
  confirmButton: {
    width: '80%', // 80% width as requested
    height: 50, // 50px high as requested
    backgroundColor: '#F5E6D3', // Crema from palette - exact pastel color
    borderRadius: 25, // Rounded corners
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  // Confirm button text styling - very dark orange text from View Rewards example
  confirmButtonText: {
    color: '#6B4226', // Medium warm brown from View Rewards example for contrast
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default EditPage;

