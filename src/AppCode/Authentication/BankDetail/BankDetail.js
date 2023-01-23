import React, { Component } from 'react';
import { View, Text,TextInput, StyleSheet, ScrollView} from 'react-native';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../../Constant';

const BankDetails=() => {
    const navigation = useNavigation();
    return (
        <ScrollView>
        <View style={{display:'flex',flexDirection:'column',backgroundColor:colors.bgColor}}>
            <View style={{display:'flex',marginBottom:50,marginTop:19}}>
                <Text style={{color:'antiquewhite',display:'flex',justifyContent:'center',fontSize:20,}}>Complete Your Bank Details</Text>
            </View>
            <View style={{display:'flex',justifyContent:'center',flexDirection:'row',margin:'auto',marginBottom:26}}>
                <TextInput placeholder="IFSC Code " style={styles.input1}/>
                <TextInput placeholder="Bank Name" style={styles.input1}/>
            </View>
            <View style={{display:'flex',justifyContent:'center',margin:'auto',marginBottom:-20}}>
                <TextInput placeholder="Bank Account No" style={styles.input}/>
                <TextInput placeholder="Confirm Bank Account" style={styles.input}/>
            </View>
            <View style={{display:'flex',justifyContent:'center',flexDirection:'row',margin:'auto',marginBottom:26}}>
                <TextInput placeholder="Branch Name" style={styles.input1}/>
                <TextInput placeholder="Account Type" style={styles.input1}/>
            </View>
            <View style={{display:'flex',justifyContent:'center',margin:'auto',marginBottom:70}}>
                <TextInput placeholder="Mobile No" style={styles.input}/>
                <TextInput placeholder="Name as on Bank Account" style={styles.input}/>
                <TextInput placeholder="UPI Address with Bank" style={styles.input}/>
            </View>
            <View>
                <Button  mode="contained" style={{backgroundColor:colors.yellowLg,width:322,height:46,margin:"auto",marginBottom:84,border:1,borderRadius:6,}} onPress={()=>navigation.navigate('ConfirmBankDetails')}>
                    <Text style={{fontSize: 20,textAlign: 'center',color: '#473200',textTransform: 'uppercase',}}>NEXT</Text>
                </Button>
            </View>
        </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    input: {
        backgroundColor: '#424040',
        color: '#686868',
        borderRadius: 5,
        height: 50,
        marginBottom:26,
        width:322,
        height:50,
        marginHorizontal:'auto',
        paddingLeft:15,
      },
    input1: {
        backgroundColor: '#424040',
        color: '#686868',
        borderRadius: 5,
        width:147,
        height:50,
        margin:'auto',
        paddingLeft:15,
          },
});

export default BankDetails;
