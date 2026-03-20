import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, SafeAreaView } from 'react-native';

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

export default function App() {
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
                <Text style={styles.logo}>GAMES{'\n'}FAVORITOS</Text>
                <View style={styles.profileIcon} />
            </View>

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
