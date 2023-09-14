import { useTheme } from 'react-native-paper'
import { Pressable, StyleProp, TextStyle } from 'react-native'
import merge from 'ts-deepmerge'
import { Link, useRouter } from 'expo-router'
import ButtonCmn from '../buttonCmn'

export type LinkProps = any & {
    children: any
    href: string
}

export const NavLink = (props: LinkProps) => {
    const { children, href, style, ...restProps } = props
    const theme = useTheme()
    const router = useRouter()

    const _style: StyleProp<TextStyle> = merge(
        {
            fontWeight: 'bold',
            textDecorationLine: 'underline',
            color: theme.colors.primary,
            margin: 10,
        },
        style || {}
    )

    return (
        <Link style={_style} href={href} {...restProps}>
            {children}
        </Link>
    )
}

export default NavLink
