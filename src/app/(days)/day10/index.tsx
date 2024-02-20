import { View, Text, Button, SafeAreaView } from 'react-native'
import React from 'react'
import { Link, Stack } from 'expo-router'
import MarkdownDisplay from '@/components/day3/MarkdownDisplay';


const description = `
  # Biometrics
  Use FaceID and Fingerprint to unlock the next screen
`;

const DayDetailScreen = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Stack.Screen options={{title: 'Day 10: Biometric'}}/>

      <MarkdownDisplay>{description}</MarkdownDisplay>

      <Text>Day 10</Text>
      <Link href="/day10/protected" asChild>
        <Button title='Go to protected App'/>
      </Link>
    </SafeAreaView>
  )
}

export default DayDetailScreen