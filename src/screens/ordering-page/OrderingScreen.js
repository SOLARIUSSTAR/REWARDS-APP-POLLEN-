import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const OrderingScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello Ordering</Text>
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

export default OrderingScreen;

