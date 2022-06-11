import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';
import useAppLoad from './src/hooks/useAppLoad';
import RootNavigator from './src/navigation/RootNavigator';

export default function App() {
  const [appIsReady, onLayoutRootView] = useAppLoad();

  if (!appIsReady) {
    return null;
  }

  return (
    <SafeAreaView style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <StatusBar style="auto" />
      <RootNavigator />
    </SafeAreaView>
  );
}
