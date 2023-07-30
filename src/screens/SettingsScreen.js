import { StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const SettingsScreen = () => {
  const navigation=useNavigation()
  return (
    <View>
     <Button onPress={()=>navigation.navigate('IsimDegistir')} title='İsim Değiştirme Ekrnaına Git'></Button>
    </View>
  )
}

export default SettingsScreen

const styles = StyleSheet.create({})