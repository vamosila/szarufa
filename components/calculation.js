/*
* File: calculation.js
* Author: Vámosi László Ádám
* Copyright: 2026, Vámosi László Ádám
* Group: Szoft II-N
* Date: 2026-03-04
* Github: https://github.com/vamosilaszloadam/
* Licenc: MIT
*/

function calcRafterLength(widthOfHouseIn, widthOfGutterIn, alphaAngleIn) {
    const widthOfHouse = parseFloat(widthOfHouseIn);
    const widthOfGutter = parseFloat(widthOfGutterIn);
    const alphaAngle = parseFloat(alphaAngleIn);
    const alphaRadian = alphaAngle * Math.PI / 180;

    const halfWidth = widthOfHouse / 2;
    const rafterLength = (halfWidth + widthOfGutter) / Math.cos(alphaRadian);
    console.log(rafterLength);

    return rafterLength;
}

export default calcRafterLength