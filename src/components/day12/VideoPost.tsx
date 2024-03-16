import {  Dimensions, Pressable, StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { Stack } from 'expo-router'
import { Video, ResizeMode, AVPlaybackStatus } from 'expo-av';

import {SafeAreaView} from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';


type VideoPost = {
    post:{
        id: string;
        video: string;
        caption: string;
    };
    activePostId: string;
   
}

const VideoPost = ({post,activePostId}: VideoPost) => {

    const video = useRef<Video>(null);
    const [status,setStatus] = useState<AVPlaybackStatus>();

    const isPlaying = status?.isLoaded && status.isPlaying;

    const { height } = useWindowDimensions();

    useEffect(() =>{
        if(!video.current){
            return;
        }
        if(activePostId !== post.id){
            video.current.pauseAsync();
        }
        if(activePostId === post.id){
            video.current.playAsync();
        }
    },[activePostId,video.current]);

    const onPress = () => {
        if(!video.current){
            return;
        }
        if(isPlaying){
            video.current.pauseAsync();
        }else{
            video.current.playAsync();
        }
    }


  return (
    <View style={[styles.container]}>
       
        <Video 
            ref={video}
            style={[StyleSheet.absoluteFill,styles.video]} 
            source={{uri: post.video}}
            resizeMode={ResizeMode.COVER}
            onPlaybackStatusUpdate={setStatus}
            isLooping
             />
            <Pressable onPress={onPress} style={styles.content}>
                <LinearGradient
                // Background Linear Gradient
                    colors={['transparent', 'rgba(0,0,0,0.8)']}
                    style={[StyleSheet.absoluteFillObject, styles.overlay]}
                />
                {!isPlaying && (
                    <Ionicons style={{position: 'absolute',alignSelf:'center',top:'50%'}} name='play' size={70} color="rgba(255,255,255,0.6)" />
                )}
                <SafeAreaView style={{flex: 1}}>
                    <View style={styles.footer}>
                        <View style={styles.leftColumn}>
                            <Text style={styles.caption}>{post.caption}</Text>
                        </View>
                        <View style={styles.rightColumn}>
                            <Ionicons name='heart' size={32} color='white' />
                            <Ionicons name='share-social-sharp' size={32} color='white' />
                            <Ionicons name='bookmark' size={32} color='white' />
                        </View>
                    </View>
                </SafeAreaView>
            </Pressable>
            
    </View>
  )
}

export default VideoPost

const styles = StyleSheet.create({
    container:{
        flex: 1,
        height: Dimensions.get('screen').height
        
    },
    video:{
        height: '100%',
    },
    content:{
        flex: 1,
        padding: 10,
    },
    footer:{
        marginTop: 'auto',
        flexDirection: 'row',
        alignItems: 'flex-end',
    },

    caption:{
        color: 'white',
        fontFamily: 'Inter',
        fontSize: 18,
    },
    rightColumn:{
        gap:10
    },
    leftColumn:{
        flex: 1,
    },
    overlay: {
        top: '50%',
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
      },
})