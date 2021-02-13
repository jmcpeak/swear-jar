import React from 'react';
import { ActivityIndicator } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const Busy = () => (
  <View style={styles.container}>
    <ActivityIndicator animating size="large" />
  </View>
);

export default Busy;
