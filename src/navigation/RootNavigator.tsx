import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Pressable } from 'react-native';
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
          primary: theme.COLORS.PRIMARY,
          background: theme.COLORS.BACKGROUND,
          card: theme.COLORS.SURFACE,
          text: theme.COLORS.TEXT,
        },
      }}
    >
      <Stack.Navigator
        screenOptions={({ navigation }) => ({
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontFamily: theme.FONTS.BOLD,
            fontSize: 16,
          },
          headerLeft: ({ tintColor, canGoBack }) => (
            <Pressable
              android_ripple={{
                color: theme.isDark ? '#0b0b0b' : '#CBCBCB',
                borderless: true,
                radius: 22,
              }}
              onPress={() => {
                if (canGoBack) navigation.pop();
              }}
            >
              <Icon name="close" size={26} color={tintColor} />
            </Pressable>
          ),
        })}
      >
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{
            headerShown: false,
            contentStyle: { backgroundColor: theme.COLORS.SURFACE },
          }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{
            animation: 'slide_from_bottom',
            title: 'Create an account',
          }}
        />
        <Stack.Screen
          name="LogIn"
          component={LogIn}
          options={{ animation: 'slide_from_bottom', title: 'Log in' }}
        />
        <Stack.Screen
          name="Home"
          component={HomeNavigator}
          options={{ animation: 'default', headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export { RootNavigator as default };
