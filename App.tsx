import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ThemeProvider } from 'styled-components';
import useAppLoad from './src/hooks/useAppLoad';
import RootNavigator from './src/navigation/RootNavigator';
import theme from './src/styles/themes/light';

export default function App() {
  const [appIsReady, onLayoutRootView] = useAppLoad();

  if (!appIsReady) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView style={{ flex: 1 }} onLayout={onLayoutRootView}>
        <StatusBar
          style={theme.isDark ? 'light' : 'dark'}
          backgroundColor={theme.COLORS.SURFACE}
        />
        <RootNavigator />
      </SafeAreaView>
    </ThemeProvider>
  );
}
