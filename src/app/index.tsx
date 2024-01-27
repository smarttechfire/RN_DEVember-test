import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';
import DayListItem from '../../src/components/core/DayListItem';



const days = [...Array(24)].map((val,index) => index + 1);
console.log(days);

export default function HomeScreen() {
  

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
