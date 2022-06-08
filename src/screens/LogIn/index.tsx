import { Button, Text, View } from 'react-native'
import type { RootStackScreenProps } from '../../navigation/types'

type Props = RootStackScreenProps<'LogIn'>

const LogIn = ({ navigation }: Props) => {
    return <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Log In</Text>
        <Button title='Home Screen' onPress={() => navigation.navigate('Home')} />
    </View>
}

export { LogIn as default }
