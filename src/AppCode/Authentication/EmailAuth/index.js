import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity} from "react-native";
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { CodeField,Cursor,useBlurOnFulfill,useClearByFocusCell,isLastFilledCell,} from 'react-native-confirmation-code-field';
import { colors } from '../../Constant';

    const CELL_COUNT = 6;
const EmailAuthentication = (props) => {
      // console.log(props);
    const navigation = useNavigation();
    const [timerCount, setTimer] = React.useState(3);
    const [value,setValue]=useState('');
    const [otpDone, setOtpDone] = React.useState(false);
    const ref = useBlurOnFulfill({value, cellCount:CELL_COUNT});
    const [prop, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
      });
    const otpData=(otp)=>{
      console.log(otp,props);
        let dataOtp = {
          ...props?.route?.params?.formData,
            email_otp: otp,
          };
          console.log('req with', dataOtp);
        axios.post('https://www.proassetz.com/api/v1/user-login/',dataOtp).then((response)=>
        {
            console.log('response1=>',response);
            console.log("DataOtp=> ",dataOtp);
            if (response.data.otp_type === 'google') {
              let qrData = { ...response.data, ...dataOtp };
              console.log('qrData=>',qrData);
              navigation.navigate('TwoFactorView', { qrData });
            }
        }).catch((error)=>{
          alert(error.response.data.message, 'Verify email if not verified');
          console.error('error',error);
        })
    }
    const renderCell = ({ index, symbol, isFocused }) => {
        let textChild = null;
    
        if (symbol) {
          textChild = <Text isLastFilledCell={isLastFilledCell({ index, value })}>{symbol}</Text>;
          if (index === 5 && symbol !== '') {
            setOtpDone(true);
          }
        } else if (isFocused) {
          textChild = <Cursor />;
        }

        return (
            <Text
              key={index}
              style={[styles.cell, isFocused && styles.focusCell]}
              onLayout={getCellOnLayoutHandler(index)}>
              {textChild}
            </Text>
          );
    };
        useEffect(() => {
            let interval = setInterval(() => {
              setTimer((lastTimerCount) => {
                lastTimerCount <= 1 && clearInterval(interval);
                return lastTimerCount - 1;
              });
            }, 1000);
            return()=> clearInterval(interval);
          }, []);
          
    
    return (
        <View style={{display:'flex', flexDirection:'column',backgroundColor:colors.bgColor}}>
            <View style={{display:'flex',flexDirection:'row',marginBottom:100,marginTop:40}}>
                <TouchableOpacity style={{marginRight:50,marginTop:14}} onPress={()=>navigation.navigate('LogIn')}>
                    <Image style={{width:20,height:20,justifyContent:'center',alignItems:'center'}} source={require('../../../Assets/backButton.png')}/>
                </TouchableOpacity>
                <Text style={{color:'antiquewhite',display:'flex',justifyContent:'center',fontSize:30,}}>Email Authentication</Text>
            </View>
            <View style={{height:44,width:182,display:'flex',margin:'auto',marginTop:63,alignItems:'center',justifyContent:'center'}}>
                <Text style={{fontSize:16,color:"antiquewhite",}}>An OTP has been sent to {'\n'} {'      '} your email</Text>
            </View>
            <View style={{display:'flex',margin:'auto',marginBottom:30,marginTop:65}}>
                <Text style={{fontSize:16,color:colors.darkgreytxt}}>Type Your OTP</Text>
            </View>
            <View style={{display:'flex',flexDirection:'column',margin:'auto',marginBottom:50,}}>
              <CodeField
                    ref={ref}
                    {...prop}
                    value={value}
                    onChangeText={setValue}
                    cellCount={CELL_COUNT}
                    rootStyle={styles.codeFieldRoot}
                    keyboardType="number-pad"
                    textContentType="oneTimeCode"
                    renderCell={renderCell}
              />
              <Text style={{ color: '#E29224', textAlign: 'center' }}>
                  0.{timerCount} <Text style={{ color: '#6E6E6E' }}>min</Text>
              </Text>
                
                {/* <TextInput style={{display:'flex',width:200,height:55,borderRadius:5,fontSize:25,backgroundColor:'#424040',color: '#fff',margin:'auto',paddingLeft:50}} keyboardType='numeric' maxLength={6} value={valueOtp} 
                onChangeText={setOtpValue} /> */}
            </View>
            <View style={{display:'flex',flexDirection:"column",marginBottom:50}}>
              <Button  mode="contained" style={{backgroundColor:colors.yellowLg,margin:"auto",width:126,height:46,borderRadius:5,alignItems:'center'}} 
              onPress={()=>{if(otpDone){otpData(value);}else{alert('OTP invalid');}}}>
                      {/* //{()=>otpData(value)} */}
                <Text style={{fontSize: 20,textAlign:'center',color:'black',textTransform:'capitalize',}}>Verify</Text>
              </Button>
              <TouchableOpacity style={{marginRight:5,marginTop:19,marginBottom:142}}>
                <Text style={{display:'flex',justifyContent:'center',alignItems:'center',margin:'auto',fontSize:26,color:colors.lightWhite}}>Resend</Text>
              </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    root: {flex: 1, padding: 20},
    title: {textAlign: 'center', fontSize: 30},
    codeFieldRoot: {marginTop: 20},
    cell: {
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        width: 52.35,
        height: 55,
        lineHeight: 38,
        fontSize: 24,
        borderRadius:5,
        margin:4,
        borderColor: '#00000030',
        textAlign: 'center',
        color: '#fff',
        backgroundColor:'#424040',
    },
    focusCell: {
        borderColor: '#000',
    },
});

export default EmailAuthentication;