import React from 'react';
import { Container, ScrollView } from 'native-base';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
import Header from '../components/header';
import { logo } from '../assets/loginsignupIcons';
import { backblue } from '../assets/changethemeicons';
import { SvgXml } from 'react-native-svg';
const About = (props) => {
  const { navigation } = props;
  const currentYear = new Date().getFullYear();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={styles.icons}>
        <TouchableOpacity style={{ padding: 8, }} onPress={() => navigation.goBack()}>
          <SvgXml
            xml={backblue}
          />
        </TouchableOpacity>
        <Text style={[styles.inputfield, { marginLeft: 5 }]}>About</Text>
      </View>
      <View style={{ flex: 1, backgroundColor: '#F8F8F8', alignItems: 'center', justifyContent: 'center' }}>
        <ScrollView  showsVerticalScrollIndicator={false}>
        <View style={{ width: '94%', alignSelf: 'center' ,}}>
          <View style={styles.content}>
            <SvgXml xml={logo} style={styles.logo} />
            <View style={styles.chattext}>
              <Text style={styles.chattext1}>HiChaty</Text>
              <Text style={styles.chattext1}>Version 1.0</Text>
            </View>
          </View>
          <View style={styles.textbottom}>
            <Text style={styles.textbottom1}>@ {currentYear} hichatymsg.com</Text>
          </View>
        </View>
          </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default About;

const styles = StyleSheet.create({
  content: {
    width: '94%',
    alignContent: 'center',
    alignSelf: 'center',
    marginTop: '35%',
  },
  chattext: {
    alignItems: 'center',
    marginTop: 15,
  },
  chattext1: {
    fontSize: 20,
  },
  textbottom: {
    bottom: "2%",
    alignSelf: 'center',
    marginTop: 100
  },
  textbottom1: {
    fontSize: 16,
    marginTop: 100
  },
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
  },
  icons: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: 8,
    backgroundColor: '#ffffff',
  },
  buttondel: {
    alignItems: 'center',
    backgroundColor: '#FB5051',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderColor: '#FB5051',
    borderWidth: 2,
    width: '94%',
    marginTop: 10,
    alignSelf: 'center',
    borderRadius: 5
  },
  buttontext: {
    color: 'white',
    fontSize: 16,
  },
  inputfield: {
    fontSize: 15,
    flex: 1,
  },
  sectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    height: 48,
    borderRadius: 5,
    marginTop: 3,
    paddingHorizontal: 5,
  },
  icon: {
    fontSize: 15,
  },
  logo: {
    alignSelf: 'center',
    right: 0,
    marginTop:80
  }
});
