

import { StyleProp, ViewStyle, StyleSheet as SS, View as V, Text as T, Button as B, TouchableOpacity as TO, TextInput, SafeAreaView} from "react-native";
import { Ionicons, Fontisto, FontAwesome, MaterialIcons } from '@expo/vector-icons';

export const PatientDashboardSubComp = () => {
        return (
                <V>
                        <V style={{display: 'flex',  flexDirection: 'row' }}>
                                <TO style={{display: 'flex', justifyContent: 'center',backgroundColor: '#f2f2f2', height: 200, width: 150, padding: 10, borderRadius: 10, margin: 15, marginTop: 5, marginRight: 5}}>
                                        <V style={{alignItems: 'center', paddingBottom: 10}}>
                                                <Fontisto name="blood-test" size={36} color="#3A5F0B" />
                                        </V>
                                        <T style={{color: "#3A5F0B", fontSize: 20, fontWeight: '200', textAlign: 'center'}}>View Test Results</T>
                                </TO>
                                <TO style={{display: 'flex', justifyContent: 'center',backgroundColor: '#f2f2f2', height: 200, width: 150, padding: 10, borderRadius: 10, margin: 15, marginTop: 5, marginRight: 5}}>
                                        <V style={{alignItems: 'center', paddingBottom: 10}}>
                                                <FontAwesome name="street-view" size={36} color="#3A5F0B" />
                                        </V>
                                        <T style={{color: "#3A5F0B", fontSize: 20, fontWeight: '200', textAlign: 'center'}}>View Defined Prescription</T>
                                </TO>
                        </V>
                        <V style={{display: 'flex',  flexDirection: 'row' }}>
                                <TO style={{display: 'flex', justifyContent: 'center',backgroundColor: '#f2f2f2', height: 200, width: 150, padding: 10, borderRadius: 10, margin: 15, marginTop: 5, marginRight: 5}}>
                                        <V style={{alignItems: 'center', paddingBottom: 10}}>
                                                <MaterialIcons name="update" size={36} color="#3A5F0B" />
                                        </V>
                                        <T style={{color: "#3A5F0B", fontSize: 20, fontWeight: '200', textAlign: 'center'}}>Health Updates</T>
                                </TO>
                                <TO style={{display: 'flex', justifyContent: 'center',backgroundColor: '#f2f2f2', height: 200, width: 150, padding: 10, borderRadius: 10, margin: 15, marginTop: 5, marginRight: 5}}>
                                        <V style={{alignItems: 'center', paddingBottom: 10}}>
                                                <Ionicons name="settings-sharp" size={36} color="#3A5F0B" />
                                        </V>
                                        <T style={{color: "#3A5F0B", fontSize: 20, fontWeight: '200', textAlign: 'center'}}>Settings</T>
                                </TO>
                        </V>
                </V>
        )
}