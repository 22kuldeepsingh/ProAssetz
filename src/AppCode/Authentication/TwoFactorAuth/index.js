import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../../Constant';

const TwoFactorView =(props)=>{
    const navigation = useNavigation();
    const QRPage=()=>{
        const { email,password } = props?.route?.params?.qrData;
        const qrPageData = {
            ...props?.route?.params?.qrData.data,
            email,
            password,
        };
    console.log(qrPageData, 'qrPageData');
    navigation.navigate('QrTwoFactor',qrPageData);
    }

    return (
        <View style={{display:'flex',backgroundColor:colors.bgColor}}>
            <View style={{marginLeft:43}}>            
            <View style={{display:'flex',marginBottom:28,marginTop:175}}>
                <Text style={{color:'antiquewhite',display:'flex',fontSize:30,}}>Setup{'\n'}</Text>
                <Text style={{ fontSize:48,color: colors.yellowDark,}}>2 Factor Authentication</Text>
            </View>
            <View style={{display:'flex',margin:'auto',marginBottom:190,}}>
                <Text style={{display:'flex',fontSize: 20,color:'antiquewhite',justifyContent:'center',}}>For a secured login setup ...</Text>
            </View>
            <View style={{display:'flex',margin:'auto',marginBottom:168,}}>
                    <Button  mode="contained" style={{margin:"auto",backgroundColor:colors.yellowLg,width:223,height:46,borderRadius:5,alignItems:'center'}} onPress={QRPage}>
                        <Text style={{fontSize: 20,textAlign:'center',color:'black'}}>Enable 2 Factor</Text>
                    </Button>
            </View>
            </View>
        </View>
    );
};


export default TwoFactorView;
