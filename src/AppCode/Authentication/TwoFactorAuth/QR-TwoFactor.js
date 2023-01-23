import { useNavigation } from '@react-navigation/native';
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Linking, Platform, ImageBackground} from 'react-native';
import { Button } from 'react-native-paper';
import { colors } from '../../Constant';

const QrTwoFactor =(props)=> {
    console.log(props);
    const navigation=useNavigation();
    const { raw_secret_key,secret_key, email, password } = props.route.params;
    const formData = {email, password, raw_secret_key};
    console.log("QR DATA=>",props?.route?.params);
    
    return (
        <View style={{display:'flex', flexDirection:'column',backgroundColor:colors.bgColor}}>
            <View style={{display:'flex',flexDirection:'row',marginBottom:24,marginTop:40}}>
                <TouchableOpacity style={{marginRight:50,marginTop:14}} onPress={()=>navigation.navigate('TwoFactorView')}>
                    <Image style={{width:20,height:20,justifyContent:'center',alignItems:'center'}} source={require('../../../Assets/backButton.png')}/>
                </TouchableOpacity>
                <View>
                    <Text style={{color:'antiquewhite',display:'flex',justifyContent:'center',fontSize:20,}}>Enable{'\n'}</Text>
                    <Text style={{ color:colors.darkOrange, fontSize: 20 }}>2 Factor Authentication</Text>
                </View>
            </View>
            <View style={{display:'flex',margin:'auto',marginBottom:37}}>
                <Text style={{display:'flex',fontSize: 16,color:colors.darkgreytxt,justifyContent:'center',}}>Download & Install an authenticator app </Text>
            </View>
            <TouchableOpacity 
            // onPress={openGoogleAuth} 
            style={{display:'flex',alignItems:'center',margin:'auto',marginBottom:62}}>
                    <Image style={{width:170,height:54,justifyContent:'center',alignItems:'center'}} source={require('../../../Assets/gplay.png')}/>
            </TouchableOpacity>
            <View style={{display:'flex',margin:'auto',marginBottom:14}}>
                <Text style={{display:'flex',fontSize: 16,color:colors.darkgreytxt,justifyContent:'center',}}>Tap QR code </Text>
            </View>
            <ImageBackground style={{ padding: 15 }} source={require('../../../Assets/qrShadow.png')} resizeMode="contain">
                <TouchableOpacity style={{alignItems:'center',margin: 6 }}>
                    
                     {/* value={googleAuthUrl}  */}
                
                </TouchableOpacity>
                <Text style={{ color: '#fff' }}>Can't Make A QR</Text>
            </ImageBackground>
            <View style={{flexDirection: 'column',justifyContent: 'center',alignItems: 'center',height: 60,width: '95%',padding: 10}}>
                <Text selectable={true} style={{ color: '#fff', textAlign: 'center' ,marginBottom:15}}>OR</Text>
                <Text selectable={true} style={{ color: colors.darkgreytxt, textAlign: 'center' }}>Copy 2FA</Text>
            </View>
            <View style={{flexDirection: 'row',justifyContent: 'center',alignItems: 'center',width:241,height:50,borderRadius:12,padding: 10,position: 'relative',marginBottom:70,borderStyle:'dashed',}}>
                <Text style={{ color: '#fff', textAlign: 'center' }}>{raw_secret_key}</Text>
                <Button style={{ position: 'absolute', right: '-8%', top: 15,}} labelStyle={{ fontSize: 22, lineHeight: 1 }}  icon="content-copy" color="#6E6E6E"/>
            </View>
            <View style={{display:'flex',flexDirection:"column",marginBottom:55,alignItems:'center'}}>
                <Button  mode="contained" style={{backgroundColor:colors.yellowLg,margin:"auto",width:319,height:46,borderRadius:5,alignItems:'center'}} onPress={async() => {await AsyncStorage.setItem('raw_secret_key', raw_secret_key); navigation.navigate('OtpTwoFactor', { formData });}}>
                    <Text style={{fontSize: 20,textAlign:'center',color:'black',textTransform:'capitalize',}}>Continue</Text>
                </Button>
            </View>
        </View>
    );
};

export default QrTwoFactor;
