import { StyleSheet } from 'react-native';

// import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { StyleProp, ViewStyle, StyleSheet as SS, View as V, Text as T, Button as B, TouchableOpacity as TO, TextInput, SafeAreaView, ScrollView as SV} from "react-native";
import { AntDesign } from '@expo/vector-icons';

export default function TabTwoScreen() {
        return (
                <View style={[styles.container]}>
                        <V style={{margin: 10}}>
                        <Text style={styles.title}>Patient Automated System</Text>
                        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
                        <V>
                                <V style={{backgroundColor: "#3A5F0B"}}>
                                        <V style={{backgroundColor: "#3A5F0B", alignItems: 'center', padding: 20, borderRadius:999, width: 100, height: 100, margin: 10}}>
                                                <AntDesign name="medicinebox" size={24} color="#fff" />
                                        </V>
                                </V>
                                
                                <V style={{backgroundColor: "#f2f2f2", marginTop:20}}> 
                                        <T style={{color: "#3A5F0B", paddingHorizontal: 10, paddingVertical: 15, fontWeight: '300', lineHeight: 33, fontSize: 18}}>
                                                Patient Automated is a software created to bridge the gap between patients and doctor with smooth and easy access 
                                                to their tests results and consequent prescribed drugs for some health conditions.

                                                We aim keep track of health records and only doctors are allowed to make update any change as call for experience.
                                        </T>
                                </V>
                        </V>

                        </V>
                </View>
        );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 24,
    fontWeight: '300',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
