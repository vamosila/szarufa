/*
* File: AdvancedButton.js
* Author: Vámosi László Ádám
* Copyright: 2026, Vámosi László Ádám
* Group: Szoft II-N
* Date: 2026-03-04
* Github: https://github.com/vamosilaszloadam/
* Licenc: MIT
*/

import { StyleSheet, Text, TouchableHighlight } from "react-native"

function AdvancedButton({title, onPress}) {
    return(
        <TouchableHighlight
            style={styles.button}
            onPress={onPress}
        >
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'lightblue',
        marginTop: 10,
        padding: 10,
        borderRadius: 10,
        boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.5)',
        margin: 10,
    },
    buttonText: {
        color: 'white',
        paddingLeft: 10,
        paddingRight: 10,
        fontSize: 24,
        textAlign: 'center',
    }
})

export default AdvancedButton