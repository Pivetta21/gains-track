import { Button, Text, View } from 'react-native';
import { RootStackScreenProps } from '../../navigation/types';

type Props = RootStackScreenProps<'Welcome'>

const Welcome = ({ navigation }: Props) => {
    return <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Welcome</Text>

        <View style={{flexDirection: 'row', justifyContent: 'space-evenly', borderBottomWidth: 1}}>
            <Button title='Sign Up' onPress={() => navigation.navigate('SignUp')} />
            <Button title='Log In' onPress={() => navigation.navigate('LogIn')} />
        </View>
    </View>
}

export { Welcome as default };
