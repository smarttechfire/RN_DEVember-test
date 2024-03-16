import {   StyleSheet, View } from 'react-native'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar';
import VideoPost from '@/components/day12/VideoPost';


const post = {
    id: '1',
    video: 'https://firebasestorage.googleapis.com/v0/b/fir-videosapp-f521e.appspot.com/o/MyReels%2Freel1710007205041?alt=media&token=ffc41fe6-b5ae-404d-a9b6-5a4f308b4cfe',
    caption: 'Caption of the post',

}

const FeedScreen = () => {

  return (
    <View style={styles.container}>
        <Stack.Screen options={{headerShown: false}} />
        <StatusBar style='light'/>
       
        <VideoPost post={post} />
            
    </View>
  )
}

export default FeedScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    
})