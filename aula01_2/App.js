import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Exercicio2 from './src/components/Exercicio02'
import Exercicio3 from './src/components/Exercicio03'
import Exercicio4 from './src/components/Exercicio04'


const App = () => {
  return (
    <View style={styles.container}>
      {/* <Exercicio2 /> */}
      {/* <Exercicio3 /> */}
      <Exercicio4 />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default App