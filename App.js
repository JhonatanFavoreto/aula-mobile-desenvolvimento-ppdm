import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaView, View, Text, FlatList, StyleSheet, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Cadastro from './cadastro';

const jogosMock = [
    { id: '1', nome: 'The Legend of Zelda: Breath of the Wild', categoria: 'Aventura' },
    { id: '2', nome: 'God of War', categoria: 'Ação' },
    { id: '3', nome: 'Minecraft', categoria: 'Sandbox' },
    { id: '4', nome: 'FIFA 23', categoria: 'Esportes' },
    { id: '5', nome: 'Hades', categoria: 'Roguelike' },
];

function JogosScreen() {
    const renderItem = ({ item }) => (
        <View style={styles.card}>
            <Text style={styles.cardTitle}>{item.nome}</Text>
            <Text style={styles.cardSubtitle}>{item.categoria}</Text>
        </View>
    );

    return (
        <SafeAreaView style={styles.safeArea}>
            <FlatList
                data={jogosMock}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                contentContainerStyle={styles.listContent}
                showsVerticalScrollIndicator={false}
            />
        </SafeAreaView>
    );
}

function ConfigScreen() {
    return (
        <SafeAreaView style={styles.centerScreen}>
            <Text style={styles.configText}>Tela de Configurações</Text>
        </SafeAreaView>
    );
}

const Tab = createBottomTabNavigator();

export default function App() {
    const [showCadastro, setShowCadastro] = useState(false);

    if (showCadastro) {
        return (
            <View style={styles.container}>
                <Button title='Voltar' onPress={() => setShowCadastro(false)} />
                <Cadastro />
            </View>
        );
    }

    return (
        <NavigationContainer>
            <StatusBar style='auto' />
            <Tab.Navigator
                screenOptions={{
                    headerStyle: { backgroundColor: '#282c34' },
                    headerTintColor: '#fff',
                    tabBarActiveTintColor: '#2196f3',
                    tabBarInactiveTintColor: '#777',
                    tabBarStyle: { backgroundColor: '#f8f8f8' },
                }}>
                <Tab.Screen name='Jogos' component={JogosScreen} />
                <Tab.Screen name='Config' component={ConfigScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    safeArea: {
        flex: 1,
        backgroundColor: '#f0f2f5',
    },
    listContent: {
        padding: 16,
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 14,
        marginBottom: 12,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 3,
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: '700',
        color: '#1f1f1f',
        marginBottom: 4,
    },
    cardSubtitle: {
        fontSize: 14,
        color: '#555',
    },
    centerScreen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f0f2f5',
    },
    configText: {
        fontSize: 18,
        color: '#333',
        fontWeight: '600',
    },
});
