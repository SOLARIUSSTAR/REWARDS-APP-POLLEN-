# RewardsApp

A React Native Expo application for managing rewards and loyalty programs.

## Project Structure

```
src/
├── screens/                 # Screen components
│   ├── sign-in-page/       # Authentication screen
│   ├── my-businesses-page/ # User's businesses
│   ├── rewards-path-page/  # Rewards and levels
│   ├── add-business-page/  # Add new business
│   ├── profile-page/       # User profile
│   ├── friend-request-page/ # Friend requests
│   ├── send-points-page/   # Send points to friends
│   └── ordering-page/      # Order management
├── components/             # Reusable components
│   ├── BusinessCard.js
│   ├── Button.js
│   └── ProgressBar.js
├── navigation/             # Navigation setup
│   └── AppNavigator.js
├── services/              # Backend services
│   ├── Firebase.js
│   ├── Authentication.js
│   └── Payment.js
├── constants/             # App constants
│   ├── colors.js
│   └── levels.js
├── utils/                 # Utility functions
│   └── pointsCalculator.js
└── assets/               # Images and assets
```

## Dependencies

- @react-navigation/native
- @react-navigation/stack
- @react-navigation/bottom-tabs
- expo-status-bar
- @react-native-google-signin/google-signin
- @stripe/stripe-react-native
- firebase
- react-native-screens
- react-native-safe-area-context

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Expo CLI (`npm install -g @expo/cli`)
- Expo Go app on your mobile device

### Installation

1. Navigate to the project directory:
   ```bash
   cd "/Users/noahwiemer/Documents/REWARDS APP/RewardsApp"
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

### Testing with Expo Go

1. **Install Expo Go** on your mobile device:
   - iOS: Download from App Store
   - Android: Download from Google Play Store

2. **Start the development server**:
   ```bash
   npm start
   ```

3. **Connect to the app**:
   - **Option 1**: Scan the QR code displayed in the terminal with your device's camera (iOS) or Expo Go app (Android)
   - **Option 2**: Press 'i' for iOS simulator or 'a' for Android emulator (if you have them installed)

4. **Test the app**:
   - The app should open to the SignIn screen showing "Hello SignIn"
   - All screens are currently placeholder content
   - Navigation is set up but not fully implemented yet

### Development Notes

- **Current State**: All screens show placeholder "Hello [ScreenName]" content
- **Navigation**: Basic stack navigation is implemented with SignIn as the initial screen
- **Components**: Basic reusable components are created with placeholder functionality
- **Services**: Firebase, Authentication, and Payment services have placeholder implementations
- **Constants**: Colors and levels are defined for the rewards system
- **Utils**: Points calculator has basic functionality for calculating rewards

### Troubleshooting

If you encounter issues:

1. **Import Path Errors**: Check that all import paths in App.js and other files are correct
2. **Dependency Issues**: Run `npm install` to ensure all dependencies are installed
3. **Expo Go Connection**: Make sure your device and computer are on the same network
4. **Metro Bundler Issues**: Try clearing the cache with `npx expo start --clear`

### Next Steps

1. Implement actual screen functionality
2. Set up Firebase configuration
3. Add authentication flow
4. Implement business logic
5. Add real UI components
6. Set up Stripe payment integration

## File Descriptions

- **App.js**: Main application entry point with navigation setup
- **src/navigation/AppNavigator.js**: Complete navigation structure with stack and tab navigators
- **src/constants/colors.js**: Color palette for consistent theming
- **src/constants/levels.js**: Rewards level system with thresholds and benefits
- **src/utils/pointsCalculator.js**: Functions for calculating points and level progress
- **src/services/**: Placeholder services for Firebase, Authentication, and Payments
- **src/components/**: Reusable UI components with basic styling
- **src/screens/**: Individual screen components (currently showing placeholder content)

