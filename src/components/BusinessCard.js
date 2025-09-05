import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BusinessCard = ({ businessName, points }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.businessName}>{businessName || 'Business Name'}</Text>
      <Text style={styles.points}>{points || '0'} points</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f0f0f0',
    padding: 16,
    margin: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  businessName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  points: {
    fontSize: 14,
    color: '#666',
  },
});

export default BusinessCard;

