/*
* File: Footer.js
* Author: Vámosi László Ádám
* Copyright: 2026, Vámosi László Ádám
* Group: Szoft II-N
* Date: 2026-03-04
* Github: https://github.com/vamosilaszloadam/
* Licenc: MIT
*/

import { StyleSheet, Text, View } from "react-native"

function Footer() {
    return (
      <View style={styles.footer}>
        <Text style={styles.footerText}>Vámosi László Ádám, 2026-03-03, II-N</Text>
      </View>
    )
}

const styles = StyleSheet.create({
    footer: {},
    footerText: {},
})

export default Footer