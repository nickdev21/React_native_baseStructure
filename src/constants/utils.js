import { colors } from "./colors";
import React, { useState, useEffect } from 'react'

import { View, Text, StyleSheet } from 'react-native'
import { B1, B14, B15, B16, B17, B18, B9, G1, G14, G15, G16, G17, G18, G9, R1, R14, R15, R16, R17, R18, R9, Y1, Y14, Y15, Y16, Y17, Y18, Y9 } from "./constant";

export const getCellBackgroundColor = (position) => {
    switch (position) {
        case R1:
        // case R9:
        case R14:
        case R15:
        case R16:
        case R17:
        case R18:
            return colors.red;
        case Y1:
        // case Y9:
        case Y14:
        case Y15:
        case Y16:
        case Y17:
        case Y18:
            return colors.yellow;
        case G1:
        // case G9:
        case G14:
        case G15:
        case G16:
        case G17:
        case G18:
            return colors.green;
        case B1:
        // case B9:
        case B14:
        case B15:
        case B16:
        case B17:
        case B18:
            return colors.blue;
        case R9:
        case Y9:
        case G9:
        case B9:
            return "#0D0D0D";
        default:
            return colors.white;
    }
}