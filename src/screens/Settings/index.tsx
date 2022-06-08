import { Text, View } from "react-native"
import { HomeTabScreenProps } from "../../navigation/types"

type Props = HomeTabScreenProps<'Settings'>

const Settings = ({ navigation }: Props) => {
    return <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Settings</Text>
    </View>
}

export { Settings as default }
