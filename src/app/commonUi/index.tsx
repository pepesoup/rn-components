import { ButtonCmn, ScreenCmn } from "@components/commonUi";
import React from "react";
import {
    MD3Theme,
    MD3DarkTheme as PaperDarkTheme,
    MD3LightTheme as PaperLightTheme,
} from 'react-native-paper'


export default function CommonUi() {
    return (<ScreenCmn theme={PaperDarkTheme}>
        <ButtonCmn title="ButtonCmn" />

    </ScreenCmn>)
}