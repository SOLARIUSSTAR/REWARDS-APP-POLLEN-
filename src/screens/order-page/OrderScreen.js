import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

// Main OrderScreen component
const OrderScreen = ({ navigation, route }) => {
  // Get the business name passed from the navigation
  const { businessName } = route.params || { businessName: 'Business' };
  
  // State to track items in cart
  const [cart, setCart] = useState([]);
  
  // Sample menu items - you can replace this with real data later
  const menuItems = [
    {
      id: 1,
      name: 'Coffee',
      price: '$5',
      points: '0.5 P',
      description: 'Fresh brewed coffee',
    },
    {
      id: 2,
      name: 'Sandwich',
      price: '$10',
      points: '1 P',
      description: 'Delicious sandwich',
    },
    {
      id: 3,
      name: 'Salad',
      price: '$8',
      points: '0.8 P',
      description: 'Fresh garden salad',
    },
    {
      id: 4,
      name: 'Smoothie',
      price: '$6',
      points: '0.6 P',
      description: 'Fruit smoothie',
    },
    {
      id: 5,
      name: 'Cookie',
      price: '$3',
      points: '0.3 P',
      description: 'Homemade cookie',
    },
  ];

  // Function to add item to cart
  const addToCart = (item) => {
    setCart([...cart, item]);
    Alert.alert('Added to Cart', `${item.name} has been added to your cart!`);
  };

  // Function to handle cart button press
  const handleCart = () => {
    if (cart.length === 0) {
      Alert.alert('Cart Empty', 'Your cart is empty. Add some items first!');
      return;
    }
    
    Alert.alert('Cart Summary', `You have ${cart.length} items in your cart. Total: $${cart.reduce((sum, item) => sum + parseFloat(item.price.replace('$', '')), 0).toFixed(2)}`);
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
        <Text style={styles.headerTitle}>Order from {businessName}</Text>
        <View style={styles.headerSpacer} />
      </View>

      {/* Scrollable content container */}
      <ScrollView 
        style={styles.scrollContainer}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Menu items container */}
        <View style={styles.menuContainer}>
          {/* Map through each menu item to create a list item */}
          {menuItems.map((item) => (
            <View key={item.id} style={styles.menuItem}>
              {/* Left side: Item details */}
              <View style={styles.itemDetails}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemDescription}>{item.description}</Text>
                <Text style={styles.itemPrice}>
                  {item.price} ({item.points})
                </Text>
              </View>
              
              {/* Right side: Add to Cart button */}
              <TouchableOpacity
                style={styles.addToCartButton}
                onPress={() => addToCart(item)}
                activeOpacity={0.8}
              >
                <Text style={styles.addToCartButtonText}>Add to Cart</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>
      
      {/* Cart button at the bottom */}
      <View style={styles.cartButtonContainer}>
        <TouchableOpacity
          style={styles.cartButton}
          onPress={handleCart}
          activeOpacity={0.8}
        >
          <Text style={styles.cartButtonText}>
            Cart ({cart.length} items)
          </Text>
        </TouchableOpacity>
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
    fontSize: 24,
    fontWeight: 'bold',
    color: '#6B4226', // Medium warm brown from View Rewards example for contrast
    textAlign: 'center',
    flex: 1,
  },
  
  // Header spacer for balanced layout
  headerSpacer: {
    width: 60, // Same width as back button for balance
  },
  
  // Scroll container styling
  scrollContainer: {
    flex: 1,
  },
  
  // Scroll content styling for proper spacing
  scrollContent: {
    paddingVertical: 20,
  },
  
  // Menu items container
  menuContainer: {
    paddingHorizontal: 20,
  },
  
  // Individual menu item styling - lighter palette color background
  menuItem: {
    backgroundColor: '#F5E6D3', // Crema from palette - exact pastel color
    borderRadius: 15,
    padding: 20,
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  
  // Item details container
  itemDetails: {
    flex: 1,
    marginRight: 15,
  },
  
  // Item name styling - very dark orange text from View Rewards example
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#6B4226', // Medium warm brown from View Rewards example for contrast
    marginBottom: 5,
  },
  
  // Item description styling - very dark orange text from View Rewards example
  itemDescription: {
    fontSize: 14,
    color: '#6B4226', // Medium warm brown from View Rewards example for contrast
    marginBottom: 5,
  },
  
  // Item price styling - very dark orange text from View Rewards example
  itemPrice: {
    fontSize: 16,
    fontWeight: '600',
    color: '#6B4226', // Medium warm brown from View Rewards example for contrast
  },
  
  // Add to Cart button styling - lighter palette color background
  addToCartButton: {
    backgroundColor: '#F5E6D3', // Crema from palette - exact pastel color
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 15,
    borderWidth: 2, // Add border for better definition
    borderColor: '#8B4513', // Very dark orange border for contrast
    minWidth: 80,
    height: 30, // 30px high as requested
  },
  
  // Add to Cart button text styling - very dark orange text from View Rewards example
  addToCartButtonText: {
    color: '#6B4226', // Medium warm brown from View Rewards example for contrast
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  
  // Cart button container
  cartButtonContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20, // 20px bottom padding as requested
  },
  
  // Cart button styling - lighter palette color background
  cartButton: {
    width: '100%', // Full width for better visibility
    height: 50, // 50px high as requested
    backgroundColor: '#F5E6D3', // Crema from palette - exact pastel color
    borderRadius: 25, // Rounded corners
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  // Cart button text styling - very dark orange text from View Rewards example
  cartButtonText: {
    color: '#6B4226', // Medium warm brown from View Rewards example for contrast
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default OrderScreen;
