import React, { Component, useState } from 'react';
import { View, Text,TextInput, StyleSheet, ScrollView, Image, Touchable, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import StepIndicator from './StepNavigatorPage';
import { colors } from '../../Constant';

const KycDetails = () => {
  const navigation = useNavigation();
  const [selected,setSelected] = useState('');
  
  const DropDownList=()=>{

  }
    return (
      <ScrollView>
      <View style={styles.MainContainer}>
           <StepIndicator></StepIndicator>
            <View style={{display:'flex',flexDirection:'column',width:'30%',marginLeft:37}}>
                <Text style={{fontSize:16,color:'antiquewhite',marginTop:48,marginBottom:17}}>Basic Information</Text>
            </View>
            <View style={{position:'relative'}}>
                  <TextInput placeholder="DD/MM/YY" style={styles.input} />
                  <TouchableOpacity style={{position:'absolute',left:"80%",top:'20%'}} >
                        <Image source={require('../../../Assets/Calender.png')}/>
                  </TouchableOpacity>
            </View>
            <View>
                  <TextInput placeholder="Enter Document No" style={styles.input}/>
            </View>
            <View style={{flexDirection:'row',margin:15,position:'relative'}}>
                  <TextInput placeholder="Enter Country" style={styles.input1}/>
                  <TouchableOpacity style={{position:'absolute',left:'40%',top:'25%'}}>
                        <Image source={require('../../../Assets/DropDown.png')}/>
                  </TouchableOpacity>

                  <TextInput placeholder="Enter State" style={styles.input1}/>
                  <TouchableOpacity style={{position:'absolute',left:'85%',top:'25%'}} onPress={''}>
                        <Image source={require('../../../Assets/DropDown.png')} />
                  </TouchableOpacity>
            </View>
            <View>
                  <TextInput placeholder="Enter Your Address" style={styles.input}/>
            </View>
            <View style={{flexDirection:'row',margin:15,position:'relative'}}>
                  <TextInput placeholder="Enter City" style={styles.input1}/>
                  <TouchableOpacity style={{position:'absolute',left:'40%',top:'25%'}}>
                        <Image source={require('../../../Assets/DropDown.png')}/>
                  </TouchableOpacity>
                  <TextInput placeholder="Enter Pin Code" style={styles.input1}/>
            </View>
            <View style={{marginBottom:70}}>
                  <TextInput keyboardType='number-pad' placeholder="Enter Phone No" style={styles.input}/>
            </View>            
            <View style={{marginBottom:125,alignItems:'center'}}>
              <Button  mode="contained" style={{width:'80%',margin:"auto",backgroundColor:colors.yellowLg,borderRadius:5,alignItems:'center'}} onPress={()=>navigation.navigate('KYC-Document')}>
                <Text style={{fontSize:20,textAlign:'center',color:'black'}}>NEXT</Text>
              </Button>
            </View>
        </View>
        </ScrollView>


    );
};

const styles = StyleSheet.create({
      MainContainer:{
            display:'flex',
            flexDirection:'column',
            backgroundColor:colors.bgColor,
            width:'100%',
      },
      input: {
            backgroundColor: '#424040',
            color: '#686868',
            borderRadius: 5,
            marginBottom:26,
            width:'80%',
            marginHorizontal:'auto',
            marginLeft:35
      },
      input1: {
            backgroundColor: '#424040',
            color: '#686868',
            borderRadius: 5,
            marginBottom:26,
            width:'40%',
            marginLeft:22,
      },
});

export default KycDetails;
