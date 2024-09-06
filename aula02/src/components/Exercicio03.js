import { View, StyleSheet } from 'react-native';
import React from 'react';

const Exercicio03 = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.box, { width: 50, backgroundColor: 'green' }]} />
      <View style={[styles.flexBox, { backgroundColor: 'yellow' }]} />
      <View style={[styles.box, { width: 50, backgroundColor: 'blue' }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 100,
  },
  box: {
    height: '100%',
  },
  flexBox: {
    flex: 1,
  },
});

export default Exercicio03;