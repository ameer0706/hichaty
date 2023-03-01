import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { IMAGEPATH } from './../ComponentPath/ImagePath';
import { COLORS } from './../ComponentPath/Color';
import { TextInput, } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SvgXml } from 'react-native-svg';
import Icon from 'react-native-vector-icons/Ionicons';
import Avatar from '../components/avatar'; import { pluesIcons, sync } from '../assets/loginsignupIcons';
import { groupicon } from '../assets/tabicons';

export default function FilmicHeader({ }) {
    const [search, setSearch] = useState("");
    const gosetting = () => {
        navigation.navigate('changetheme', { id: user && user.id })
        // navigation.navigate('uploadphoto', { id: user && user.id })
    }
    return (
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
                    <SvgXml xml={pluesIcons} style={styles.icon1} />

                </TouchableOpacity>
            </View>
        </View>
        // <SafeAreaView style={styles.container}>

        // </SafeAreaView>
    );
}

const styles = StyleSheet.create({
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
});
