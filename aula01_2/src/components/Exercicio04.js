import { View, Text, StyleSheet} from 'react-native'
import React from 'react'

const Exercicio4 = () => {
    
    const alunos=['Pilarica','Fabinho','Priscila']
  
    return (
    <View style={styles.container}>
      {
        alunos.map((item,index)=>(
          <Text key={index}> {item} </Text>
        ))
      }
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
      alignItems: 'center',
      justifyContent: 'center',
      padding: 100      
  }
})

export default Exercicio4