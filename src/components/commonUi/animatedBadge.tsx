import { Text, ViewProps } from 'react-native'
import { PropsWithChildren, useEffect, useReducer, useRef } from 'react'
import { View, AnimatePresence } from 'moti'
import merge from 'ts-deepmerge'
import { useTheme } from 'react-native-paper'

type Props = ViewProps &
    PropsWithChildren & {
        size: number
        visible: boolean
    }

function Shape(props: Props) {
    const { size, children, style, ...rest } = props
    const theme = useTheme()
    return (
        <View
            {...rest}
            from={{
                opacity: 0,
                scale: 0.9,
            }}
            animate={{
                opacity: 1,
                scale: 1,
            }}
            exit={{
                opacity: 0,
                scale: 0.9,
            }}
            exitTransition={{
                type: 'timing',
                duration: 2500,
            }}
            style={merge(
                {
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: size,
                    width: size,
                    marginRight: 0,
                    backgroundColor: 'red',
                    paddingBottom: 0,
                    overflow: 'hidden',
                    borderRadius: size / 2,
                    borderWidth: 1,
                    borderColor: 'white', //theme.colors.primary,
                },
                style || {}
            )}
        >
            <Text style={{ color: 'white', fontSize: size - 4 }}>{children}</Text>
        </View>
    )
}

export default function AnimatedBadge(props: Props) {
    const { visible, children, ...rest } = props
    const interval = useRef<any>()
    const timer = useRef<any>()
    const [visibleLocal, toggle] = useReducer((s) => !s, false)
    const clear = useRef(() => {})

    useEffect(() => {
        if (visible) {
            clear.current()
            clear.current = startToggle()
            if (visibleLocal === false) {
                toggle()
            }
        } else {
            clear.current()
            if (visibleLocal === true) {
                toggle()
            }
        }
    }, [visible])

    useEffect(() => {}, [])

    const startToggle = () => {
        interval.current = setInterval(() => {
            toggle()
            timer.current = setTimeout(() => {
                toggle()
            }, 2000)
        }, 5000)
        return () => {
            clearInterval(interval.current)
            clearTimeout(timer.current)
        }
    }

    return (
        <AnimatePresence>
            {visibleLocal && (
                <Shape {...rest} visible={visible}>
                    {children}
                </Shape>
            )}
        </AnimatePresence>
    )
}
