import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView} from "react-native";
import { useNavigation } from '@react-navigation/native';
import { Button,TextInput } from 'react-native-paper';
import { colors } from '../../Constant';

const ContactUs = () => {
    const navigation = useNavigation();
    return (
    <ScrollView> 
        <View style={{display:'flex', flexDirection:'column',backgroundColor:colors.bgColor}}>
            <View style={{display:'flex',flexDirection:'row',marginBottom:100,marginTop:40}}>
                <TouchableOpacity style={{marginTop:16}} onPress={()=>navigation.navigate('VerifyEmail')} >
                    <Image style={{width:20,height:20,justifyContent:'center',alignItems:'center'}} source={require('../../../Assets/backButton.png')}/>
                </TouchableOpacity>
                <Text style={{color:'antiquewhite',display:'flex',justifyContent:'center',fontSize:35,marginLeft:80}}>Contact Us</Text>
            </View>
            <View style={{display:'flex', flexDirection:'column',marginLeft:25}}>
            <TextInput placeholder="FirstName" style={styles.input}/>
            <TextInput placeholder="Emailid" style={styles.input}/>
            <TextInput placeholder="YourTextHere" style={styles.input1}/>
            </View>
            <Button  mode="contained" style={{backgroundColor:colors.yellowLg,margin:"auto",marginBottom:80}} onPress={()=>navigation.navigate("LogIn")}>
                <Text style={{fontSize: 20,textAlign: 'center',color: 'black',textTransform: 'capitalize',}}>Continue</Text>
            </Button>
        </View>
    </ScrollView>
    );
};

const styles = StyleSheet.create({
    input: {
        // backgroundColor: '#424040',
        color: '#fff',
        borderRadius: 5,
        height: 50,
        marginBottom:26,
        width:322,
        height:50,
        marginHorizontal:'auto',
      },
      input1:{
        width:322,
        height:120,
        marginBottom:275,
        borderRadius:5,
        color:'#fff',
        marginHorizontal:'auto',
      }
});

export default ContactUs;
