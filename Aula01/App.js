import React from 'react';
import { Text, View } from 'react-native';

const Saudacao = ({ nome }) => {
  return (
    <View>
      <Text>Oiê, {nome}! ;)</Text>
    </View>
  );
};

export default function App() {
  return (
    <View>
      <Saudacao nome='Pilarica' />
    </View>
  );
};

