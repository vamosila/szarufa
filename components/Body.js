/*
* File: Body.js
* Author: Vámosi László Ádám
* Copyright: 2026, Vámosi László Ádám
* Group: Szoft II-N
* Date: 2026-03-04
* Github: https://github.com/vamosilaszloadam/
* Licenc: MIT
*/

import { StyleSheet, Text, View } from "react-native"
import AdvancedButton from "./AdvancedButton"
import Input from "./Input";
import { useState } from "react";
import calcRafterLength from "./calculation";

function Body() {
    const [widthOfHouse, setWidthOfHouse] = useState(0);
    const [widthOfGutter, setWidthOfGutter] = useState(0);
    const [alphaAngle, setAlphaAngle] = useState(0);
    const [lengthOfRafter, setLengthOfRafter] = useState(0);

    function startCalculation() {
        console.log('Számítás ...');
        console.log(widthOfHouse, widthOfGutter, alphaAngle);
        const rafterLength = calcRafterLength(widthOfHouse, widthOfGutter, alphaAngle);
        // setLengthOfRafter(((widthOfHouse/2)+widthOfGutter)/Math.cos(alphaAngle*Math.PI/180));
        // setLengthOfRafter(widthOfHouse/2*Math.tan(alphaAngle));
        setLengthOfRafter(rafterLength);
    }
    return (
        <View style={styles.body}>
            <Text style={styles.bodyText}>
                Szarufa hosszának számítása
            </Text>

            <Input 
            label="A ház szélessége" 
            onChangeText={(num) => setWidthOfHouse(num)}
            />

            <Input 
            label="Az eresz szélessége" 
            onChangeText={setWidthOfGutter}
            />

            <Input 
            label="A tető dőlésszöge" 
            onChangeText={setAlphaAngle}
            />

            <AdvancedButton 
            title="Számít" 
            onPress={() => {startCalculation()}}
            />

            <Input 
            label="A szarufa hossza" 
            value={lengthOfRafter}
            />
            
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        width: '100%',
  },
    bodyText: {
        fontSize: '24px',
        textAlign: 'center',
  },
})

export default Body