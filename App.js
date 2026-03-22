import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    FlatList,
    SafeAreaView,
    TouchableOpacity,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Cadastro from './cadastro';

const jogos = [
    {
        id: '1',
        title: 'Resident Evil 4',
        description:
            'Resident Evil 4 é um jogo eletrônico de survival horror desenvolvido e publicado pela Capcom para o GameCube em 2005.',
        image: require('./assets/re4.png'),
    },
    {
        id: '2',
        title: 'Half-Life 2',
        description:
            'Half-Life 2 é um jogo de tiro em primeira pessoa de 2004, desenvolvido e publicado pela Valve Corporation.',
        image: require('./assets/hf2.png'),
    },
    {
        id: '3',
        title: 'Undertale',
        description:
            'Undertale é um RPG eletrônico criado pelo desenvolvedor independente norte-americano Toby Fox.',
        image: require('./assets/ut.png'),
    },
    {
        id: '4',
        title: 'BioShock Infinite',
        description:
            'BioShock Infinite é um jogo eletrônico de tiro em primeira pessoa desenvolvido pela Irrational Games e publicado pela 2K Games.',
        image: require('./assets/bsi.png'),
    },
];

function HomeScreen({ navigation }) {
    const renderItem = ({ item }) => (
        <View style={styles.card}>
            <Image source={item.image} style={styles.cardImage} />
            <View style={styles.textContainer}>
                <Text style={styles.description}>{item.description}</Text>
            </View>
        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.logo}>GAMES{`\n`}FAVORITOS</Text>
                <View style={styles.profileIcon} />
            </View>

            <View style={styles.heroSection}>
                <Text style={styles.heroTitle}>Bem-vindo ao seu cofre pessoal de memórias.</Text>
                <Text style={styles.heroSubtitle}>
                    Crie seu perfil para salvar os universos que você explorou e as histórias que
                    marcaram a sua jornada.
                </Text>
            </View>

            <Text style={styles.sectionTitle}>NOVO JOGADOR</Text>

            <View style={styles.playerCard}>
                <View style={styles.playerProfileLarge} />
                <View style={styles.playerFields}>
                    <Text style={styles.fieldLabel}>Nome de Usuário:</Text>
                    <Text style={styles.fieldValue}>Crie seu nick</Text>

                    <Text style={[styles.fieldLabel, { marginTop: 8 }]}>E-mail:</Text>
                    <Text style={styles.fieldValue}>Escreva seu e-mail</Text>

                    <Text style={[styles.fieldLabel, { marginTop: 8 }]}>Senha:</Text>
                    <Text style={styles.fieldValue}>Crie sua senha</Text>
                </View>
            </View>

            <TouchableOpacity
                style={styles.createAccountButton}
                onPress={() => navigation.navigate('Cadastro')}>
                <Text style={styles.createAccountButtonText}>CRIE SUA CONTA</Text>
            </TouchableOpacity>

            <FlatList
                data={jogos}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                contentContainerStyle={styles.listContainer}
                showsVerticalScrollIndicator={false}
            />

            <View style={styles.footer}>
                <Text style={styles.footerText}>
                    © 2026 Games-Favoritos. Todos os direitos reservados.
                </Text>
            </View>
        </SafeAreaView>
    );
}

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName='Home'
                screenOptions={{
                    headerStyle: { backgroundColor: '#121212' },
                    headerTintColor: '#fff',
                    tabBarStyle: { backgroundColor: '#121212', borderTopColor: '#333' },
                    tabBarActiveTintColor: '#1E90FF',
                    tabBarInactiveTintColor: '#aaa',
                }}>
                <Tab.Screen name='Home' component={HomeScreen} options={{ title: 'Home' }} />
                <Tab.Screen name='Cadastro' component={Cadastro} options={{ title: 'Cadastro' }} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 40,
        paddingBottom: 20,
    },
    logo: {
        color: '#1E90FF',
        fontSize: 28,
        fontWeight: '900',
        fontStyle: 'italic',
        lineHeight: 30,
        fontFamily: 'serif',
    },
    profileIcon: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#666',
    },
    navButton: {
        marginHorizontal: 20,
        marginBottom: 10,
        backgroundColor: '#1E90FF',
        borderRadius: 10,
        paddingVertical: 10,
        alignItems: 'center',
    },
    navButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
    playerCard: {
        backgroundColor: '#1a1a1a',
        borderRadius: 16,
        padding: 18,
        marginHorizontal: 20,
        marginBottom: 12,
        flexDirection: 'row',
        alignItems: 'center',
    },
    playerProfileLarge: {
        width: 84,
        height: 84,
        borderRadius: 42,
        backgroundColor: '#666',
        marginRight: 16,
    },
    playerFields: {
        flex: 1,
    },
    fieldLabel: {
        color: '#8da2c3',
        fontSize: 12,
        fontWeight: '700',
    },
    fieldValue: {
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold',
    },
    createAccountButton: {
        marginHorizontal: 20,
        marginBottom: 18,
        backgroundColor: '#1e90ff',
        borderRadius: 14,
        paddingVertical: 12,
        alignItems: 'center',
    },
    createAccountButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
    heroSection: {
        paddingHorizontal: 20,
        marginBottom: 16,
    },
    heroTitle: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 6,
    },
    heroSubtitle: {
        color: '#ddd',
        fontSize: 13,
        lineHeight: 20,
    },
    sectionTitle: {
        color: '#fff',
        fontSize: 22,
        fontWeight: 'bold',
        marginHorizontal: 20,
        marginBottom: 10,
    },
    listContainer: {
        paddingHorizontal: 20,
    },
    card: {
        flexDirection: 'row',
        marginBottom: 30,
        alignItems: 'center',
    },
    cardImage: {
        width: 100,
        height: 100,
        borderRadius: 12,
        backgroundColor: '#333',
    },
    textContainer: {
        flex: 1,
        marginLeft: 15,
    },
    cardTitle: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    description: {
        color: '#ddd',
        fontSize: 14,
        lineHeight: 20,
        fontWeight: '600',
    },
    footer: {
        paddingVertical: 20,
        alignItems: 'center',
    },
    footerText: {
        color: '#fff',
        fontSize: 10,
        opacity: 0.8,
    },
});
