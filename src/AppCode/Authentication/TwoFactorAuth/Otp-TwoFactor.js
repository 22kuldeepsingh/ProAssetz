import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground, ScrollView} from "react-native";
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { CodeField,Cursor,useBlurOnFulfill,useClearByFocusCell,isLastFilledCell,} from 'react-native-confirmation-code-field';
import { colors } from '../../Constant';

    const CELL_COUNT = 6;
const OtpTwoFactor = (props) => {
  console.log("props1",props)
    const navigation = useNavigation();
    const [timerCount, setTimer] = React.useState(60);
    const [value,setValue]=useState('');
    const [otpDone, setOtpDone] = React.useState(false);
    const ref = useBlurOnFulfill({value, cellCount:CELL_COUNT});
    const [prop, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
      });
    // const otpData=(otp)=>{
    //   console.log(otp,props);
    //     let dataOtp = {
    //         ...props?.route?.params?.formData,
    //         email_otp: otp,
    //       };
    //       console.log('make req with', dataOtp);
    //     axios.post('https://www.proassetz.com/api/v1/user-login/',{dataOtp}).then((response)=>
    //     {
    //         console.log(response);
    //         console.log(dataOtp);
    //         navigation.navigate("KYC");
    //     }).catch((error)=>{
    //         console.error('error',error);
    //     })
    // }
    const renderCell = ({ index, symbol, isFocused }) => {
        let textChild = null;
    
        if (symbol) {
          textChild = <Text isLastFilledCell={isLastFilledCell({ index, value })}>{symbol}</Text>;
          if (index === 6 && symbol !== '') {
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

    return (
        <View style={{display:'flex', flexDirection:'column',backgroundColor:colors.bgColor}}>
          <ScrollView>
            <View style={{display:'flex',flexDirection:'row',marginBottom:100,marginTop:40}}>
                <TouchableOpacity style={{marginRight:50,marginTop:14}} onPress={()=>navigation.navigate('QrTwoFactor')}>
                    <Image style={{width:20,height:20,justifyContent:'center',alignItems:'center'}} source={require('../../../Assets/backButton.png')}/>
                </TouchableOpacity>
                <Text style={{ width:349,height:60,color:colors.darkOrange,display:'flex',fontSize:20,}}>2 Factor{' '}
                <Text style={{fontSize:20,color:'antiquewhite'}}>Authentication {' \n '}</Text>
                OTP</Text>
            </View>
            <View style={{display:'flex',margin:'auto',marginBottom:30,marginTop:65}}>
                <Text style={{fontSize:16,color:colors.darkgreytxt}}>Type Your OTP</Text>
            </View>
            <View style={{display:'flex',flexDirection:'row',marginBottom:50,}}>
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
            </View>
            <View style={{display:'flex',flexDirection:"column",marginBottom:305}}>
                <Button  mode="contained" style={{backgroundColor:colors.yellowLg,margin:"auto",width:126,height:46,borderRadius:5,alignItems:'center'}} onPress={()=>renderVerifiedOtp} >
                {/* onPress={()=>otpData(value)} */}
                    <Text style={{fontSize: 20,textAlign:'center',color:'black',textTransform:'capitalize',}}>Verify</Text>
                </Button>
            </View>
          </ScrollView>
        </View>
    );
}

  const renderVerifiedOtp=()=>{
    return(
      <View style={{display:'flex', flexDirection:'column',backgroundColor:colors.bgColor}}>
        <View style={{display:'flex',flexDirection:'row',marginLeft:50,marginBottom:30,marginTop:20,}}>
                 <Text style={{ width:349,height:60,color:colors.darkOrange,display:'flex',fontSize:20,}}>2 Factor{' '}
                 <Text style={{fontSize:20,color:'antiquewhite'}}>Authentication {' \n '}</Text>
                 OTP</Text>
        </View>
        <View style={{display:'flex',flexDirection:'column',marginBottom:70}}>
          <Text style={{ color: '#C4C4C4', textAlign: 'center', marginTop: 50, marginBottom:10,fontSize:16}}>
            2 factor authentication{' '}
          </Text>
          <Text style={{color: '#38C976',textAlign: 'center',marginTop: 0,marginBottom: 70,fontSize: 40,}}>
            Verified{' '}
          </Text>
        </View>
        <View
            style={{
              height: 50,
              justifyContent: 'center',
              alignItems: 'center',
              marginVertical: 30,
              top: -40,
            }}
            resizeMode="stretch">
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                height: 60,
                width: 280,
                padding: 10,
                position: 'relative',
                borderWidth:1,
                borderColor:colors.grayDark,
                borderStyle:'dashed',
                borderRadius:15,
              }}>
              
                <Text selectable={true} style={{ color: '#fff', textAlign: 'center' }}>
                  {CELL_COUNT}
                </Text>
              
              <Button
                style={{ position: 'absolute', right: '-8%', top: 18, zIndex: 10 }}
                labelStyle={{ fontSize: 22, lineHeight: 1 }}
                onPress={CELL_COUNT}
                icon="content-copy"
                color="#6E6E6E"
              />
            </View>
          </View>
          <TouchableOpacity
          // onPress={handleDownload}
          style={{
            width: 246,
            height: 41,
            borderRadius:15,
            borderColor:colors.grayDark,
            borderWidth:1,
            marginLeft: 'auto',
            marginRight: 'auto',
            position: 'relative',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{ color:colors.darkOrange, textAlign: 'center', fontSize: 18 }}> Download Key</Text>
        </TouchableOpacity>
        <Text style={{ color: '#6E6E6E', textAlign: 'center', marginTop: 50, marginBottom: 10 }}>
          Keep Seed Key Safe for OTP Recovery
        </Text>
        <Text style={{ color: '#6E6E6E', textAlign: 'center', fontSize: 18 }}>
          Download 2FA Backup Key to Contuine
        </Text>
        <Button
          disabled={false}
          dark={false}
          style={{ 
            width: '90%',
            alignSelf: 'stretch',
            backgroundColor: `${colors.yellowLg}`,
            padding: 0,
            height: 46,
            marginLeft:'auto',
            marginRight: 'auto',
            marginTop: 60,
            marginBottom: 40,
            borderRadius: 10,}}
          // onPress={() => navigation.navigate('KYC')}
            compact={false}
          contentStyle={{
            alignSelf: 'stretch',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: 0,
            margin: 0,
          }}
          mode="contained">
          <Text
            style={{
              fontSize: 20,
              textAlign: 'center',
              textTransform: 'capitalize',
              color: '#473200',
            }}>
            Continue
          </Text>
        </Button>
      </View>
    )
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

export default OtpTwoFactor;
