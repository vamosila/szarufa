/*
* File: Header.js
* Author: Vámosi László Ádám
* Copyright: 2026, Vámosi László Ádám
* Group: Szoft II-N
* Date: 2026-03-04
* Github: https://github.com/vamosilaszloadam/
* Licenc: MIT
*/

import { StyleSheet, Text, View } from "react-native";

function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.headerText}>Szarufa</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#238ba9',
        padding: '10px',
        width: '100%',
        color: 'white',
    },
    headerText: {
        color: 'white',
        fontSize: '34px',
        textAlign: 'center',
        fontWeight: 'bold',
    },
})

export default Header