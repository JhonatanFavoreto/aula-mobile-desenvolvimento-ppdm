import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function Cadastro() {

  const [nome, setNome ] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Cadastro</Text>

      <View style={styles.containerInputs}>
        <View>
          <Text style={styles.textInput}>Nome de Usuário:</Text>
          <TextInput
          style={styles.inputType}
          placeholder='Crie seu nickname'
          secureTextEntry={false}
          value={nome}
          onChangeText={setNome}>
          </TextInput>
        </View>

        <View>
          <Text style={styles.textInput}>Email:</Text>
          <TextInput
          style={styles.inputType}
          placeholder='Digite seu email'
          secureTextEntry={false}
          keyboardType='email-address'
          value={email}
          onChangeText={setEmail}>


          </TextInput>
        </View>

        <View>
          <Text style={styles.textInput}>Senha:</Text>
          <TextInput
          style={styles.inputType}
          placeholder='Crie sua senha'
          secureTextEntry={true}
          keyboardType='numeric'
          value={senha}
          onChangeText={setSenha}>
          </TextInput>
              </View>

              <View style={styles.button}>
                <Text style={styles.textButton}>Cadastrar</Text>
              </View>

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
  textTitle: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,

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
    fontWeight: 'bold'
  },
  inputType: {
    backgroundColor: '#fff',
    borderRadius: 20,
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
  }


});
