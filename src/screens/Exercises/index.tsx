import { Text, View } from "react-native"
import { HomeTabScreenProps } from "../../navigation/types"

type Props = HomeTabScreenProps<'Exercises'>

const Exercises = ({ navigation }: Props) => {
    return <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Exercises</Text>
    </View>
}

export { Exercises as default }
