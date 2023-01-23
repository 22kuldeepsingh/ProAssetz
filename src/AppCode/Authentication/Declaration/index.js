import React,{useEffect, useState} from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, ScrollView} from "react-native";
import { Button,} from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { colors } from '../../Constant';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

  const Declaration=(props)=>{
    console.log(props);
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    const navigation = useNavigation();
    const [checked1, setChecked1] = useState(false);
    const [checked2, setChecked2] = useState(false);
    const [checked3, setChecked3] = useState(false);
    const [disabled,setDisabled] = useState(true)
    useEffect(()=>{
        if(checked1 && checked2 && checked3)
        {
            setDisabled(false);
        }
        else{
            setDisabled(true);
        }
    },[checked1,checked2,checked3]);

    const signUp=(...formData)=>{
        axios.post("https://www.proassetz.com/api/v1/user-registration/",...formData).then((response)=>{
             console.log('response',response);
             console.log(formData);
             navigation.navigate('VerifyEmail',{formData})
        }).catch((error)=>{
          console.log('error',error);
        })
      }
    
    return (
        <View  style={{display: "flex",flexDirection: "column",backgroundColor:colors.bgColor,width: windowWidth,height:windowHeight,}}>
            <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginBottom:57,marginTop:19}}>
                <TouchableOpacity style={{marginLeft:15}} onPress={()=>{navigation.navigate('CreateAccount')}}>
                    <Image style={{width:20,height:20,}} 
                    source={require('../../../Assets/backButton.png')}/>
                </TouchableOpacity>
                <Text style={{color:'antiquewhite',fontSize:35,marginRight:150}}>Declaration</Text>
            </View>
            <View style={{display:'flex',alignItems:'center',width:276,justifyContent:'center',marginLeft:50}}>
            <View style={{padding:2,marginBottom:63,flexDirection:'row',}}>
                    <BouncyCheckbox fillColor={colors.yellowLg} unfillColor='#FFFFFF' iconStyle={{borderRadius:5}} status={checked1 ? 'checked':'unchecked'} onPress={()=>setChecked1(!checked1)} />
                    <Text style={{ color: '#fff', fontSize: 16,}}>
                        I declare that I became acquainted  with{' '}
                    <Text style={{color: colors.yellowDark,fontSize: 16,}}>Privacy policy
                    </Text>{' '}
                        for Indian users,
                    <Text style={{color: colors.yellowDark,fontSize: 16,}}>
                        {' '}
                        Terms of use
                    </Text>{' '}
                        and{' '}
                    <Text style={{color: colors.yellowDark,fontSize: 16,}}>
                        {' '}
                        Terms of condition
                    </Text>{' '}
                        for Indian users.
                    </Text>
            </View>
            <View style={{padding:2,margin:'auto',marginBottom:64,display:'flex',flexDirection:'row',alignItems:'center'}} >
                <BouncyCheckbox fillColor={colors.yellowLg} unfillColor='#FFFFFF' iconStyle={{borderRadius:5,}} status={checked2 ? 'checked' : 'unchecked'} onPress={() => {setChecked2(!checked2)}} />
                    <Text style={{ color: '#fff',fontSize: 16,}}>
                        I consent to the processing of my personal data provided by me during 
                        registration and collected during the  use of{' '}
                    <Text style={{color: colors.yellowDark,fontSize: 16,}}>
                        proassetz.com
                    </Text>
                    , collected in
                    order to provide services offered on  the Website, in particular the sale{' '}
                    and purchase of Crypto Assets.
                    </Text>
            </View>
            <View style={{padding:2,margin:'auto',marginBottom:100,display:'flex',flexDirection:'row',alignItems:'center'}}>
                <BouncyCheckbox fillColor={colors.yellowLg} unfillColor='#FFFFFF' iconStyle={{borderRadius:5}} status={checked3 ? 'checked' : 'unchecked'} onPress={() =>{setChecked3(!checked3)}} />
                    <Text style={{ color: '#fff', marginLeft: 4, fontSize: 16,}}>
                        I consent to the processing of my personal data in order to provide me with information on the operation of 
                        the platform, new functionalities of
                        the website, amendments to the  regulations and other documents, i.e {" "}
                    <Text style={{color: colors.yellowDark,textAlign:'center',fontSize: 16,}}>
                        Privacy Policy
                    </Text>{' '}
                        or AML
                    </Text>
            </View>
            <View style={{display:'flex',margin:'auto',marginBottom:72,}}>
                    <Button disabled={disabled} mode="contained" style={disabled? {margin:"auto",backgroundColor:colors.lightgrey,width:322,height:46,borderRadius:5,alignItems:'center'}:{margin:"auto",backgroundColor:colors.yellowLg,width:322,height:46,borderRadius:5,alignItems:'center'}} onPress={()=>signUp(props.route.params.formdata)}>
                        <Text style={{fontSize: 20,textAlign:'center',color:'black'}}>Accept</Text>
                    </Button>
            </View>
            </View>
        </View>
    );
};

export default Declaration;