import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from 'styled-components';
import Exercises from '../screens/Exercises';
import Routine from '../screens/Routine';
import Settings from '../screens/Settings';
import type { HomeTabParamList } from './types';

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
        tabBarIcon: ({ color, size }) => {
          switch (route.name) {
            case 'Exercises':
              return <Icon name="dumbbell" size={size} color={color} />;
            case 'Routine':
              return <Icon name="calendar-week" size={size} color={color} />;
            case 'Settings':
              return <Icon name="cog-outline" size={size} color={color} />;
          }
        },
      })}
    >
      <Tab.Screen name="Exercises" component={Exercises} />
      <Tab.Screen name="Routine" component={Routine} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
};

export { HomeNavigator as default };
