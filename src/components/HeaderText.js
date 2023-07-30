import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const HeaderText = ({label}) => {
  return (

      <Text style={{fontWeight:800,letterSpacing:2,fontSize:19}}>{label}</Text>
   
  )
}

export default HeaderText

const styles = StyleSheet.create({})