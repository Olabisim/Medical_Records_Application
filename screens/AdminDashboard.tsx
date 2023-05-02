import { StyleSheet } from 'react-native';

// import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
// import { PatientDashboardSubComp } from '../components/PatientDashboardSubComp';
import { StyleProp, ViewStyle, StyleSheet as SS, View as V, Text as T, Button as B, TouchableOpacity as TO, TextInput, SafeAreaView, ScrollView as SV} from "react-native";
import { Ionicons, Fontisto, FontAwesome, MaterialIcons, Entypo } from '@expo/vector-icons';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from 'react';import { AntDesign } from '@expo/vector-icons';

export default function AdminDashboard({ navigation: {navigate} }: any) {

        const [token, setToken] = useState<string | null>('')
        
        const storeData = async () => {
                try {
                        const value = await AsyncStorage.getItem('@admin_key')
                        setToken(value)
                }
                catch(e) {

                }
        }
        storeData()
        console.log("admin token")
        console.log(token)

        const removeData = async () => {
                try {
                        await AsyncStorage.setItem('@admin_key', '')
                        navigate('Root', {data: "user logged out successfully"})
                }
                catch (e) {

                }
        }

        const handleLogout = ( ) => {
                removeData()
        }

        return (
        <SV>
                
                <View style={styles.container}>

                        <Text style={[styles.title, {paddingBottom: 20, marginTop: 20, paddingTop: 20}]}>ADMIN DASHBOARD</Text>
                                <V>
                                        <V style={{display: 'flex',  flexDirection: 'row' }}>
                                                <TO onPress={() => navigate("PatientTestResult")} style={{display: 'flex', justifyContent: 'center',backgroundColor: '#f2f2f2', height: 200, width: 150, padding: 10, borderRadius: 10, margin: 15, marginTop: 5, marginRight: 5}}>
                                                        <V style={{alignItems: 'center', paddingBottom: 10}}>
                                                                <Fontisto name="blood-test" size={36} color="#3A5F0B" />
                                                        </V>
                                                        <T style={{color: "#3A5F0B", fontSize: 20, fontWeight: '200', textAlign: 'center'}}>Assign Patient to Doctor</T>
                                                </TO>
                                                <TO style={{display: 'flex', justifyContent: 'center',backgroundColor: '#f2f2f2', height: 200, width: 150, padding: 10, borderRadius: 10, margin: 15, marginTop: 5, marginRight: 5}}>
                                                        <V style={{alignItems: 'center', paddingBottom: 10}}>
                                                                <FontAwesome name="street-view" size={36} color="#3A5F0B" />
                                                        </V>
                                                        <T style={{color: "#3A5F0B", fontSize: 20, fontWeight: '200', textAlign: 'center'}}>Update Patient Health History</T>
                                                </TO>
                                        </V>
                                        <V style={{display: 'flex',  flexDirection: 'row' }}>
                                                <TO style={{display: 'flex', justifyContent: 'center',backgroundColor: '#f2f2f2', height: 200, width: 150, padding: 10, borderRadius: 10, margin: 15, marginTop: 5, marginRight: 5}} onPress={() => navigate('DoctorRegister')}>
                                                        <V style={{alignItems: 'center', paddingBottom: 10}}>
                                                                {/* <MaterialIcons name="update" size={36} color="#3A5F0B" /> */}
                                                                <Entypo name="flow-parallel" size={36} color="#3A5F0B" />
                                                        </V>
                                                        <T style={{color: "#3A5F0B", fontSize: 20, fontWeight: '200', textAlign: 'center'}}>Create New Doctor</T>
                                                </TO>
                                                <TO style={{display: 'flex', justifyContent: 'center',backgroundColor: '#f2f2f2', height: 200, width: 150, padding: 10, borderRadius: 10, margin: 15, marginTop: 5, marginRight: 5}}>
                                                        <V style={{alignItems: 'center', paddingBottom: 10}}>
                                                                <Fontisto name="test-tube" size={36} color="#3A5F0B" />
                                                        </V>
                                                        <T style={{color: "#3A5F0B", fontSize: 20, fontWeight: '200', textAlign: 'center'}}>Get All Doctors</T>
                                                </TO>
                                        </V>
                                        <V style={{display: 'flex',  flexDirection: 'row' }}>
                                                <TO style={{display: 'flex', justifyContent: 'center',backgroundColor: '#f2f2f2', height: 200, width: 150, padding: 10, borderRadius: 10, margin: 15, marginTop: 5, marginRight: 5}}>
                                                        <V style={{alignItems: 'center', paddingBottom: 10}}>
                                                                <MaterialIcons name="update" size={36} color="#3A5F0B" />
                                                        </V>
                                                        <T style={{color: "#3A5F0B", fontSize: 20, fontWeight: '200', textAlign: 'center'}}>Get all Patient</T>
                                                </TO>
                                                <TO onPress={() => handleLogout()} style={{display: 'flex', justifyContent: 'center',backgroundColor: '#cc0000', height: 200, width: 150, padding: 10, borderRadius: 10, margin: 15, marginTop: 5, marginRight: 5}}>
                                                        <V style={{alignItems: 'center', paddingBottom: 10}}>
                                                                <AntDesign name="logout" size={36} color="#fff"  />
                                                        </V>
                                                        <T style={{color: "#fff", fontSize: 20, fontWeight: '200', textAlign: 'center'}}>Log out</T>
                                                </TO>
                                        </V>
                                </V>
                </View>
        
        </SV>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 17,
    fontWeight: 'normal',
    color: '#3A5F0B',
    padding: 14,
    paddingBottom: 4
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
