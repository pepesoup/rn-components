import { useTheme } from 'react-native-paper'
import { StyleProp, TextStyle } from 'react-native'
import merge from 'ts-deepmerge'
import { Link } from 'expo-router'

export type LinkProps = any & {
    children: any
    href: string
}

export const NavLink = (props: LinkProps) => {
    const { children, href, style, ...restProps } = props
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
        <Link style={_style} href={href} {...restProps}>
            {children}
        </Link>
    )
}

export default NavLink
