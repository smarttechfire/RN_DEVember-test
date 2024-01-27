import { Link } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

type DayListItem = {
    day: number;
};

export default function DayListItem({ day }: DayListItem){
    // console.log(props);
    return(
      <Link href={`/day${day}`} asChild>
        <Pressable style={styles.box}>
          <Text style={styles.text}>{day}</Text>

        </Pressable>      
      </Link>

    )
}

const styles = StyleSheet.create({
    box:{
      backgroundColor: '#F9EDE3',
      // width: 100,
      // height: 100,
      flex:1,
      aspectRatio: 1,
  
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: '#9b4521',
      borderRadius: 20,
  
      justifyContent: 'center',
      alignItems: 'center',
      
    },
    text:{
      color: '#9B4521',
      fontSize: 75,
      fontFamily: 'AmaticBold'
    }
  });
  