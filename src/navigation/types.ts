import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import type {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Welcome: undefined;
  LogIn: undefined;
  SignUp: undefined;
  Home: NavigatorScreenParams<HomeTabParamList>;
};

export type RootStackRoutesName = keyof RootStackParamList;

export type RootStackScreenProps<T extends RootStackRoutesName> =
  NativeStackScreenProps<RootStackParamList, T>;

export type HomeTabParamList = {
  Exercises: undefined;
  Routine: undefined;
  Settings: undefined;
};

export type HomeTabRoutesName = keyof HomeTabParamList;

export type HomeTabScreenProps<T extends HomeTabRoutesName> =
  CompositeScreenProps<
    BottomTabScreenProps<HomeTabParamList, T>,
    RootStackScreenProps<keyof RootStackParamList>
  >;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
