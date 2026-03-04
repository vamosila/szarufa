/*
* File: Input.js
* Author: Vámosi László Ádám
* Copyright: 2026, Vámosi László Ádám
* Group: Szoft II-N
* Date: 2026-03-04
* Github: https://github.com/vamosilaszloadam/
* Licenc: MIT
*/

import { StyleSheet, Text, TextInput, View } from "react-native";

function Input({label, onChangeText, value}) {
    return(
        <View style={styles.input}>
            <Text style={styles.inputText}>{label}</Text>
            <TextInput style={styles.inputField}
            onChangeText={onChangeText} 
            value={value}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        margin: 10,
    },
    inputText: {
        fontSize: 24,
        textAlign: 'center',
    },
    inputField: {
        fontSize: 24,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10,
        padding: 10,
        margin: 10,
    },
})

export default Input