import React, { useState } from 'react';
import { ImageBackground } from 'react-native';
import { Text, View, StyleSheet, Image } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { SvgXml } from 'react-native-svg';
import { comIcons, lickIcons, morIcons, musicicons, nocomIcons, nolickIcons, playhideIcons, pluesicons, pluesIcons, rightIcons, SherIcons } from '../assets/loginsignupIcons';
import FilmicHeader from '../components/filmicHeader';
import LinearGradient from 'react-native-linear-gradient';

import fons from '../fons';
const filmicLickList = ({ navigation }) => {
    return (
        <View>
            <FilmicHeader />
            <ScrollView showsVerticalScrollIndicator={false} style={{ marginBottom: 60 }}>
                <TouchableOpacity onPress={() => navigation.navigate('filmicFullView')}>
                    <ImageBackground style={{ width: '100%', height: 500, position: 'relative' }} source={require('../assets/RectangleList.png')}>
                        <View style={styles.playContainer}>
                            <View style={styles.playRow}>
                                <View style={{ flex: 1 }}>
                                    <TouchableOpacity>
                                        <Image source={require('../assets/Rectangleim.png')} />
                                    </TouchableOpacity>
                                </View>
                                <View style={{ flex: 4 }}>

                                    <View style={styles.userName}>
                                        <Text style={styles.usernameList}>Jen Martin</Text>
                                        <TouchableOpacity style={{ marginLeft: 20 }}>
                                            <SvgXml xml={rightIcons} style={styles.icon1} />
                                        </TouchableOpacity>
                                    </View>
                                    <Text style={styles.usernameList}>Morning exercise at Sea</Text>

                                </View>
                                <View style={{ flex: 2 }}>
                                    <TouchableOpacity style={{}}>
                                        <LinearGradient colors={['#8881B9', '#EC99BA',]} style={styles.linearGradient}>
                                            <Text style={styles.filmicTite}>FILMIC</Text>
                                        </LinearGradient>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>



                    </ImageBackground>
                    <View style={styles.bottomContainer}>
                            <TouchableOpacity>
                            <SvgXml xml={musicicons} style={styles.icon1} />
                            </TouchableOpacity>
                            <View style={styles.bottomIcons1}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                                    <TouchableOpacity style={styles.iconsContainer}>
                                        <SvgXml xml={nolickIcons} style={styles.icon1} />
                                        <Text style={styles.lick}>120k</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.iconsContainer}>
                                        <SvgXml xml={nocomIcons} style={styles.icon1} />
                                        <Text style={styles.comatText}>34k</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.iconsContainer}>
                                        <SvgXml xml={SherIcons} style={styles.icon1} />
                                        <Text style={styles.sherCom}>159</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.iconsContainer}>
                                        <SvgXml xml={morIcons} style={styles.icon1} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                </TouchableOpacity>
            </ScrollView>
        </View>

    );
};

export default filmicLickList;
const styles = StyleSheet.create({
    playContainer: {
        width: '90%',
        alignSelf: 'center'
    },
    playRow: {
        marginTop: 15,
        marginBottom: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    linearGradient: {
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        height: 30
    },
    userName: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    usernameList: {
        color: '#FFFFFF',
        letterSpacing: 0.5
    },
    filmicTite: {
        color: '#fff',
        fontWeight: 'bold'
    },
    bottomContainer: {
        width: '90%',
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: "absolute",
        bottom: 20,

    },

    bottomIcons: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#00000080',
        width: '50%',
        height: 40,
        paddingHorizontal: 10,
        borderRadius: 30
    },
    iconsContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection:'row'

    },
    sherCom:{
        color:'#38D744',
        marginLeft:5
    },
    comatText:{
        color:'#8881B9',
        marginLeft:5
    },
    lick:{
        color:'#EC99BA',
        marginLeft:5
    },
    bottomIcons1: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#00000080',
        width: '75%',
        height: 40,
        borderRadius: 30,
        paddingHorizontal:15
    },

})