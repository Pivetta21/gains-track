import { Button, Text, View } from 'react-native'
import { RootStackScreenProps } from '../../navigation/types'

type Props = RootStackScreenProps<'SignUp'>

const SignUp = ({ navigation }: Props) => {
  return <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Sign Up</Text>
    <Button title='Home Screen' onPress={() => navigation.navigate('Home')}/>
  </View>
}

export { SignUp as default }

