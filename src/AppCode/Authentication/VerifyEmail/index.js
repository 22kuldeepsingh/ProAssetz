import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity} from "react-native";
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../../Constant';

const VerifyEmail = (props) => {
    const navigation = useNavigation();
    return (
        <View style={{display:'flex', flexDirection:'column',backgroundColor:colors.bgColor}}>
            <View style={{display:'flex',flexDirection:'row',alignItems:'center',marginTop:40,marginBottom:100,marginLeft:15,}}>
                <TouchableOpacity onPress={()=>{navigation.navigate('Declaration')} }>
                    <Image style={{width:20,height:20,justifyContent:'center',alignItems:'center'}} source={require('../../../Assets/backButton.png')}/>
                </TouchableOpacity>
                <Text style={{color:'antiquewhite',display:'flex',justifyContent:'center',fontSize:35,marginLeft:80}}>Verify Email</Text>
            </View>
            <View style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                <Text style={{ fontSize: 20, color: 'white',marginBottom:36}}>
                    An email has been seen to{'\n'}
                <Text style={{ fontSize: 20, color: colors.yellowDark,marginBottom:20 }}>
                    {props?.route?.params?.formData !== undefined ? props.route.params.formData.email : 'your email'}
                </Text>{' '}
                    for{'\n'}
                    confirmation.Please follow the
                    {'\n'}instrution there to complete your{'\n'}registration. {'\n'}
                </Text>
                <Text style={{ fontSize: 20, color: 'white', marginTop: 3,marginBottom:36}}>
                    Did not receive email{' '}
                <Text onPress={() => navigation.navigate('ContactUs')} style={{ fontSize: 20, color: colors.yellowDark,marginBottom:2 }}>
                    contact us
                </Text>
                    {'\n'}
                </Text>
                <Text style={{ fontSize: 20, color: 'white',marginBottom:225,width:280}}>
                    Once confirmed click on Continue to login
                </Text>
            </View>
            <Button  mode="contained" style={{margin:"auto",marginBottom:100,backgroundColor:colors.yellowLg,borderRadius:5}} onPress={()=>navigation.navigate("LogIn")}>
                <Text style={{fontSize: 20,textAlign: 'center',color: 'black',textTransform: 'capitalize',}}>Continue</Text>
            </Button>
        </View>
    );
};

export default VerifyEmail;
