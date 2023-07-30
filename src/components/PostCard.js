import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { memo } from 'react'
import PostImage from './PostImage'
import HeaderText from './HeaderText'
import ContentText from './ContentText'


const PostCard = ({onPress,postTitle,postContent,postImage,key}) => {
    console.log('render')
  return (
    <TouchableOpacity onPress={onPress} style={{flexDirection:'row',gap:20,padding:20,backgroundColor:'aqua',margin:10,borderRadius:10}}>
    <PostImage source={postImage}/>
   <View style={{width:150}}>
   <HeaderText label={postTitle}/>
    <ContentText label={postContent}/>
 
   </View>
   
    </TouchableOpacity>
  )
}

export default PostCard

const styles = StyleSheet.create({})