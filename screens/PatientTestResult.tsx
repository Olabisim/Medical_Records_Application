

import { StyleProp, ViewStyle, StyleSheet as SS, View as V, Text as T, Button as B, TouchableOpacity as TO, TextInput, SafeAreaView, ScrollView as SV} from "react-native";
import { AntDesign } from '@expo/vector-icons';

// "typeOfSickness": "Some sicknesssa",
// "prescriptionOfSickness": "Some prescription",
// "drugsDescription": "Some drug prescription",
// "testResult": "asdf;lkj",
// "requireSurgery": true

const incomingData = [
        {
                typeOfSickness: 'malaria', 
                prescriptionOfSickness: "Malaria is a disease caused by a parasite. The parasite is spread to humans through the bites of infected mosquitoes. People who have malaria usually feel very sick with a high fever and shaking chills.", 
                drugsDescription: "Take two paracetamol, three times daily, Eat as much as you can",
                testResult: "sample of the test result",
                requireSurgery: true
        },
        {
                typeOfSickness: 'malaria', 
                prescriptionOfSickness: "Malaria is a disease caused by a parasite. The parasite is spread to humans through the bites of infected mosquitoes. People who have malaria usually feel very sick with a high fever and shaking chills.", 
                drugsDescription: "Take two paracetamol, three times daily, Eat as much as you can",
                testResult: "sample of the test result",
                requireSurgery: false
        },
        {
                typeOfSickness: 'malaria', 
                prescriptionOfSickness: "Malaria is a disease caused by a parasite. The parasite is spread to humans through the bites of infected mosquitoes. People who have malaria usually feel very sick with a high fever and shaking chills.", 
                drugsDescription: "Take two paracetamol, three times daily, Eat as much as you can",
                testResult: "sample of the test result",
                requireSurgery: true
        }
]

export const PatientTestResult = ({navigation: {navigate}}:any) => {
        return (
                <SV>
                <V style={{margin: 20}}>
                        <V>
                                <TO onPress={() => navigate("BottomTabNavigator")}>
                                        <V style={{display: 'flex', flexDirection: 'row', paddingTop: 20, paddingHorizontal: 10, paddingBottom: 10}}>
                                                <AntDesign name="arrowleft" size={22} color="black" /> 
                                                <T> Go Back</T> 
                                        </V>
                                </TO>
                        </V>
                        <V>
                                {
                                        incomingData.map((each, key) => (
                                                <V style={{backgroundColor: "#e6e6e6", padding: 20, margin: 10, marginBottom: 20, borderRadius: 10}} key={key}>
                                                        <V style={{display: 'flex', flexDirection: "row", justifyContent: 'space-between'}}>
                                                                <T style={{color: "#3A5F0B", fontSize: 24, textTransform: 'uppercase', fontWeight: "300", letterSpacing: 2}}>{each.typeOfSickness}</T>
                                                                <V>
                                                                        <T style={{backgroundColor: "rgba(0,0,0,0.3)", color: "#fff", paddingHorizontal: 10, paddingVertical: 5, borderRadius: 3, marginTop: 5, fontSize: 12}}>10/11/2020</T>
                                                                </V>

                                                        </V>
                                                        <V style={{paddingVertical: 5}}>     
                                                                <T style={{fontWeight: "400", paddingVertical: 4}}>Prescription</T>
                                                                <T style={{fontWeight: "200"}}>{each.prescriptionOfSickness}</T>
                                                        </V>
                                                        <V style={{paddingVertical: 5}}>     
                                                                <T style={{paddingVertical: 4}}>Description</T>
                                                                <T style={{fontWeight: "200"}}>{each.drugsDescription}</T>
                                                        </V>
                                                        <V style={{paddingVertical: 5}}>     
                                                                <T style={{paddingVertical: 4}}>Test Result</T>
                                                                <T style={{fontWeight: "200"}}>{each.testResult}</T>
                                                        </V>
                                                        
                                                        {each.requireSurgery && <T style={{color: 'red', padding: 2, paddingVertical: 8, textAlign: "right"}}>Emergency Situation, Needs surgery</T>}
                                                </V>
                                        ))
                                }
                        </V>

                </V>
                </SV>
        )
}