import { StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'

const PostImage = ({source='https://images.unsplash.com/photo-1690061521963-47eb2380182d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60'}) => {
  return (
 <Image 
 
 style={{width:200,height:150}}
 source={{uri:source}}/>
  )
}

export default PostImage

const styles = StyleSheet.create({})