import React from 'react';
import { View, StyleSheet } from 'react-native';

const ProgressBar = ({ progress = 0.5, width = 200, height = 10 }) => {
  return (
    <View style={[styles.container, { width, height }]}>
      <View style={[styles.progress, { width: `${progress * 100}%` }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
    overflow: 'hidden',
  },
  progress: {
    backgroundColor: '#1A2A44',
    height: '100%',
  },
});

export default ProgressBar;

