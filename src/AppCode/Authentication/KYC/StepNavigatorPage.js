import { useNavigation } from '@react-navigation/native';
import React, { Component } from 'react';
import { View, Text, TouchableOpacity,} from 'react-native';
import { StyleSheet } from 'react-native/Libraries/StyleSheet/StyleSheet';
import { colors } from '../../Constant';

const StepIndicator = () => {
    const navigation=useNavigation();
    return (
        <View style={{display:'flex',flexDirection:'row',alignItems:'center',margin:'auto',marginTop:33,marginBottom:48,marginLeft:40}}>
                <TouchableOpacity style={{display:'flex',}} onPress={()=>navigation.navigate('PersonalDetails')}>
                    <View style={{width:20,height:19,borderRadius:10,backgroundColor:'#E29224',}}>
                    <Text style={{width:80,height:16,marginTop:20,fontSize:12,color:colors.darkgreytxt}}>Personal Details</Text>
                    </View>
                </TouchableOpacity>
                <View style={{width: 100,height: 4,backgroundColor: '#424141',borderRadius: 5,}}></View>
                <TouchableOpacity onPress={()=>navigation.navigate('KYC-Details')}>
                    <View style={{width:20,height:19,borderRadius:10,backgroundColor:'#E29224',}}>
                    <Text style={{width:60,height:16,marginTop:20,fontSize:12,color:colors.darkgreytxt}}>KYC Details</Text>
                    </View>
                </TouchableOpacity>
                <View style={{width: 100,height: 4,backgroundColor: '#424141',borderRadius: 5,}}></View>
                <TouchableOpacity onPress={()=>navigation.navigate('KYC-Document')}>
                    <View style={{width:20,height:19,borderRadius:10,backgroundColor:'#E29224',}}>
                    <Text style={{width:80,height:16,marginTop:20,fontSize:12,color:colors.darkgreytxt}}>KYC Document</Text>
                    </View>
                </TouchableOpacity>
        </View>
    );
};

export default StepIndicator;
