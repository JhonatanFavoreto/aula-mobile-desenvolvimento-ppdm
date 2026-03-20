import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import Cadastro from './cadastro';

export default function App() {
    const [showCadastro, setShowCadastro] = useState(false);

    if (showCadastro) {
        return (
            <View style={styles.container}>
                <Button title="Voltar" onPress={() => setShowCadastro(false)} />
                <Cadastro />
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text>Games Favoritos, Sua lista preferida de jogos!</Text>
            <Button title="Ir para cadastro" onPress={() => setShowCadastro(true)} />
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
