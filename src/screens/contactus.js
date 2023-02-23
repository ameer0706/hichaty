import React from 'react';
import { Container, ScrollView } from 'native-base';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
import { Icon } from 'native-base';
import Header from '../components/header';
import { backblue } from '../assets/changethemeicons';
import { SvgXml } from 'react-native-svg';
const Contact = (props) => {
  const { navigation } = props;
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={styles.icons}>
        <TouchableOpacity style={{ padding: 8, }} onPress={() => navigation.goBack()}>
          <SvgXml
            xml={backblue}
          />
        </TouchableOpacity>
        <Text style={[styles.inputfield, { marginLeft: 5 }]}>Contact us</Text>
      </View>
      <ScrollView style={{ flex: 1, backgroundColor: '#F8F8F8' }}  showsVerticalScrollIndicator={false}>
        <View style={{ width: '94%', alignSelf: 'center' }}>
          <View style={styles.sectionStyle}>
            <TextInput
              placeholder="Full Name"
              placeholderTextColor="black"
              style={styles.inputfield}
            />
          </View>
          <View style={styles.sectionStyle}>
            <TextInput
              placeholder="Email Address"
              placeholderTextColor="black"
              style={styles.inputfield}
            />
          </View>
          <View style={styles.sectionStyle}>
            <TextInput
              placeholder="Contact Number"
              placeholderTextColor="black"
              style={styles.inputfield}
            />
          </View>
          <View style={styles.sectionStyle1}>
            <TextInput
              placeholder="Write your query"
              placeholderTextColor="black"
              style={styles.inputfield}
            />
          </View>
          <TouchableOpacity style={styles.buttonsend}>
            <Text style={styles.buttontext}>Send</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>

  );
};

export default Contact;

const styles = StyleSheet.create({
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
  content: {
    width: '94%',
    alignContent: 'center',
    alignSelf: 'center',
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
});
