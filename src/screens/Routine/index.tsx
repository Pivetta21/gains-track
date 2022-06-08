import { Text, View } from "react-native"
import { HomeTabScreenProps } from "../../navigation/types"

type Props = HomeTabScreenProps<'Routine'>

const Routine = ({ navigation }: Props) => {
    return <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Routine</Text>
    </View>
}

export { Routine as default }
