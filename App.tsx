import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';
import DayListItem from './src/components/core/DayListItem';

import * as SplashScreen from 'expo-splash-screen';
import { AmaticSC_400Regular,AmaticSC_700Bold } from '@expo-google-fonts/amatic-sc';

import { useFonts,Inter_900Black } from '@expo-google-fonts/inter';
import { useEffect } from 'react';

SplashScreen.preventAutoHideAsync();

const days = [...Array(24)].map((val,index) => index + 1);
console.log(days);

export default function App() {
  const [ fontsLoaded,fontError ] = useFonts({
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
    <View style={styles.container}>
     
    <FlatList 
    
      data={days}
      contentContainerStyle={styles.content}
      columnWrapperStyle={styles.column}
      numColumns={2}
      renderItem={({ item }) => <DayListItem day={item}/>}
    
    />

      {/* {days.map((day) => (
         <View style={styles.box} key={day}>
         <Text style={styles.text}>{day}</Text>
       </View>
      
      ))} */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    gap: 10,
  },
  content:{
    gap: 10,
    padding: 10,
  },
  column:{
    gap: 10,
  },

});
