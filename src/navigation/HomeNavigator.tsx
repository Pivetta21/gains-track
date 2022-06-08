import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Exercises from '../screens/Exercises'
import Routine from '../screens/Routine'
import Settings from '../screens/Settings'
import type { HomeTabParamList } from './types'

const Tab = createBottomTabNavigator<HomeTabParamList>()

const HomeNavigator = () => {
    return <Tab.Navigator initialRouteName='Routine' backBehavior='initialRoute'>
        <Tab.Screen name='Exercises' component={Exercises} />
        <Tab.Screen name='Routine' component={Routine} />
        <Tab.Screen name='Settings' component={Settings} />
    </Tab.Navigator>
}

export { HomeNavigator as default }

