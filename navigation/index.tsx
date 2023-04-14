/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import { DoctorLogin } from '../screens/DoctorLogin';
import { DoctorRegister } from '../screens/DoctorRegister';
import { LandingScreen } from '../screens/LandingScreen';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import { PatientLogin } from '../screens/PatientLogin';
import { PatientRegister } from '../screens/PatientRegister';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import { RootStackParamList, RootTabParamList,RootTabParamList2, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import { PatientTestResult } from '../screens/PatientTestResult';
import DoctorDashboard from '../screens/DoctorDashboard';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
      {/* <OtherNavigator /> */}
    </NavigationContainer>
  );
}

/**s
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={LandingScreen} options={{ headerShown: false }} />
      {/* <Stack.Screen name="Roo" component={DoctorLogin} options={{ headerShown: false }} /> */}
      <Stack.Screen name="DoctorRegister" component={DoctorRegister} options={{ headerShown: false }} />
      <Stack.Screen name="PatientRegister" component={PatientRegister} options={{ headerShown: false }} />
      <Stack.Screen name="DoctorLogin" component={DoctorLogin} options={{ headerShown: false }} />
      <Stack.Screen name="PatientLogin" component={PatientLogin} options={{ headerShown: false }} />
      <Stack.Screen name="PatientTestResult" component={PatientTestResult} options={{ headerShown: false }} />
      <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="BottomTabNavigator2" component={BottomTabNavigator2} options={{ headerShown: false }} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

// function OtherNavigator() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="Root" component={DoctorLogin} options={{ headerShown: false }} />
//       <Stack.Screen name="DoctorRegister" component={DoctorRegister} options={{ headerShown: false }} />
//       <Stack.Screen name="DoctorRegister" component={DoctorRegister} options={{ headerShown: false }} />
//       <Stack.Screen name="PatientRegister" component={PatientRegister} options={{ headerShown: false }} />
//       <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
//       <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
//       <Stack.Group screenOptions={{ presentation: 'modal' }}>
//         <Stack.Screen name="Modal" component={ModalScreen} />
//       </Stack.Group>
//     </Stack.Navigator>
//   );
// }

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}>
      <BottomTab.Screen
        name="TabOne"
        component={TabOneScreen}
        options={({ navigation }: any) => ({
          title: 'Dashboard',
          tabBarIcon: ({ color }) => <MaterialIcons name="dashboard" size={32} color={color} />,
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('Modal')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}>
              <FontAwesome
                name="info-circle"
                size={25}
                color={Colors[colorScheme].text}
                style={{ marginRight: 15 }}
              />
            </Pressable>
          )
        })}
      />
      <BottomTab.Screen
        name="TabTwo"
        component={TabTwoScreen}
        options={{
          title: 'About',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="vector-arrange-above" size={32} color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}


const BottomTab2 = createBottomTabNavigator<RootTabParamList2>();


function BottomTabNavigator2() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab2.Navigator
      initialRouteName="DoctorDashboard"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}>
      <BottomTab2.Screen
        name="DoctorDashboard"
        component={DoctorDashboard}
        options={({ navigation }: any) => ({
          title: 'Dashboard',
          tabBarIcon: ({ color }) => <MaterialIcons name="dashboard" size={32} color={color} />,
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('Modal')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}>
              <FontAwesome
                name="info-circle"
                size={25}
                color={Colors[colorScheme].text}
                style={{ marginRight: 15 }}
              />
            </Pressable>
          )
        })}
      />
      <BottomTab2.Screen
        name="TabTwo"
        component={TabTwoScreen}
        options={{
          title: 'Changes',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="vector-arrange-above" size={32} color={color} />,
        }}
      />

      <BottomTab2.Screen
        name="TabThree"
        component={TabTwoScreen}
        options={{
          title: 'About',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="vector-arrange-above" size={32} color={color} />,
        }}
      />
    </BottomTab2.Navigator>
  );
}
/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
