import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../../Constant';

const KYC=()=>{
    const navigation = useNavigation();
    return (
        <View style={{display:'flex',backgroundColor:colors.bgColor}}>
            <View style={{marginLeft:43}}>            
            <View style={{display:'flex',margin:'auto',marginBottom:28,marginTop:175}}>
                <Text style={{color:'antiquewhite',display:'flex',fontSize:30,}}>Complete Your{'\n'}</Text>
                <Text style={{ fontSize: 50,color: colors.yellowDark,}}>KYC</Text>
            </View>
            <View style={{display:'flex',margin:'auto',marginBottom:190,}}>
                <Text style={{display:'flex',fontSize: 20,color:'antiquewhite',justifyContent:'center',}}>You are few steps away {'\n'} from trading...</Text>
            </View>
            <View style={{display:'flex',margin:'auto',marginBottom:202,}}>
                    <Button  mode="contained" style={{margin:"auto",backgroundColor:colors.yellowLg,width:223,height:46,borderRadius:5,justifyContent:'center'}} onPress={()=>navigation.navigate("PersonalDetails")}>
                        <Text style={{fontSize: 20,color:'black'}}>Complete KYC</Text>
                    </Button>
            </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
});

export default KYC;
