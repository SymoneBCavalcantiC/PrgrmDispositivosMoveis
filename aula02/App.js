import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Exercicio01 from './src/components/Exercicio01'
import Exercicio02 from './src/components/Exercicio02'
import Exercicio03 from './src/components/Exercicio03'
import Exercicio04 from './src/components/Exercicio04'
import Exercicio05 from './src/components/Exercicio05'


const App = () => {
  return (  
    <View style={styles.container}>
      {/* <Exercicio01 /> */}
      {/* <Exercicio02 /> */}
      {/* <Exercicio03 /> */}
      {/* <Exercicio04 /> */}
      <Exercicio05 />

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%'
  },
})

export default App