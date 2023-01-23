import React, { Component } from 'react';
import { View, Text,TextInput, StyleSheet, TouchableOpacity,ScrollView } from 'react-native';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import StepIndicator from './StepNavigatorPage';
import { Formik } from 'formik';
import * as yup from "yup";
import { colors } from '../../Constant';

const formSchema = yup.object({
    first_name: yup.string().required("First name is required"),
    last_name: yup.string("Last name is required").required(),
    email: yup.string().email().required(),
  });

const PersonalDetails=()=>{
  const navigation = useNavigation();
    return (
        <ScrollView>
        <View style={{display:'flex', flexDirection:'column',backgroundColor:colors.bgColor}}>
            <StepIndicator></StepIndicator>
            <View style={{display:'flex',flexDirection:'column',margin:'auto',marginLeft:20,marginBottom:20}}>
                <Text style={{width:147,height:20,fontSize:16,color:'antiquewhite',}}>Basic Information</Text>
                <Text style={{width:221,height:16,fontSize:12,color:colors.darkgreytxt,}}>Verify Your details as per your document</Text>
            </View>
            <Formik>
                <View>
                    <View style={{display:'flex',justifyContent:'center',margin:'auto',marginLeft:20,marginBottom:221}}>
                          <TextInput placeholder="FirstName" style={styles.input}/>
                          <TextInput placeholder="LastName" style={styles.input}/>
                          <TextInput placeholder="Email ID" style={styles.input}/>
                          <TextInput placeholder="ProAssetz ID" style={styles.input}/>
                    </View>
                    <View style={{display:'flex',justifyContent:'center',margin:'auto',marginLeft:20,marginBottom:150}}>
                            <Button  mode="contained" style={{backgroundColor:colors.yellowLg,width:322,height:46,borderRadius:5}} onPress={()=>navigation.navigate("KYC-Details")}>
                                <Text style={{fontSize: 20,color:'black'}}>NEXT</Text>
                            </Button>
                    </View>
                </View>
            </Formik>
        </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    input: {
        backgroundColor: '#424040',
        color: colors.darkgreytxt,
        borderRadius: 5,
        marginBottom:26,
        width:322,
        height:50,
        padding:12,
        fontSize:16,
      },
    
});

export default PersonalDetails;
