import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

// Main MyBusinessesScreen component
const MyBusinessesScreen = ({ navigation }) => {
  // Sample business data - you can replace this with real data later
  const businesses = [
    {
      id: 1,
      name: 'Cafe Mocha',
      points: '10P',
    },
    {
      id: 2,
      name: 'Corner Grocer',
      points: '25P',
    },
  ];

  // Function to handle order button press
  const handleOrder = (businessName) => {
    // Navigate to the Order screen and pass the business name
    navigation.navigate('Order', { businessName: businessName });
  };

  // Function to handle view rewards button press
  const handleViewRewards = (businessName, points) => {
    // Navigate to the View Rewards screen and pass the business name and points
    navigation.navigate('ViewRewards', { businessName: businessName, points: points });
  };

  // Function to navigate to Settings page
  const handleSettings = () => {
    navigation.navigate('Settings');
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Status bar with light content for dark background */}
      <StatusBar style="light" />
      
      {/* Header section with title and settings icon - no back button needed */}
      <View style={styles.header}>
        {/* Left spacer for balanced layout */}
        <View style={styles.headerSpacer} />
        
        <Text style={styles.headerTitle}>My Businesses</Text>
        
        {/* Settings icon in top right corner */}
        <TouchableOpacity
          style={styles.settingsButton}
          onPress={handleSettings}
        >
          <Text style={styles.settingsIcon}>⚙</Text>
        </TouchableOpacity>
      </View>

      {/* Scrollable content container */}
      <ScrollView 
        style={styles.scrollContainer}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Business cards container */}
        <View style={styles.businessesContainer}>
          {/* Map through each business to create a business card */}
          {businesses.map((business) => (
            <View key={business.id} style={styles.businessCard}>
              {/* Business name label */}
              <Text style={styles.businessName}>{business.name}</Text>
              
              {/* Buttons container */}
              <View style={styles.buttonsContainer}>
                {/* Order button */}
                <TouchableOpacity
                  style={styles.orderButton}
                  onPress={() => handleOrder(business.name)}
                  activeOpacity={0.8}
                >
                  <Text style={styles.orderButtonText}>Order</Text>
                </TouchableOpacity>
                
                {/* View Rewards button */}
                <TouchableOpacity
                  style={styles.viewRewardsButton}
                  onPress={() => handleViewRewards(business.name, business.points)}
                  activeOpacity={0.8}
                >
                  <Text style={styles.viewRewardsButtonText}>{business.points}</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
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
  
  // Header section with title and settings icon - no back button
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#E0D5C7', // Light border color to match cream theme
  },
  
  // Header spacer for balanced layout (replaces back button)
  headerSpacer: {
    width: 60, // Same width as settings button for visual balance
  },
  
  // Header title styling - medium warm brown text from View Rewards example
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#6B4226', // Medium warm brown from View Rewards example for contrast
    textAlign: 'center',
    flex: 1,
  },
  
  // Settings button styling - 30x30px gear icon
  settingsButton: {
    width: 30, // 30px width as requested
    height: 30, // 30px height as requested
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15, // Circular button
  },
  
  // Settings icon styling - medium warm brown color from View Rewards example
  settingsIcon: {
    fontSize: 20,
    color: '#6B4226', // Medium warm brown from View Rewards example for contrast
  },
  
  // Scroll container styling
  scrollContainer: {
    flex: 1,
  },
  
  // Scroll content styling for proper spacing
  scrollContent: {
    paddingVertical: 20,
  },
  
  // Business cards container
  businessesContainer: {
    paddingHorizontal: 20,
  },
  
  // Individual business card styling - pastel color background from palette
  businessCard: {
    backgroundColor: '#F0D8C0', // Oats from palette - exact pastel color
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    alignItems: 'center',
    borderWidth: 1, // Subtle border for definition
    borderColor: '#E0D5C7', // Light border color
  },
  
  // Business name styling - medium warm brown text from View Rewards example
  businessName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#6B4226', // Medium warm brown from View Rewards example for contrast
    marginBottom: 15,
    textAlign: 'center',
  },
  
  // Buttons container for horizontal layout
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  
  // Order button styling - pastel color background from palette
  orderButton: {
    backgroundColor: '#F4B895', // Peach from palette - exact pastel color
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    minWidth: 80,
    borderWidth: 1, // Subtle border for definition
    borderColor: '#E0D5C7', // Light border color
  },
  
  // Order button text styling - medium warm brown text from View Rewards example
  orderButtonText: {
    color: '#6B4226', // Medium warm brown from View Rewards example for contrast
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  
  // View Rewards button styling - pastel color background from palette
  viewRewardsButton: {
    backgroundColor: '#F2A76B', // Dreamsicle from palette - exact pastel color
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    minWidth: 80,
    borderWidth: 1, // Subtle border for definition
    borderColor: '#E0D5C7', // Light border color
  },
  
  // View Rewards button text styling - medium warm brown text from View Rewards example
  viewRewardsButtonText: {
    color: '#6B4226', // Medium warm brown from View Rewards example for contrast
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default MyBusinessesScreen;

