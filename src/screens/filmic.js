import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Image, ImageBackground, ScrollView, FlatList, ActivityIndicator } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import fons from '../fons';

const filmic = () => {

  return (
    // <View
    //   style={{
    //     flex: 1,
    //   }}>
    //   <View style={{ alignItems: "center", justifyContent: "center", flex: 0.5 }}>
    //     <Text style={styles.commingTitle}>
    //       Coming Soon
    //     </Text>
    //   </View>
    //   <View style={{ alignItems: "center", }}>
    //     <Image style={{ height: 300, width: 300, resizeMode: "contain" }}
    //       source={require('../assets/filmic.png')} />
    //     <Image style={{ height: 80, width: 80, resizeMode: "contain", position: "absolute", top: 90, left: 125, }}
    //       source={require('../assets/Group.png')} />
    //   </View>
    // </View>


    <ScrollView style={styles.mainScroll}>
      <View style={styles.mainContainer}>
        <Text style={styles.commingTitle}>Coming Soon</Text>
        <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1, marginTop: 50 }}>
          <Image source={require('../assets/filmic.png')} />
          <Image style={styles.playImage} source={require('../assets/Group.png')} />
        </View>
      </View>
    </ScrollView>



  )
}

export default filmic;
const styles = StyleSheet.create({
  commingTitle: {
    color: '#9384BA',
    fontSize: 34,
    textAlign: 'center',
    marginTop: 110,
    fontFamily: fons.kkk

  },
  mainScroll: {
    backgroundColor: '#E5E5E5',
  },
  mainContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  playImage: {
    position: 'absolute',
    width: 70,
    height: 70,
    resizeMode: "contain"
  },

})







