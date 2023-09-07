import { TextProps as PaperTextProps, useTheme } from 'react-native-paper'
import TextCmn from '../text/textCmn'
import { Pressable, StyleProp, TextStyle, View } from 'react-native'
import merge from 'ts-deepmerge'
import * as Linking from 'expo-linking'

export type TextProps = PaperTextProps<any> & {
    children: any
    url: string
}

const LinkCmn = (props: TextProps) => {
    const { children, url, style, ...restProps } = props
    const theme = useTheme()

    const _style: StyleProp<TextStyle> = merge(
        {
            fontWeight: 'bold',
            textDecorationLine: 'underline',
            color: theme.colors.primary,
        },
        style || {}
    )

    return (
        <Pressable
            onPress={() => {
                Linking.openURL(encodeURI(url))
            }}
        >
            <TextCmn style={_style} {...restProps} numberOfLines={0}>
                {children}
            </TextCmn>
        </Pressable>
    )
}

export default LinkCmn
