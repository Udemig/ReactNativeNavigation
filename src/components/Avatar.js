import { StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'

const Avatar = ({source='https://images.unsplash.com/photo-1690222490168-8ef5f427b5d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=600&q=60',style}) => {
  return (
 <Image 
 
 style={[{width:100,height:100,borderRadius:50},style]}
 source={{uri:source}} />
  )
}

export default Avatar

const styles = StyleSheet.create({})