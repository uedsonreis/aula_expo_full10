import React from 'react'
import { Button, Dimensions, FlatList, StyleSheet, Text, View } from 'react-native'
import { NavigationProp, useNavigation } from '@react-navigation/native'

import * as userService from '../services/user.service'
import * as authRepo from '../services/auth.repo'
import { User } from '../model'

export default function HomePage() {

    const navigation = useNavigation<NavigationProp<any>>()

    const [users, setUsers] = React.useState<Array<User>>([])

    React.useEffect(() => {
        authRepo.getSession().then(session => {
            if (!session) navigation.goBack()

            navigation.setOptions({
                title: session ? `Olá ${session.name}` : 'Página Inicial',
            })
        })

        userService.getList().then(data => setUsers(data))

        navigation.setOptions({
            headerLeft: () => <Button title='Sair' onPress={() => navigation.goBack()} />,
            headerRight: () => <Button title='Add' onPress={() => navigation.navigate('user')} />
        })
    }, [])

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Listagem de Usuários</Text>
            <Text>{users.length} usuários cadastrados.</Text>
            
            <View>
                <FlatList
                    data={users}
                    keyExtractor={user => user.id!.toString()}
                    renderItem={({ item }) => (
                        <View style={styles.itemContainer}>
                            <Text style={styles.itemTitle}>{item.name} </Text>
                            <Text style={styles.itemSubtitle}>{item.username}</Text>
                        </View>
                    )}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        alignItems: 'center',
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        fontWeight: 'bold',
    },
    itemContainer: {
        flex: 1,
        padding: 10,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        justifyContent: 'space-between',
        width: Dimensions.get('window').width - 10,
    },
    itemTitle: {
        fontSize: 18,
    },
    itemSubtitle: {
        color: '#555',
        fontWeight: 'bold',
    },
})