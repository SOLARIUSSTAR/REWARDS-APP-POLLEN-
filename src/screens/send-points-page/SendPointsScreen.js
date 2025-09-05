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

// Main SendPointsScreen component
const SendPointsScreen = ({ navigation, route }) => {
  // Get the business name and current points passed from the navigation
  const { businessName, currentPoints } = route.params || { businessName: 'Business', currentPoints: '10P' };
  
  // State variables to store user input
  const [amount, setAmount] = useState('');
  const [code, setCode] = useState('');

  // Function to handle the send points process
  const handleSendPoints = () => {
    // Basic validation - check if fields are not empty
    if (!amount.trim() || !code.trim()) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    // Basic amount validation - check if it's a positive number
    const amountValue = parseFloat(amount);
    if (isNaN(amountValue) || amountValue <= 0) {
      Alert.alert('Error', 'Please enter a valid amount');
      return;
    }

    // Check if user has enough points
    const currentPointsValue = parseInt(currentPoints.replace('P', '')) || 0;
    if (amountValue > currentPointsValue) {
      Alert.alert('Error', 'You don\'t have enough points to send');
      return;
    }

    // Show success message
    Alert.alert('Success', `Successfully sent ${amount}P to user ${code}`, [
      {
        text: 'OK',
        onPress: () => {
          // Reset form and navigate back to View Rewards
          setAmount('');
          setCode('');
          navigation.navigate('ViewRewards', { 
            businessName: businessName, 
            points: currentPoints 
          });
        },
      },
    ]);
  };

  // Function to go back to View Rewards screen
  const handleBackToViewRewards = () => {
    navigation.navigate('ViewRewards', { 
      businessName: businessName, 
      points: currentPoints 
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Status bar with light content for dark background */}
      <StatusBar style="light" />
      
      {/* Header section with back button and title */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={handleBackToViewRewards}
        >
          <Text style={styles.backButtonText}>← Back</Text>
        </TouchableOpacity>
        
        <Text style={styles.headerTitle}>Send Points</Text>
        
        <View style={styles.headerSpacer} />
      </View>

      {/* Main content container - centered vertical stack */}
      <View style={styles.contentContainer}>
        {/* Amount input field */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter amount"
            placeholderTextColor="#6B422680" // Semi-transparent medium warm brown
            value={amount}
            onChangeText={setAmount}
            keyboardType="numeric"
            autoCapitalize="none"
            autoCorrect={false}
          />
        </View>
        
        {/* Code input field - 15px spacing from amount input */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter user code"
            placeholderTextColor="#6B422680" // Semi-transparent medium warm brown
            value={code}
            onChangeText={setCode}
            autoCapitalize="none"
            autoCorrect={false}
          />
        </View>
        
        {/* Send button - 15px spacing from code input */}
        <TouchableOpacity
          style={styles.sendButton}
          onPress={handleSendPoints}
          activeOpacity={0.8}
        >
          <Text style={styles.sendButtonText}>Send</Text>
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
  
  // Individual input container
  inputContainer: {
    width: '100%',
    marginBottom: 15, // 15px spacing between inputs as requested
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
  
  // Send button styling - 80% width, 50px high
  sendButton: {
    width: '80%', // 80% width as requested
    height: 50, // 50px high as requested
    backgroundColor: '#F5E6D3', // Crema from palette - exact pastel color
    borderRadius: 25, // Rounded corners
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  // Send button text styling - very dark orange text from View Rewards example
  sendButtonText: {
    color: '#6B4226', // Medium warm brown from View Rewards example for contrast
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default SendPointsScreen;

