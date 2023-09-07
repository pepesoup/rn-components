import { View, ViewStyle } from 'react-native'
import {
    Text,
    Switch as PaperSwitch,
    SwitchProps as PaperSwitchProps,
    useTheme,
} from 'react-native-paper'

export type Props = PaperSwitchProps & {
    label: string
}

const SwitchCmn = (props: Props) => {
    const theme = useTheme()
    const { label, ...restProps } = props
    return (
        <View
            style={{
                marginVertical: 10,
                //flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Text style={{ marginRight: 20 }}>{label}</Text>
            <PaperSwitch {...restProps} color={theme.colors.primary} />
        </View>
    )
}
export default SwitchCmn
