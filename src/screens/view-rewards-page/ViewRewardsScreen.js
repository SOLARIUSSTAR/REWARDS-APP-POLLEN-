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
import { LinearGradient } from 'expo-linear-gradient';

// Main ViewRewardsScreen component
const ViewRewardsScreen = ({ navigation, route }) => {
  // Get the business name and points passed from the navigation
  const { businessName, points } = route.params || { businessName: 'Business', points: '10P' };
  
  // Parse points to get numeric value for calculations
  const pointsValue = parseInt(points.replace('P', '')) || 10;
  
  // Calculate current level and progress (simplified logic)
  const currentLevel = Math.floor(pointsValue / 30) + 1;
  const levelProgress = pointsValue % 30 || 30;
  const totalPoints = pointsValue + 100; // Add some bonus points for display
  
  // Level data for the rewards path - exactly 5 levels with natural orange gradient
  const levelData = [
    { level: 1, requirement: '30P / Daily', reward: '5% P return', isActive: true },
    { level: 2, requirement: '50P / Daily', reward: '10% P return', isActive: true },
    { level: 3, requirement: '80P / Daily', reward: '15% P return', isActive: false },
    { level: 4, requirement: '120P / Daily', reward: '20% P return', isActive: false },
    { level: 5, requirement: '180P / Daily', reward: '25% P return', isActive: false },
  ];

  // Function to go back to My Businesses screen
  const handleBackToBusinesses = () => {
    navigation.navigate('MyBusinesses');
  };

  // Function to navigate to Send Points screen
  const handleSendPoints = () => {
    navigation.navigate('SendPoints', { 
      businessName: businessName, 
      currentPoints: points 
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Status bar with light content for dark background */}
      <StatusBar style="light" />
      
      {/* Header section with back button only - no pink title */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={handleBackToBusinesses}
        >
          <Text style={styles.backButtonText}>← Back</Text>
        </TouchableOpacity>
        <View style={styles.headerSpacer} />
      </View>

      {/* Scrollable content container */}
      <ScrollView 
        style={styles.scrollContainer}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Top section with total points and level progress */}
        <View style={styles.topSection}>
          <Text style={styles.totalPointsText}>
            Total: {totalPoints}P
          </Text>
          <Text style={styles.levelProgressText}>
            Level {currentLevel}: {levelProgress}/30 P
          </Text>
        </View>

                       {/* Rewards path container with two-column layout */}
               <View style={styles.rewardsContainer}>
                 {/* Left column: Vertical bar with levels */}
                 <View style={styles.leftColumn}>
                   <View style={styles.verticalBar}>
                     {levelData.map((level, index) => (
                       <View 
                         key={level.level} 
                         style={[
                           styles.levelSegment,
                           { backgroundColor: level.isActive ? '#F4D03F' : '#F0D8C0' }
                         ]}
                       >
                         <Text style={[styles.levelText, { color: '#6B4226' }]}>
                           L {level.level}
                         </Text>
                         <Text style={[styles.requirementText, { color: '#6B4226' }]}>
                           {level.requirement}
                         </Text>
                       </View>
                     ))}
                   </View>
                 </View>
                 
                 {/* Right column: Reward bubbles */}
                 <View style={styles.rightColumn}>
                   {levelData.map((level, index) => (
                     <View key={level.level} style={styles.rewardBubbleContainer}>
                       <TouchableOpacity
                         activeOpacity={0.8}
                       >
                         <View style={[
                           styles.rewardBubble,
                           { backgroundColor: level.isActive ? '#F4D03F' : '#F0D8C0' }
                         ]}>
                           <Text style={[
                             styles.rewardText,
                             { color: '#6B4226' }
                           ]}>
                             {level.reward}
                           </Text>
                         </View>
                       </TouchableOpacity>
                     </View>
                   ))}
                 </View>
               </View>

        {/* Send Points button below the rewards grid */}
        <View style={styles.sendPointsContainer}>
          <TouchableOpacity
            style={styles.sendPointsButton}
            onPress={handleSendPoints}
            activeOpacity={0.8}
          >
            <Text style={styles.sendPointsButtonText}>Send Points</Text>
          </TouchableOpacity>
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
  
  // Header section with back button only
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#E0D5C7', // Light border color to match cream theme
  },
  
  // Back button styling - cream background with medium brown text
  backButton: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#FAF6ED', // Same cream background as main container
    borderWidth: 1, // Subtle border for definition
    borderColor: '#E0D5C7', // Light border color
  },
  
  // Back button text styling - medium warm brown text
  backButtonText: {
    color: '#6B4226', // Medium warm brown from View Rewards example for contrast
    fontSize: 16,
    fontWeight: '600',
  },
  
  // Header spacer for balanced layout
  headerSpacer: {
    flex: 1, // Takes up remaining space
  },
  
  // Scroll container styling
  scrollContainer: {
    flex: 1,
  },
  
  // Scroll content styling for proper spacing
  scrollContent: {
    paddingVertical: 20,
  },
  
  // Top section with total points and level progress
  topSection: {
    padding: 20, // 20px padding as requested
    alignItems: 'center',
    marginBottom: 30,
  },
  
  // Total points text styling - medium warm brown from View Rewards example
  totalPointsText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#6B4226', // Medium warm brown from View Rewards example for contrast
    textAlign: 'center',
    marginBottom: 10,
  },
  
  // Level progress text styling - medium warm brown from View Rewards example
  levelProgressText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#6B4226', // Medium warm brown from View Rewards example for contrast
    textAlign: 'center',
  },
  
           // Rewards container with two-column layout
         rewardsContainer: {
           flexDirection: 'row',
           paddingHorizontal: 20,
           marginBottom: 30,
           justifyContent: 'center',
           alignItems: 'flex-start',
         },
         
         // Left column containing the vertical bar (half width of reward bubbles)
         leftColumn: {
           width: 80, // Fixed width - approximately half of reward bubble width
           marginRight: 20,
         },
         
         // Vertical bar container
         verticalBar: {
           borderRadius: 20,
           paddingVertical: 10,
           height: 400, // Fixed height to match reward bubbles
           overflow: 'hidden', // Ensure rounded corners work properly
         },
         
         // Individual level segment within the vertical bar
         levelSegment: {
           height: 80, // Fixed height for each segment (400/5 = 80)
           justifyContent: 'center',
           alignItems: 'center',
           borderBottomWidth: 1,
           borderBottomColor: 'rgba(255, 255, 255, 0.2)',
         },
         
         // Level text styling
         levelText: {
           fontSize: 16,
           fontWeight: 'bold',
           marginBottom: 5,
         },
         
         // Requirement text styling
         requirementText: {
           fontSize: 12,
           textAlign: 'center',
         },
         
         // Right column containing reward bubbles
         rightColumn: {
           flex: 1,
           height: 400, // Fixed height to match vertical bar
           justifyContent: 'space-between',
           paddingTop: 10,
         },
         
         // Container for each reward bubble
         rewardBubbleContainer: {
           height: 80, // Fixed height to match level segments (400/5 = 80)
           justifyContent: 'center',
           alignItems: 'center',
         },
         
         // Individual reward bubble
         rewardBubble: {
           borderRadius: 25,
           paddingHorizontal: 20,
           paddingVertical: 15,
           minWidth: 160, // Wider than left bar
           alignItems: 'center',
           justifyContent: 'center',
         },
         
         // Reward text styling
         rewardText: {
           fontSize: 14,
           fontWeight: 'bold',
           textAlign: 'center',
         },
  
  // Send Points button container
  sendPointsContainer: {
    alignItems: 'center',
    paddingBottom: 20, // 20px bottom padding as requested
  },
  
  // Send Points button styling - 80% width, 50px high with cream background
  sendPointsButton: {
    width: '80%', // 80% width as requested
    height: 50, // 50px high as requested
    backgroundColor: '#FAF6ED', // Same cream background as main container
    borderRadius: 25, // Rounded corners
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1, // Subtle border for definition
    borderColor: '#E0D5C7', // Light border color
  },
  
  // Send Points button text styling - medium warm brown text
  sendPointsButtonText: {
    color: '#6B4226', // Medium warm brown from View Rewards example for contrast
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ViewRewardsScreen;
