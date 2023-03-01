import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, SafeAreaView, ScrollView, FlatList, ActivityIndicator } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import FilmicHeader from '../components/filmicHeader';
import fons from '../fons';
import { SvgXml } from 'react-native-svg';
import Icon from 'react-native-vector-icons/Ionicons';
import Avatar from '../components/avatar'; 
import { sync } from '../assets/loginsignupIcons';
import { groupicon } from '../assets/tabicons';
const filmic = ({navigation}) => {

  return (
    
    <ScrollView>
         <View style={styles.mainHeaderContainer}>
            <View style={styles.filmicHeader1}>
                <TouchableOpacity>
                    <Avatar setting={() => { gosetting() }} />
                </TouchableOpacity>
                <View style={styles.searchSection}>
                   
                      <Icon style={styles.searchIcon} name="ios-search" size={20} color="#000" />
                   
                    <TextInput
                        style={styles.input}
                        placeholder="Search"
                        onChangeText={(search) => { setSearch(search) }}
                        underlineColorAndroid="transparent"
                    />
                </View>
                <TouchableOpacity >
                    <SvgXml xml={groupicon} style={styles.icon1} />

                </TouchableOpacity>
            </View>
        </View>
      <View style={styles.mainContainer}>
        <Text style={styles.commingTitle}>Coming Soon</Text>
        <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1, marginTop: 50 }}>
         <TouchableOpacity onPress={() => navigation.navigate('filmicList')}>
         <Image source={require('../assets/filmic.png')} />
         </TouchableOpacity>
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
  mainHeaderContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
},
filmicHeader1: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
},
textInputContainer: {
    flex: 1
},
headerProfileImage: {
    width: '10%',
    backgroundColor: 'red',
    padding: 10
},


// container: {
//     flexDirection: 'row',
//     height: 55,
//     backgroundColor: 'white',
//     justifyContent: 'space-between',
//     width: '100%',
//     alignItems: 'center',
//     paddingLeft: 10,
//     paddingRight: 8,
//   },

searchSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderColor: 'black',
    borderWidth: 0.5,
    borderRadius: 4,
    marginHorizontal: 10,
    paddingHorizontal: 2,
    height: 35
},
searchIcon: {
    padding: 7,
},
input: {
    flex: 1,
    paddingTop: 5,
    paddingRight: 10,
    paddingBottom: 5,
    paddingLeft: 0,
    backgroundColor: '#fff',
    color: '#424242',
},

icon1: {
    marginRight: 12,
},
})







