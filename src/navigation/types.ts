import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs'
import type { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native'
import type { NativeStackScreenProps } from '@react-navigation/native-stack'

export type RootStackParamList = {
    Welcome: undefined;
    LogIn: undefined;
    SignUp: undefined;
    Home: NavigatorScreenParams<HomeTabParamList>;
}

export type RootStackScreenProps<T extends keyof RootStackParamList> =
    NativeStackScreenProps<RootStackParamList, T>

export type HomeTabParamList = {
    Exercises: undefined;
    Routine: undefined;
    Settings: undefined;
}

export type HomeTabScreenProps<T extends keyof HomeTabParamList> =
    CompositeScreenProps<
        BottomTabScreenProps<HomeTabParamList, T>,
        RootStackScreenProps<keyof RootStackParamList>
    >

declare global {
    namespace ReactNavigation {
        interface RootParamList extends RootStackParamList { }
    }
}
