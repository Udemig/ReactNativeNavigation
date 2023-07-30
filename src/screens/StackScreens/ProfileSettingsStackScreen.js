import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ProfileScreen from '../ProfileScreen'
import SettingsScreen from '../SettingsScreen'
import ChangeName from '../ChangeName'
import NewName from '../NewName'
import PostDetail from '../PostDetail'

const ProfileSettingsStackScreen = () => {
    const Stack=createNativeStackNavigator()
  return (
 <Stack.Navigator 
 screenOptions={{
  headerShown:false
 }}
 
 >

    
<Stack.Screen name='ProfileScreen' component={ProfileScreen}/>

<Stack.Screen name='ChangeNameScreen' component={NewName}/>
<Stack.Screen name='PostDetail' component={PostDetail}/>
 </Stack.Navigator>
  )
}

export default ProfileSettingsStackScreen

const styles = StyleSheet.create({})