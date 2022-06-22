import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTheme } from 'styled-components';
import LogIn from '../screens/LogIn';
import SignUp from '../screens/SignUp';
import Welcome from '../screens/Welcome';
import HomeNavigator from './HomeNavigator';
import type { RootStackParamList } from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  const theme = useTheme();

  return (
    <NavigationContainer
      theme={{
        dark: theme.isDark,
        colors: {
          ...DefaultTheme.colors,
          background: theme.COLORS.BACKGROUND,
          text: theme.COLORS.TEXT,
        },
      }}
    >
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{ animation: 'slide_from_left' }}
        />
        <Stack.Screen
          name="LogIn"
          component={LogIn}
          options={{ animation: 'slide_from_right' }}
        />
        <Stack.Screen
          name="Home"
          component={HomeNavigator}
          options={{ animation: 'fade' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export { RootNavigator as default };
