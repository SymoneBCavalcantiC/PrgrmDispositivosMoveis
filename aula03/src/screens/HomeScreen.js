import { View, Text, Button } from 'react-native'
import React from 'react'

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button 
        title="Go to Details"
        onPress={() => navigation.navigate('Details', {
            itemId: 86,
            otherParam: 'Aqui vai aparecer o que está programado como OtherParams!!'
        })}
      />
    </View>
  )
}

export default HomeScreen