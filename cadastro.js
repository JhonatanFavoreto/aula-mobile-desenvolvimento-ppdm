import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Alert } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function Cadastro() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [showSenha, setShowSenha] = useState(false);

    const handleRegister = () => {
        if (!nome || !email || !senha) {
            Alert.alert('Erro', 'Preencha todos os campos.');
            return;
        }
        if (senha.length < 6) {
            Alert.alert('Erro', 'A senha deve ter pelo menos 6 caracteres.');
            return;
        }
        Alert.alert('Sucesso', 'Cadastro realizado com sucesso!');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.logo}>GAMES</Text>
            <Text style={styles.logo2}>FAVORITOS</Text>

            <View style={styles.containerText}>
                <Text style={styles.textContainer}>
                    Bem-vindo ao seu cofre pessoal de memórias. Crie seu perfil para salvar os
                    universos que você explorou e as histórias que marcaram a sua jornada.
                </Text>
                <Text style={styles.textNew}>NOVO JOGADOR</Text>
            </View>

            <View style={styles.profileIcon}>
                <MaterialIcons name="person" size={80} color="white" />
            </View>

            <View style={styles.containerInputs}>
                <View>
                    <Text style={styles.textInput}>Nome de Usuário:</Text>
                    <TextInput
                        style={styles.inputType}
                        placeholder="Crie seu nickname"
                        secureTextEntry={false}
                        value={nome}
                        onChangeText={setNome}></TextInput>
                </View>

                <View>
                    <Text style={styles.textInput}>Email:</Text>
                    <TextInput
                        style={styles.inputType}
                        placeholder="Digite seu email"
                        secureTextEntry={false}
                        keyboardType="email-address"
                        value={email}
                        onChangeText={setEmail}></TextInput>
                </View>

                <View>
                    <Text style={styles.textInput}>Senha:</Text>
                    <View style={styles.passwordRow}>
                        <TextInput
                            style={[styles.inputType, styles.passwordInput]}
                            placeholder="Crie sua senha"
                            secureTextEntry={!showSenha}
                            value={senha}
                            onChangeText={setSenha}
                            autoCapitalize="none"
                        />
                        <TouchableOpacity
                            onPress={() => setShowSenha((prev) => !prev)}
                            style={styles.iconButton}>
                            <MaterialIcons
                                name={showSenha ? 'visibility' : 'visibility-off'}
                                size={24}
                                color="#333"
                            />
                        </TouchableOpacity>
                    </View>
                </View>

                <TouchableOpacity style={styles.button} onPress={handleRegister}>
                    <Text style={styles.textButton}>Cadastrar</Text>
                </TouchableOpacity>
            </View>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#222836',
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerText: {
        textDecorationColor: '#fff',
        width: 310,
        height: 100,
    },
    textContainer: {
        color: '#fff',
    },
    textNew: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 20,
        textAlign: 'center',
        alignContent: 'center',
    },
    logo: {
        color: '#86b2df',
        fontSize: 28,
        fontWeight: '900',
        fontStyle: 'italic',
        lineHeight: 30,
        fontFamily: 'serif',
        marginTop: 70,
    },
    logo2: {
        color: '#1E90FF',
        fontSize: 28,
        fontWeight: '900',
        fontStyle: 'italic',
        lineHeight: 30,
        fontFamily: 'serif',
    },
    containerInputs: {
        width: 310,
        height: 400,
        marginTop: 30,
        gap: 20,
    },
    textInput: {
        color: '#fff',
        marginBottom: 5,
        fontSize: 15,
        fontWeight: 'bold',
    },
    inputType: {
        backgroundColor: '#fff',
        borderRadius: 20,
        paddingHorizontal: 12,
        paddingVertical: 10,
    },
    passwordRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    passwordInput: {
        flex: 1,
    },
    iconButton: {
        padding: 8,
        marginLeft: 8,
    },
    button: {
        backgroundColor: '#007bff',
        borderRadius: 20,
        padding: 10,
        alignItems: 'center',
    },
    textButton: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
    profileIcon: {
        width: 100,
        height: 100,
        backgroundColor: '#007bff',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
});
