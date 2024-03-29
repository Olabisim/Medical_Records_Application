/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined; 
  AdminLogin?: NavigatorScreenParams<RootTabParamList> | undefined; 
  AdminDashboard?: NavigatorScreenParams<RootTabParamList> | undefined; 
  DoctorRegister?: NavigatorScreenParams<RootTabParamList> | undefined;
  PatientRegister?: NavigatorScreenParams<RootTabParamList> | undefined;
  DoctorLogin?: NavigatorScreenParams<RootTabParamList> | undefined;
  PatientLogin?: NavigatorScreenParams<RootTabParamList> | undefined;
  PatientTestResult?: NavigatorScreenParams<RootTabParamList> | undefined;
  BottomTabNavigator?: NavigatorScreenParams<RootTabParamList> | undefined;
  BottomTabNavigator2?: NavigatorScreenParams<RootTabParamList> | undefined;
  Modal: undefined;
  NotFound: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  Screen
>;

export type RootTabParamList = {
  TabOne: any;
  TabTwo: any;
  TabThree: any;
};
export type RootTabParamList2 = {
  DoctorDashboard: any;
  TabTwo: any;
  TabThree: any;
};


export type RootStackParamList2 = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  DoctorRegister?: NavigatorScreenParams<RootTabParamList> | undefined;
  PatientRegister?: NavigatorScreenParams<RootTabParamList> | undefined;
  DoctorLogin?: NavigatorScreenParams<RootTabParamList> | undefined;
  PatientLogin?: NavigatorScreenParams<RootTabParamList> | undefined;
  PatientTestResult?: NavigatorScreenParams<RootTabParamList> | undefined;
  BottomTabNavigator?: NavigatorScreenParams<RootTabParamList> | undefined;
  Modal?: undefined;
  NotFound?: undefined;
};

export type RootTabParamList3 = {
  TabOne: any;
  TabTwo: any;
  TabThree: any;
};


export type RootTabScreenProps<Screen extends keyof RootTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<RootTabParamList, Screen>,
  NativeStackScreenProps<RootStackParamList>
>;
