import { StyleSheet, Text, TextInput, View } from 'react-native';
import { TextInputProps } from 'react-native';

interface Props extends TextInputProps {
    label: string;
}

export default function MyInput(props: Props) {
    return (
        <View style={styles.inputContainer}>
            <Text>{props.label}:</Text>
            <TextInput style={styles.input} { ...props } />
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        width: '80%',
        marginBottom: 20,
    },
    input: {
        padding: 10,
        fontSize: 18,
        borderWidth: 1,
        borderRadius: 3,
    },
});