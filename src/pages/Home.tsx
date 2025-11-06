import React from 'react'
import { Button, Text, View } from 'react-native'
import { NavigationProp, useNavigation } from '@react-navigation/native'

import * as authRepo from '../services/auth.repo'

export default function HomePage() {

    const navigation = useNavigation<NavigationProp<any>>()

    React.useEffect(() => {
        authRepo.getSession().then(session => {
            if (!session) navigation.goBack()

            navigation.setOptions({
                title: session ? `Olá ${session.name}` : 'Página Inicial',
            })
        })

        navigation.setOptions({
            headerLeft: () => <Button title='Sair' onPress={() => navigation.goBack()} />
        })
    }, [])

    return (
        <View>
            <Text>Página Inicial</Text>
        </View>
    )
}