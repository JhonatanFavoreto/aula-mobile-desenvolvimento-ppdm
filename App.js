import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    FlatList,
    SafeAreaView,
    TouchableOpacity,
    TextInput,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
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
    const [listaJogos, setListaJogos] = useState(jogos);
    const [novoTitulo, setNovoTitulo] = useState('');
    const [novaDescricao, setNovaDescricao] = useState('');

    const adicionarJogo = () => {
        if (novoTitulo.trim() === '') return;
        const jogoObjeto = {
            id: String(Date.now()),
            title: novoTitulo,
            description: novaDescricao || 'Descrição não informada.',
        };
        setListaJogos([...listaJogos, jogoObjeto]);
        setNovoTitulo('');
        setNovaDescricao('');
    };

    const removerJogo = (idParaRemover) => {
        const listaFiltrada = listaJogos.filter((item) => item.id !== idParaRemover);
        setListaJogos(listaFiltrada);
    };
    const renderItem = ({ item }) => (
        <View style={styles.card}>
            {item.image ? (
                <Image source={item.image} style={styles.cardImage} />
            ) : (
                <View style={[styles.cardImage, styles.cardImagePlaceholder]}>
                    <Text style={{ color: '#fff', fontSize: 12 }}>No Image</Text>
                </View>
            )}
            <View style={styles.textContainer}>
                <Text style={styles.gameTitle}>{item.title}</Text>
                <Text style={styles.description}>{item.description}</Text>
            </View>
            <TouchableOpacity style={styles.botaoRemover} onPress={() => removerJogo(item.id)}>
                <Text style={styles.textoBotaoRemover}>X</Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerLeft}>
                    <Text style={styles.logo}>GAMES</Text>
                    <Text style={styles.logo2}>FAVORITOS</Text>
                </View>
                <View style={styles.profileIcon}>
                    <MaterialIcons name="person" size={45} color="white" />
                </View>
            </View>

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Título do jogo"
                    placeholderTextColor="#999"
                    value={novoTitulo}
                    onChangeText={setNovoTitulo}
                />
                <TextInput
                    style={[styles.input, { flex: 0.6, marginLeft: 8 }]}
                    placeholder="Descrição (opcional)"
                    placeholderTextColor="#999"
                    value={novaDescricao}
                    onChangeText={setNovaDescricao}
                />
                <TouchableOpacity style={styles.botaoAdicionar} onPress={adicionarJogo}>
                    <Text style={styles.textoBotaoAdicionar}>+</Text>
                </TouchableOpacity>
            </View>

            <FlatList
                data={listaJogos}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                contentContainerStyle={styles.listContainer}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => (
                    <Text style={styles.textoVazio}>Nenhum jogo adicionado.</Text>
                )}
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
                initialRouteName="Home"
                screenOptions={{
                    headerStyle: { backgroundColor: '#121212' },
                    headerTintColor: '#fff',
                    tabBarStyle: { backgroundColor: '#121212', borderTopColor: '#333' },
                    tabBarActiveTintColor: '#1E90FF',
                    tabBarInactiveTintColor: '#aaa',
                }}>
                <Tab.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }} />
                <Tab.Screen name="Cadastro" component={Cadastro} options={{ title: 'Cadastro' }} />
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
        color: '#86b2df',
        fontSize: 28,
        fontWeight: '900',
        fontStyle: 'italic',
        lineHeight: 30,
        fontFamily: 'serif',
    },
    logo2: {
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
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerLeft: {
        flexDirection: 'column',
        alignItems: 'flex-start',
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
    description: {
        color: '#fff',
        fontSize: 14,
        lineHeight: 20,
        fontWeight: 'bold',
    },
    gameTitle: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '700',
    },
    cardImagePlaceholder: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#444',
    },
    inputContainer: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        marginBottom: 12,
        alignItems: 'center',
    },
    input: {
        flex: 1,
        height: 44,
        backgroundColor: '#1e1e1e',
        color: '#fff',
        borderRadius: 8,
        paddingHorizontal: 10,
    },
    botaoAdicionar: {
        width: 44,
        height: 44,
        backgroundColor: '#1E90FF',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 8,
    },
    textoBotaoAdicionar: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
    },
    textoVazio: {
        textAlign: 'center',
        color: '#888',
        fontSize: 16,
        marginTop: 30,
    },
    botaoRemover: {
        backgroundColor: '#FF3B30',
        width: 30,
        height: 30,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 8,
    },
    textoBotaoRemover: {
        color: '#fff',
        fontWeight: 'bold',
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
