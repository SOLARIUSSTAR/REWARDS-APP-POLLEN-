import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

// Main EditPaymentPage component
const EditPaymentPage = ({ navigation }) => {
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
        
        <Text style={styles.headerTitle}>Edit Payment</Text>
        
        <View style={styles.headerSpacer} />
      </View>

      {/* Main content container - centered vertical stack with 20px padding */}
      <View style={styles.contentContainer}>
        <Text style={styles.placeholderText}>Edit Payment Page</Text>
        <Text style={styles.placeholderSubtext}>This page is under construction</Text>
      </View>
    </SafeAreaView>
  );
};

// Styles for the component - using exact colors from palette and View Rewards example
const styles = StyleSheet.create({
  // Main container with exact light cream background from View Rewards example
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
    borderBottomColor: '#E0D5C7', // Light border color to match cream theme
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
  
  // Header title styling - medium warm brown text from View Rewards example
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
  
  // Placeholder text styling
  placeholderText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#6B4226', // Medium warm brown from View Rewards example for contrast
    textAlign: 'center',
    marginBottom: 10,
  },
  
  // Placeholder subtext styling
  placeholderSubtext: {
    fontSize: 16,
    color: '#6B4226', // Medium warm brown from View Rewards example for contrast
    textAlign: 'center',
  },
});

export default EditPaymentPage;
