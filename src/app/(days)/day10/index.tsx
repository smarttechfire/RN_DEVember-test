import { View, Text, SafeAreaView, Button } from 'react-native'
import React from 'react'
import { Link, Stack } from 'expo-router'

const description = `
#Biometrics
Use FaceID and Fingerprint to unlock the next screen
`

const FingerPrintAuth = () => {
  return (
    <SafeAreaView edges={['bottom']} style={{flex: 1}}>
      
      <Stack.Screen options={{title: 'Day 10: Biometrics'}} />

        <Link href="/day10/protected" asChild>
            <Button title='Go to Protected App'/>
        </Link>

    </SafeAreaView>
  )
}

export default FingerPrintAuth