import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Import screens
import SignInScreen from '../screens/sign-in-page/SignInScreen';
import MyBusinessesScreen from '../screens/my-businesses-page/MyBusinessesScreen';
import RewardsPathScreen from '../screens/rewards-path-page/RewardsPathScreen';
import AddBusinessScreen from '../screens/add-business-page/AddBusinessScreen';
import ProfileScreen from '../screens/profile-page/ProfileScreen';
import FriendRequestScreen from '../screens/friend-request-page/FriendRequestScreen';
import SendPointsScreen from '../screens/send-points-page/SendPointsScreen';
import OrderingScreen from '../screens/ordering-page/OrderingScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Tab Navigator for main app screens
function MainTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#1A2A44',
        tabBarInactiveTintColor: '#666',
      }}
    >
      <Tab.Screen 
        name="MyBusinesses" 
        component={MyBusinessesScreen}
        options={{ tabBarLabel: 'My Businesses' }}
      />
      <Tab.Screen 
        name="RewardsPath" 
        component={RewardsPathScreen}
        options={{ tabBarLabel: 'Rewards' }}
      />
      <Tab.Screen 
        name="Profile" 
        component={ProfileScreen}
        options={{ tabBarLabel: 'Profile' }}
      />
    </Tab.Navigator>
  );
}

// Main Stack Navigator
function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="MainApp" component={MainTabNavigator} />
      <Stack.Screen name="AddBusiness" component={AddBusinessScreen} />
      <Stack.Screen name="FriendRequest" component={FriendRequestScreen} />
      <Stack.Screen name="SendPoints" component={SendPointsScreen} />
      <Stack.Screen name="Ordering" component={OrderingScreen} />
    </Stack.Navigator>
  );
}

export default AppNavigator;

