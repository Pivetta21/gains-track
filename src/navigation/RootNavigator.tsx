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
  const { isDark, COLORS, FONTS } = useTheme();

  return (
    <NavigationContainer
      theme={{
        dark: isDark,
        colors: {
          ...DefaultTheme.colors,
          primary: COLORS.PRIMARY,
          background: COLORS.BACKGROUND,
          card: COLORS.SURFACE,
          text: COLORS.TEXT,
          border: isDark ? COLORS.SECONDARY : DefaultTheme.colors.border,
        },
      }}
    >
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={({ navigation }) => ({
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontFamily: FONTS.BOLD,
            fontSize: 16,
          },
          headerLeft: ({ tintColor, canGoBack }) => (
            <Pressable
              android_ripple={{
                color: isDark ? '#0b0b0b' : '#CBCBCB',
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
            contentStyle: { backgroundColor: COLORS.SURFACE },
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
          options={{
            animation: 'slide_from_bottom',
            title: 'Enter your details',
          }}
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
