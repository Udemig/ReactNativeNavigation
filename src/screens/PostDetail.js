import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import HeaderText from '../components/HeaderText'
import ContentText from '../components/ContentText'
import PostImage from '../components/PostImage'

const PostDetail = () => {
    const navigation=useNavigation()
    const route=useRoute()
    console.log(route.params.item)
    const {content,title,postImage}=route.params.item
   
  return (
    <View>
    <HeaderText label={title}/>
    <ContentText label={content}/>
    <PostImage source={postImage}/>
      <Button title='Profile Ekranı' onPress={()=>navigation.navigate('ProfileScreen')}/>
    </View>
  )
}

export default PostDetail

const styles = StyleSheet.create({})