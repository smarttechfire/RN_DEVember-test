import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const DayDetailScreen = () => {
  return (
    <View>
      <Stack.Screen options={{title: "Day 1"}} />
      <Text style={{fontFamily: 'AmaticBold',fontSize: 50}}>DayDetailScreen 1</Text>
    </View>
  )
}

export default DayDetailScreen