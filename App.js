import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Animated } from 'react-native';
import { StatusBar } from 'expo-status-bar';

// Import our screen components
import SignInScreen from './src/screens/sign-in-page/SignInScreen';
import MyBusinessesScreen from './src/screens/my-businesses-page/MyBusinessesScreen';
import OrderScreen from './src/screens/order-page/OrderScreen';
import ViewRewardsScreen from './src/screens/view-rewards-page/ViewRewardsScreen';
import SendPointsScreen from './src/screens/send-points-page/SendPointsScreen';
import SettingsPage from './src/screens/settings-page/SettingsPage';
import EditPage from './src/screens/edit-page/EditPage';
import EditPaymentPage from './src/screens/edit-payment-page/EditPaymentPage';

const Stack = createStackNavigator();

// Forward navigation: slide from right to left
const forSlide = ({ current, layouts }) => {
  return {
    cardStyle: {
      transform: [
        {
          translateX: current.progress.interpolate({
            inputRange: [0, 1],
            outputRange: [layouts.screen.width, 0],
          }),
        },
      ],
    },
  };
};

// Back navigation: slide from left to right
const backSlide = ({ current, layouts }) => {
  return {
    cardStyle: {
      transform: [
        {
          translateX: current.progress.interpolate({
            inputRange: [0, 1],
            outputRange: [-layouts.screen.width, 0],
          }),
        },
      ],
    },
  };
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SignIn"
        screenOptions={{
          headerShown: false,
          // Default navigation: slide from right to left
          cardStyleInterpolator: forSlide,
          animationEnabled: true,
          gestureEnabled: true,
          gestureDirection: 'horizontal',
        }}
      >
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen 
          name="MyBusinesses" 
          component={MyBusinessesScreen}
          options={{
            cardStyleInterpolator: backSlide,
          }}
        />
        <Stack.Screen 
          name="Order" 
          component={OrderScreen}
          options={{
            cardStyleInterpolator: backSlide,
          }}
        />
        <Stack.Screen 
          name="ViewRewards" 
          component={ViewRewardsScreen}
          options={{
            cardStyleInterpolator: backSlide,
          }}
        />
        <Stack.Screen 
          name="SendPoints" 
          component={SendPointsScreen}
          options={{
            cardStyleInterpolator: backSlide,
          }}
        />
        <Stack.Screen 
          name="Settings" 
          component={SettingsPage}
          options={{
            cardStyleInterpolator: backSlide,
          }}
        />
        <Stack.Screen 
          name="Edit" 
          component={EditPage}
          options={{
            cardStyleInterpolator: backSlide,
          }}
        />
        <Stack.Screen 
          name="EditPayment" 
          component={EditPaymentPage}
          options={{
            cardStyleInterpolator: backSlide,
          }}
        />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
