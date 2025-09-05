import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Alert,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

// Main SettingsPage component
const SettingsPage = ({ navigation }) => {
  // Function to handle sign out
  const handleSignOut = () => {
    Alert.alert(
      'Sign Out',
      'Are you sure you want to sign out?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Sign Out',
          style: 'destructive',
          onPress: () => {
            // Navigate back to Sign-In page
            navigation.navigate('SignIn');
          },
        },
      ]
    );
  };

  // Function to navigate to Edit page
  const handleEditBusinesses = () => {
    navigation.navigate('Edit');
  };

  // Function to navigate to Edit Payment page
  const handleEditPayment = () => {
    navigation.navigate('EditPayment');
  };

  // Function to go back to My Businesses screen
  const handleBackToBusinesses = () => {
    navigation.navigate('MyBusinesses');
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Status bar with light content for dark background */}
      <StatusBar style="light" />
      
      {/* Header section with back button and title */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={handleBackToBusinesses}
        >
          <Text style={styles.backButtonText}>← Back</Text>
        </TouchableOpacity>
        
        <Text style={styles.headerTitle}>Settings</Text>
        
        <View style={styles.headerSpacer} />
      </View>

      {/* Main content container - centered vertical stack with 20px padding */}
      <View style={styles.contentContainer}>
        {/* Sign Out button */}
        <TouchableOpacity
          style={styles.settingsButton}
          onPress={handleSignOut}
          activeOpacity={0.8}
        >
          <Text style={styles.settingsButtonText}>Sign Out</Text>
        </TouchableOpacity>
        
        {/* Edit My Businesses button - 15px spacing from Sign Out */}
        <TouchableOpacity
          style={styles.settingsButton}
          onPress={handleEditBusinesses}
          activeOpacity={0.8}
        >
          <Text style={styles.settingsButtonText}>Edit Businesses</Text>
        </TouchableOpacity>
        
        {/* Edit Payment button - 15px spacing from Edit Businesses */}
        <TouchableOpacity
          style={styles.settingsButton}
          onPress={handleEditPayment}
          activeOpacity={0.8}
        >
          <Text style={styles.settingsButtonText}>Edit Payment</Text>
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
  
  // Settings button styling - 80% width, 50px high
  settingsButton: {
    width: '80%', // 80% width as requested
    height: 50, // 50px high as requested
    backgroundColor: '#F5E6D3', // Crema from palette - exact pastel color
    borderRadius: 25, // Rounded corners
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15, // 15px spacing between buttons as requested
  },
  
  // Settings button text styling - very dark orange text from View Rewards example
  settingsButtonText: {
    color: '#6B4226', // Medium warm brown from View Rewards example for contrast
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default SettingsPage;

