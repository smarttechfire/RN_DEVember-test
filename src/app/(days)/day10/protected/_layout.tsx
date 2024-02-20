import * as LocalAuth from "expo-local-authentication";
import { Slot } from "expo-router"; 
import { useEffect, useState } from "react";
import { Alert, Text, View } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';

export default function BiometricProtectedLayout(){
    // console.warn('Protected');

    const [unlocked,setUnlocked] = useState(false);


    useEffect(() => {
       
        authenticate();
    },[]);
    const authenticate = async () =>{
        const enrolled = await LocalAuth.getEnrolledLevelAsync();
        const supported = await LocalAuth.supportedAuthenticationTypesAsync();
        const hasHardware = await LocalAuth.hasHardwareAsync();

        console.log('has hardware',hasHardware);

        console.log('Supported', supported);

        console.log('Enrolled:', enrolled);

        if(!hasHardware){
            Alert.alert('Not supported');
            setUnlocked(true);
            return;
        }

        const res = await LocalAuth.authenticateAsync();
        console.log(res);
        if(res.success){
            setUnlocked(true);
        }
    };
    if(!unlocked){
        return (
            <View style={{flex: 1,alignItems: 'center',justifyContent: 'center',backgroundColor:'white'}}>
                <Text style={{fontFamily: 'Inter',fontSize:20,marginBottom: 20}}>
                    Use FaceID to Unlock
                </Text>
                <FontAwesome5 
                onPress={authenticate}
                name="fingerprint" size={75} color="gray" />
            </View>
        )
    }

    return <Slot />
}