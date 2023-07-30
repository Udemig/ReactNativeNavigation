import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ProfileScreen from './src/screens/ProfileScreen';
import {NavigationContainer} from '@react-navigation/native';
import ProfileSettingsStackScreen from './src/screens/StackScreens/ProfileSettingsStackScreen';
import BottomTabsNavigation from './src/navigation/BottomTabNavigation';

const App = () => {
  return (
   // SafeAreview e flex 1 verme sebebimiz tüm ekranı kaplaması için diğer türlü sadece status bar kadr yer kaplar
    <SafeAreaView style={{flex: 1}}>
      {/*Uygulamada Navigasyon sisteminin çalışması için en dış elementi NavigationContainer ile sarmaladık*/}
      <NavigationContainer>
       <BottomTabsNavigation/>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({});
