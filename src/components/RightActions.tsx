import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'
import { StyleSheet, Text, View } from 'react-native'
import { BaseButton } from 'react-native-gesture-handler'

type Props = {
    onDelete: () => void
}

export default function RightActions({ onDelete }: Props) {
    return (
        <View style={styles.container}>
            <BaseButton style={styles.deleteButton} onPress={onDelete}>
                <Ionicons name="trash" size={24} color="white" />
            </BaseButton>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flexDirection: "row",
    },
    deleteButton: {
        height: '100%',
        paddingHorizontal: 15,
        backgroundColor: 'red',
        justifyContent: 'center',
    },
})