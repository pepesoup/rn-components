import React, { PropsWithChildren, ReactNode } from 'react'
import { TextProps as PaperTextProps } from 'react-native-paper'
import TextCmn from '../text/textCmn'
import { StyleProp, TextStyle, View, ViewProps } from 'react-native'
import { GapCmn } from '..'
import merge from 'ts-deepmerge'
import _ from 'lodash'

export type TextRowProps = PaperTextProps<any> & {
    label?: string
    children: string
    hideOnEmptyText?: boolean
    style?: StyleProp<TextStyle>
    styleLabel?: StyleProp<TextStyle>
    styleContainer?: StyleProp<TextStyle>
}

/**
 TODO: 
    Add react-native-responsive-fontsize. 
    Take font-size from theme and adapt with RFValue
 */
export const TextRow = (props: TextRowProps) => {
    const { label, children, style, styleLabel, styleContainer, ...restProps } = props

    if (_.isEmpty(children)) {
        return null
    }

    const _style: StyleProp<TextStyle> = merge({ flex: 1 }, style || {}) as TextStyle
    const _styleLabel: StyleProp<TextStyle> = merge({ fontWeight: 'bold' }, styleLabel || {})
    const _styleContainer: StyleProp<TextStyle> = merge(
        {
            justifyContent: 'center',
            flexDirection: 'row',
            gap: label ? 6 : 0,
            flexWrap: 'wrap',
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

export type ChildrendRowProps = PaperTextProps<any> & {
    label?: string
    children: ReactNode
    hideIfValueIsEmpty?: any
    style?: StyleProp<TextStyle>
    styleLabel?: StyleProp<TextStyle>
    styleContainer?: StyleProp<TextStyle>
}
export const ChildrenRow = (props: ChildrendRowProps) => {
    const { label, hideIfValueIsEmpty, children, style, styleLabel, styleContainer, ...restProps } =
        props
    if (hideIfValueIsEmpty !== undefined && _.isEmpty(hideIfValueIsEmpty)) {
        return null
    }

    const _style: StyleProp<TextStyle> = merge(
        { flexDirection: 'row', alignItems: 'center', gap: 6 },
        style || {}
    )
    const _styleLabel: StyleProp<TextStyle> = merge({ fontWeight: 'bold' }, styleLabel || {})
    const _styleContainer: StyleProp<TextStyle> = merge(
        {
            flexDirection: 'row',
            alignItems: 'center',
            gap: label ? 6 : 0,
            flexWrap: 'wrap',
        },
        styleContainer || {}
    )

    return (
        <View style={_styleContainer}>
            <TextCmn style={_styleLabel} {...restProps}>
                {label}
            </TextCmn>
            <View style={_style}>{children}</View>
        </View>
    )
}
