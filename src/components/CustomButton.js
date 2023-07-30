import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const CustomButton = ({onPress=()=>{},title=''}) => {
  return (
 <TouchableOpacity onPress={onPress}>
    <Text>{title}</Text>
 </TouchableOpacity>
  )
}

export default CustomButton

const styles = StyleSheet.create({})