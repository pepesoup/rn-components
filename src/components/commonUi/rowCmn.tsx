import { View, ViewProps } from 'react-native'
import merge from 'ts-deepmerge'

export type TextProps = ViewProps & {
    children: any
}

const RowCmn = (props: TextProps) => {
    const { children, style, ...restProps } = props
    const _style = merge(
        {
            flexDirection: 'row',
            alignItems: 'center',
            gap: 6,
        },
        style || {}
    )

    return (
        <View style={_style} {...restProps}>
            {children}
        </View>
    )
}

export default RowCmn
