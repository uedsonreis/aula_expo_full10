import React from 'react';
import { TextInput, Button, StyleSheet, Text, View, Alert } from 'react-native';

import MyInput from '../components/MyInput';

export default function App() {

    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    function handleLogin() {
        if (username === '') {
            Alert.alert('Login é requerido!');
            return;
        }

        console.log(`Usuário: ${username} - Senha: ${password}`);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Página de Acesso</Text>

            <MyInput
                placeholder="Digite seu Login"
                label="Login" onChangeText={setUsername}
            />

            <MyInput
                placeholder="Digite sua Senha"
                label="Senha" onChangeText={setPassword}
                secureTextEntry
            />

            <View style={styles.buttonContainer}>
                <Button title="Entrar" onPress={handleLogin} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 80,
        alignItems: 'center',
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        fontWeight: 'bold',
    },
    buttonContainer: {
        width: '60%',
        marginTop: 20,
    },
});