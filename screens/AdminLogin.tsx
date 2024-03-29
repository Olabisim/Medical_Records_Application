import { } from "../components/Themed"
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StyleProp, ViewStyle, StyleSheet as SS, View as V, Text as T, Button as B, TouchableOpacity as TO, TextInput, SafeAreaView, Alert} from "react-native";
import { useState, useEffect } from "react";
import Svg, {Ellipse, Path} from 'react-native-svg'
import {useForm, Controller} from 'react-hook-form'
import {TextInput as TextInputPaper, Button as ButtonPaper, ActivityIndicator as AI} from 'react-native-paper'
import * as LocalAuthentication from 'expo-local-authentication'
import AsyncStorage from "@react-native-async-storage/async-storage";
// import Dialog, {SlideAnimation, DialogFooter, DialogButton, DialogContent} from "react-native-popup-dialog";



export const AdminLogin = ({navigation: {navigate}}: any) => {

        const [selectedIndex, setSelectedIndex] = useState(1)

        const [loadingValue, setLoadingValue] = useState(false)
        const [contentValue, setcontentValue] = useState(false)
        const [errMess, seterrMess] = useState('')
        const [errMessStatus, seterrMessStatus] = useState(false)

        const { control, handleSubmit, formState:{ errors } } = useForm()

        const storeData = async (value: string) => {
                try {
                        await AsyncStorage.setItem('@admin_key', value)
                }
                catch(e) {

                }
        }


        const onSubmit = async (formData:any) => {
                setLoadingValue(true)
                const options = {
                        method: 'POST',
                        headers: {
                                'Content-Type': 'application/json', 'Accept': 'application/json'
                        },
                        body: JSON.stringify({...formData, role: 'admin'})
                }
                
                try { 
                
                        
                        const res:any = await fetch('https://itchy-pea-coat-crab.cyclic.app/api/signin', options)
                                        .then(res => res.json())

                        console.log(res)

                        if(res.status === 'failed') {
                                seterrMessStatus(true)
                                setLoadingValue(false)
                                // setcontentValue()
                                seterrMess(res.message)
                        }
                        else {
                                // console.log(res.token)
                                storeData(res.token)
                                navigate('AdminDashboard')
                        }
                        console.log("res")
                        console.log(res)
                        
                }
                catch(err) {
                        console.log(err)
                        setLoadingValue(false)
                }
                finally {
                        setLoadingValue(false)
                }
        }

        console.log("checked the console")

        console.log("errMess") 
        console.log(errMess) 


        return (
                <V style={{flex: 1, alignItems: "center", justifyContent: "center", margin: 5, padding: 5, backgroundColor: "#fff"}}>
                        <Svg  data-name="Layer 1" width="197" height="163" viewBox="0 0 972.0042 639.89567" >
                                <Path d="M748.37222,409.45784q-1.68018,8.835-4.03028,17.49c-.16992.67-.35986,1.33-.5498,2h-21.79a7.00779,7.00779,0,0,0-7,7v62.12c-.66016,1.23-1.33008,2.45-2,3.67-3.46,6.3-7.06006,12.53-10.74023,18.68a710.14341,710.14341,0,0,1-243.69,243.55l5.92041-13.36c-2.17041-.15-4.35009-.3-6.52-.44995-47.25-3.23-94.66016-6.81-140.8003-17.43-48.27-11.11-95.48974-30.38-133.31982-62.33-37.84033-31.96-65.58008-77.6-69.43018-126.98a144.88337,144.88337,0,0,1,5.07031-50.41c8.86963-31.52,28.25-59.88,56.21-76.66,43.91992-26.35,101.21-20.98,147.50976.94,46.29,21.91,83.97022,58.18,120.76026,93.81995a466.42118,466.42118,0,0,0-150.91016-157.52c-20.56006-13.16-42.37988-24.88-59.85986-41.93-17.47022-17.04-30.36036-40.93-27.27-65.14,3.50976-27.46,26-48.3,48.52978-64.37,9-6.42,18.29-12.51,27.87012-18.11,27.02978-15.84,56.27-27.79,87.1499-32.22,41.83008-6.01,87.01025,3.11,119.08008,30.63,36.12988,31.01,50.94971,81.02,49.54,128.86,22.25976-32.36,56.58984-57.13,95.35986-58.18,40.25-1.08,78.51026,24.35,98.66992,59.21C752.28237,327.18782,755.902,369.90786,748.37222,409.45784Z" transform="translate(-113.9979 -130.05217)" fill="#fff"/>
                                <Path d="M493.714,543.853c23.57462-2.07613,45.35181-4.50171,68.19624-10.966,22.14346-6.26588,43.45115-16.755,59.21453-33.88211,16.95474-18.42154,26.107-42.34547,32.56437-66.16088,3.60029-13.2782,6.55859-26.74191,9.3499-40.21016q4.5429-21.91983,8.0729-44.0334,7.02688-44.01759,10.03312-88.55371.36315-5.406.66589-10.81583c.12515-2.22475-3.33532-2.21765-3.46007,0q-2.46957,43.89984-8.885,87.45746c-4.22061,28.53-9.62074,56.93651-16.4723,84.95519-5.80436,23.73626-13.31957,47.84312-28.20589,67.60251-13.95951,18.5292-34.12179,30.63771-55.89217,37.87744-22.15269,7.36687-45.51013,10.30809-68.65936,12.49516-2.83979.2683-3.68075.524-6.52219.77421-2.20087.19382-2.22133,3.6557,0,3.46007Z" transform="translate(-113.9979 -130.05217)" fill="#3A5F0B"/>
                                <Path d="M121.48935,495.5606a375.00513,375.00513,0,0,1,87.7008,15.45407,379.00972,379.00972,0,0,1,81.67626,35.55178,369.763,369.763,0,0,1,68.78,51.786,378.86155,378.86155,0,0,1,53.72732,64.062A375.10127,375.10127,0,0,1,451.82,736.94738q1.82712,4.81062,3.51989,9.67046c.7291,2.089,4.073,1.19038,3.33647-.91983a378.64264,378.64264,0,0,0-36.72857-76.38714,383.57085,383.57085,0,0,0-52.70037-66.3915A373.9613,373.9613,0,0,0,301.967,549.22721a381.91664,381.91664,0,0,0-169.5742-56.37564q-5.44594-.45642-10.90341-.751c-2.225-.12179-2.21817,3.33866,0,3.46008Z" transform="translate(-113.9979 -130.05217)" fill="#3A5F0B"/>
                                <Path d="M283.26691,168.09379A203.79908,203.79908,0,0,1,336.76826,194.238a251.24589,251.24589,0,0,1,45.67206,40.56014,336.2502,336.2502,0,0,1,37.81981,52.12109,444.66152,444.66152,0,0,1,30.07012,61.13547,553.19446,553.19446,0,0,1,21.8983,66.49512,621.48414,621.48414,0,0,1,14.00264,69.475,620.23132,620.23132,0,0,1,6.0274,69.86938,553.4891,553.4891,0,0,1-1.97945,67.02454,426.91315,426.91315,0,0,1-10.063,61.706,291.56248,291.56248,0,0,1-18.15494,53.35662q-2.69669,5.84088-5.72231,11.52063c-1.04652,1.96452,1.93922,3.71452,2.98767,1.74637A266.70637,266.70637,0,0,0,479.7605,697.819a398.28713,398.28713,0,0,0,12.18558-60.49935,526.37456,526.37456,0,0,0,4.02614-66.88946,613.74369,613.74369,0,0,0-4.18784-70.28791,633.10727,633.10727,0,0,0-12.19009-70.23182,573.11338,573.11338,0,0,0-20.38091-68.39936,475.91036,475.91036,0,0,0-28.34164-62.94527,364.89738,364.89738,0,0,0-36.34133-54.851A270.58336,270.58336,0,0,0,350.134,199.71859a214.68529,214.68529,0,0,0-52.06528-30.03253q-6.8463-2.725-13.882-4.92875c-2.129-.66982-3.04,2.66945-.91983,3.33648Z" transform="translate(-113.9979 -130.05217)" fill="#3A5F0B"/>
                                <Ellipse cx="374.5042" cy="629.89567" rx="247.5" ry="10" fill="#fff"/>
                        </Svg>
                        <V>
                                {/* <Dialog
                                        visible={loadingValue}
                                        dialogAnimation={new SlideAnimation({
                                                slideFrom: 'bottom'
                                        })}
                                        footer={
                                                <DialogFooter>
                                                        <DialogButton 
                                                                text="CANCEL"
                                                                onPress={() => setLoadingValue(false)}
                                                                key="button-1"
                                                        />
                                                </DialogFooter>
                                        }
                                >
                                        <DialogContent>
                                               {contentValue}
                                        </DialogContent>
                                </Dialog> */}
                        </V>
                        <V style={styles.myStyle as StyleProp<ViewStyle>}>
                                <V style={{marginBottom: 30}}>
                                        <T style={{fontSize: 26, marginBottom: 24, color: "#3A5F0B", fontWeight: '300' }}>ADMIN LOGIN</T> 
                                        <T style={{marginBottom: 22, fontSize: 16, fontWeight: '300', color: "#4d4d4d"}}>This is a restricted page, do well to exit if you are not authorized.</T>
                                </V>  
                                {
                                        errMessStatus
                                        &&
                                        <V style={{backgroundColor: '#ffe6e6', paddingVertical: 5, borderRadius: 5}}>
                                                <T style={{color: '#ff3333', textAlign: 'center'}}> {errMess}</T>
                                        </V>
                                }

                                <V style={{marginBottom: 20}}>      
                                        <SafeAreaView>
                                                <T>{contentValue}</T>
                                                <Controller 
                                                        control={control}
                                                        name="email"
                                                        render= {({field: {onChange, value, onBlur}}) => (
                                                                <TextInputPaper
                                                                        placeholder="Email"
                                                                        value={value}
                                                                        onChangeText={onChange}
                                                                        style={{borderColor:"#3A5F0B", backgroundColor: "#fff", color: "#3A5F0B"}}
                                                                        autoCapitalize="none"
                                                                        // right={<TextInputPaper.Icon name="eye" />}
                                                                />
                                                        )}
                                                />
                                                {errors.patientId && <T>This is required.</T>}
                                                <Controller 
                                                        control={control}
                                                        name="password"
                                                        render= {({field: {onChange, value, onBlur}}) => (
                                                                <TextInputPaper
                                                                        placeholder="Password"
                                                                        value={value}
                                                                        onChangeText={onChange}
                                                                        style={{marginTop: 10}}
                                                                        secureTextEntry
                                                                        style={{borderColor:"#3A5F0B", backgroundColor: "#fff", color: "#3A5F0B"}}
                                                                        autoCapitalize="none"
                                                                        // right={<TextInputPaper.Icon name="eye" />}
                                                                />
                                                        )}
                                                />    
                                                {errors.patientId && <T>This is required.</T>}
                                        </SafeAreaView> 
                                </V>
                                
                                <V style={{marginBottom: 20}}>    
                                        <SafeAreaView>

                                        </SafeAreaView>
                                </V>



                                {/* <V> */}
                                        {/* <B title={loadingValue} color="navy"  /> */}
                                        <ButtonPaper onPress={handleSubmit(onSubmit)} mode="contained" disabled={loadingValue} style={{backgroundColor: "#3A5F0B"}}>
                                                {loadingValue ? "Loading..." :  'Submit'}
                                        </ButtonPaper>
                                {/* </V> */}

                        </V>
                        
                </V>
        )
}

const styles = SS.create({
        myStyle: {
                // fontFamily: "raleway"
        },
        firstTO : { 
                padding: 25, 
                borderRadius: 3, 
                marginBottom: 20, 
                backgroundColor: '#fff'
        }
})