import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

import * as service from '../services/user.service';
import MyInput from '../components/MyInput';
import { User } from "../model";
import { NavigationProp, useNavigation } from "@react-navigation/native";

export default function UserPage() {

    const navigation = useNavigation<NavigationProp<any>>()

    const [name, setName] = React.useState('');
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');

    React.useEffect(() => {
        navigation.setOptions({ title: 'Novo Usuário' })
    }, [])

    function save() {
        if (username === '') {
            alert('Login é requerido!');
            return;
        }
        if (name === '') {
            alert('Nome é requerido!');
            return;
        }
        if (password === '') {
            alert('Senha é requerida!');
            return;
        }
        if (password !== confirmPassword) {
            alert('Senhas não conferem!');
            return;
        }

        const user: User = { username, name, password };

        service.create(user).then(success => {
            navigation.goBack()
        }).catch(error => {
            console.error('Erro ao salvar usuário: ', error)
        });
    }

    return (
        <View style={styles.container}>
            <MyInput label="Login" value={username} onChangeText={setUsername} />
            <MyInput label="Nome" value={name} onChangeText={setName} />
            <MyInput label="Senha" onChangeText={setPassword} secureTextEntry />
            <MyInput label="Confirmar Senha" onChangeText={setConfirmPassword} secureTextEntry />

            <View style={styles.buttonContainer}>
                <Button title="Salvar" onPress={save} />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
        alignItems: 'center',
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
    },
    buttonContainer: {
        width: '60%',
        marginTop: 20,
    },
});