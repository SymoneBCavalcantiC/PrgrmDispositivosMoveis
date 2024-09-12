import { View, Text, StyleSheet, TextInput, Button, ScrollView } from 'react-native'
import React, { useState } from 'react'

const Exercicio05 = () => {

    const [tarefa, setTarefa] = useState('');
    const [listaTarefa, setListaTarefa] = useState([]);

    const inserirTarefa = () => {
        if (tarefa !== '') {
            setListaTarefa([...listaTarefa, {text: tarefa}])
            setTarefa("")
        }
    }

  return (
    <View style={styles.container}>

        <View style={styles.box1}>
            <Text style={styles.titleText}>LISTA DE TAREFAS</Text>
        </View>

        <View style={styles.box2}>
            <TextInput
                style={styles.input}
                placeholder='Digite aqui sua tarefa:'
                value={tarefa}
                onChangeText={(text) => setTarefa(text)} 
            />
            <Button title='Adicionar' onPress={inserirTarefa} />
        </View>

        <View style={styles.box3}>
            <ScrollView style={styles.listagem}>
                {listaTarefa.map((item, index) => (
                    <View key={index}>
                    <Text>{item.text}</Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        backgroundColor: 'gray',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 50
    },
    box1: {
        width: '100%',
        backgroundColor: '#DCDCDC',
        flex: 0.15,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10
    },
    box2: {
        width: '100%',
        height: 10,
        backgroundColor: '#DCDCDC',
        flex: 0.2,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    box3: {
        width: '100%',
        backgroundColor: '#DCDCDC',
        flex: 0.65,
        justifyContent: 'center',
        alignItems: 'center'
    },
    titleText: {
        fontSize: 32,
        fontWeight: 'bold',
        color: 'black',
    },
    input: {
        borderWidth: 1,
        borderColor: 'gray',
        padding: 10,
        marginBottom: 15,
        width: '80%'
    },
    listagem: {
        borderWidth: 1,
        borderColor: 'gray',
        padding: 20,
        marginBottom: 15,
        margin: 15,
        width: '80%'
    }
})

export default Exercicio05