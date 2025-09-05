import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const RewardsPathScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello RewardsPath</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default RewardsPathScreen;

