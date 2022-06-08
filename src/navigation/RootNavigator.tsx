import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LogIn from '../screens/LogIn'
import SignUp from '../screens/SignUp'
import Welcome from '../screens/Welcome'
import HomeNavigator from './HomeNavigator'
import type { RootStackParamList } from './types'

const Stack = createNativeStackNavigator<RootStackParamList>()

const RootNavigator = () => {
    return <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Welcome' component={Welcome} />
            <Stack.Screen name='SignUp' component={SignUp} />
            <Stack.Screen name='LogIn' component={LogIn} />
            <Stack.Screen name='Home' component={HomeNavigator} />
        </Stack.Navigator>
    </NavigationContainer>
}

export { RootNavigator as default }

