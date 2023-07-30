import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomButton from '../components/CustomButton'
import { useNavigation } from '@react-navigation/native'

const ChangeName = ({route}) => {
  const navigation =useNavigation()

  //gelen veriyi okumak içinde useRoute() hooku mevcut
  //const info=useRoute()  şeklinde kullanılır


  //route propsu içerisinden gelen veriyi okuduk
  //console.log(route.params)

  //gelen veri route propsu içindeki params objesi içindeki userInfo objesi idi
  //heryde veriyi okumak userInfo.name ve userInfo.age diye yazmamak için
  //userInfo objesini parçaladık
  const{name,age}=route.params?.userInfo

  return (
    <View>
     <CustomButton title='Profile Ekranına Git' onPress={()=>navigation.navigate('ProfileEkrani')}/>
  
  <Text>{name}</Text>
  <Text>{age}</Text>
  
  
    </View>
  )
}

export default ChangeName

const styles = StyleSheet.create({})