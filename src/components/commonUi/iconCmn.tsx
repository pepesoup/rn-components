import { Icon, IconProps } from '@expo/vector-icons/build/createIconSet'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons/'

export type IconCmnType = 'MaterialCommunityIcons' | 'Ionicons'

/*
export default function <G extends string, FN extends string>(
    glyphMap: GlyphMap<G>,
    fontName: FN,
    expoAssetId: any,
    fontStyle?: any
): Icon<G, FN>
*/

type Glyphs = {
    A: keyof typeof MaterialCommunityIcons.glyphMap
    B: keyof typeof Ionicons.glyphMap
}

type Props = IconProps<Glyphs['A'] | Glyphs['B']> & {
    type: IconCmnType
}

export default function IconCmn(props: Props) {
    const { type, name, ...rest } = props
    switch (type) {
        case 'MaterialCommunityIcons':
            return <MaterialCommunityIcons name={name as Glyphs['A']} {...rest} />
        case 'Ionicons':
            return <Ionicons name={name as Glyphs['B']} {...rest} />
    }
}
