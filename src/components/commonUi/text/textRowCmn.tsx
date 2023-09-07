import React from 'react'
import { TextProps as PaperTextProps } from 'react-native-paper'
import TextCmn from './textCmn'
import { StyleProp, TextStyle, View } from 'react-native'
import { GapCmn } from '..'
import merge from 'ts-deepmerge'

export type TextProps = PaperTextProps<any> & {
    label?: string
    children: any
    style?: StyleProp<TextStyle>
    styleLabel?: StyleProp<TextStyle>
    styleContainer?: StyleProp<TextStyle>
}

/**
 TODO: 
    Add react-native-responsive-fontsize. 
    Take font-size from theme and adapt with RFValue
 */
const TextRowCmn = (props: TextProps) => {
    const { label, children, style, styleLabel, styleContainer, ...restProps } = props

    const _style: StyleProp<TextStyle> = merge({ flex: 1 }, style || {})
    const _styleLabel: StyleProp<TextStyle> = merge({ fontWeight: 'bold' }, styleLabel || {})
    const _styleContainer: StyleProp<TextStyle> = merge(
        {
            flexDirection: 'row',
            gap: label ? 6 : 0,
            //flexWrap: 'wrap',
        },
        styleContainer || {}
    )

    return (
        <View style={_styleContainer}>
            <TextCmn style={_styleLabel} {...restProps}>
                {label}
            </TextCmn>
            <TextCmn style={_style} {...restProps} numberOfLines={0}>
                {children}
            </TextCmn>
        </View>
    )
}

export default TextRowCmn
