import { View, Text, SafeAreaView, Button } from 'react-native'
import React from 'react'
import { Link, Stack } from 'expo-router'

const description = `
# TikTok Feed
Video feed similar to TikTok,IG Reels, Youtube Shorts
`

const FingerPrintAuth = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      
      <Stack.Screen options={{title: 'Day 12: Video Feed'}} />

        <Link href="/day12/feed" asChild>
            <Button title='Go to Video Feed App'/>
        </Link>

    </SafeAreaView>
  )
}

export default FingerPrintAuth