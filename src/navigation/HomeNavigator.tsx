import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from 'styled-components';
import Exercises from '../screens/Exercises';
import Routine from '../screens/Routine';
import Settings from '../screens/Settings';
import type { HomeTabParamList, HomeTabRoutesName } from './types';
import { IconName } from '../types';

const iconsMap = new Map<HomeTabRoutesName, IconName>([
  ['Exercises', 'dumbbell'],
  ['Routine', 'calendar-week'],
  ['Settings', 'cog-outline'],
]);

const Tab = createBottomTabNavigator<HomeTabParamList>();

const HomeNavigator = () => {
  const theme = useTheme();

  return (
    <Tab.Navigator
      initialRouteName="Routine"
      backBehavior="initialRoute"
      screenOptions={({ route }) => ({
        headerTitleStyle: {
          fontFamily: theme.FONTS.BOLD,
          fontSize: 20,
        },
        tabBarShowLabel: false,
        tabBarIcon: ({ color, size }) => (
          <Icon name={iconsMap.get(route.name)} size={size} color={color} />
        ),
      })}
    >
      <Tab.Screen name="Exercises" component={Exercises} />
      <Tab.Screen name="Routine" component={Routine} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
};

export { HomeNavigator as default };
