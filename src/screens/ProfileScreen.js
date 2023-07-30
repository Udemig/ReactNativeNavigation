import {StyleSheet, Text, View, Button, FlatList, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import CustomButton from '../components/CustomButton';
import Avatar from '../components/Avatar';
import PostImage from '../components/PostImage';
import HeaderText from '../components/HeaderText';
import ContentText from '../components/ContentText';
import PostCard from '../components/PostCard';
import {posts} from '../utils/constants';

//İstenen Görev: Profil ekranından Ayarlar ekranına gitme

//Görev Çözüm Adımları;
//1-Profil ve Ayarlar Ekranı oluşturma
//2-Profil Ekranına Bir buton KOy
//3-Butona basıldığında ayarlar ekranına gidecek fonsiyon yaz
//4-Ayarlar Ekranına gitmek için gerekli fonksiyon yapısı için React Navigaiton Paketini kur

const ProfileScreen = () => {
  const navigation = useNavigation();

  const [userInfo, setUserInfo] = useState({
    name: 'Hasan',
    age: '25',
  });

  const goToSettings = () => {
    navigation.navigate('SettingsScreen');
  };
  //console.log(posts)
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'start',
          gap: 50,
          paddingHorizontal: 15,
          paddingVertical: 10,
        }}>
        <Avatar />
        <View>
        <HeaderText label={'Hasan ÇElik'}/>
        <ContentText label={'React - React Native Developer'}/>
        </View>
      </View>

      <View style={{flex: 1, backgroundColor: 'orange'}}>
       
       {/*Flatlist ekranda görünen kısmı render eder*/}
       
         <FlatList
          data={posts}
          renderItem={({item}) => (
            <PostCard
              onPress={() => navigation.navigate('PostDetail', {item})}
              postTitle={item.title}
              postContent={item.content}
              postImage={item.postImage}
            />
          )}
        /> 

        {/*ScrollView ise içriisndeki tüm datayı render eder ekranda görünmese bile*/}
        {/* <ScrollView>
          {posts.map((post,index)=>{
            return(
              <PostCard
              onPress={() => navigation.navigate('PostDetail', {item})}
              postTitle={post.title}
              postContent={post.content}
              postImage={post.postImage}
              key={index}
            />
            )
          })}
        </ScrollView> */}
      </View>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
