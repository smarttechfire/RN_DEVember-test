import { Stack } from "expo-router";
import { AmaticSC_400Regular,AmaticSC_700Bold } from '@expo-google-fonts/amatic-sc';

import { useFonts, Inter_600SemiBold, Inter_400Regular, Inter_700Bold, Inter_900Black } from '@expo-google-fonts/inter';
import { useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';


SplashScreen.preventAutoHideAsync();
export default function RootLayout(){


    const [ fontsLoaded,fontError ] = useFonts({
        Inter: Inter_400Regular,
        InterSemi: Inter_600SemiBold,
        InterBold: Inter_700Bold,
        InterBlack: Inter_900Black,

        Amatic: AmaticSC_400Regular,
        AmaticBold: AmaticSC_700Bold,
      });
    
      useEffect(() => {
        if(fontsLoaded || fontError){
          SplashScreen.hideAsync();
        }
      },[fontsLoaded,fontError]);
    
      if(!fontsLoaded && !fontError){
        return null;
      }

    return (
    <Stack screenOptions=
        {{
            
           
        }}>
            <Stack.Screen name="index" options={{title: "SMartTechAcademy"}}/>
    </Stack>
        );
}