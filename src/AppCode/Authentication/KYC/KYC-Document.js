import React, { useState } from "react";
import { View, Text, TextInput, ScrollView, StyleSheet, Image, TouchableOpacity, Dimensions} from "react-native";
import { Button,} from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import StepIndicator from "./StepNavigatorPage";
import { colors } from "../../Constant";
import BouncyCheckbox from "react-native-bouncy-checkbox";

const KycDocument = () => {
    const [Checked1, setChecked1]=useState(false);
    const [Checked2, setChecked2]=useState(false);
    const navigation = useNavigation();
    const width = Dimensions.get('window').width;
    const height = Dimensions.get('window').height;
    return (
        <ScrollView>
        <View style={styles.mainContainer}>
            <StepIndicator></StepIndicator>
            <View>
                <Text style={{width:152,height:20,fontSize:16,color:'antiquewhite'}}>Upload Document</Text>
                <Text style={{width:209,height:16,fontSize:12,color:colors.darkgreytxt}}>Upload clear JPG/PNG Files upto 5MB</Text>
            </View>
            <View style={{marginBottom:22}}>
                <TextInput placeholder="Upload Selfie" style={styles.input}/>
            </View>
            <View>
                <Text style={{width:238,height:22,fontSize:16,color:colors.darkgreytxt}}>Select Document Type to upload</Text>
                <View style={{padding:2,display:'flex',flexDirection:'row',alignItems:'center',alignContent:'space-between'}}>
                    <View style={{display:'flex',flexDirection:'row'}}>
                        <BouncyCheckbox fillColor={colors.darkOrange} unfillColor={colors.darkgrey} iconStyle={{borderRadius:5}} status={Checked1 ? 'checked':'unchecked'} onPress={()=>setChecked1(!Checked1)}/>
                        <Text style={{color:'white',fontSize:20}}>Passport</Text>
                    </View>
                    <View style={{display:'flex',flexDirection:'row'}}>
                        <BouncyCheckbox fillColor={colors.darkOrange} unfillColor={colors.darkgrey} iconStyle={{borderRadius:5}} status={Checked2 ? 'checked':'unchecked'} onPress={()=>setChecked2(!Checked2)}/>
                        <Text style={{color:'white',fontSize:20}}>Aadhaar Card</Text>
                    </View>
                </View>
            </View>
            <View>
                  <TextInput placeholder="Upload Document Front" style={styles.input}/>
                  <TextInput placeholder="Upload Document Back" style={styles.input}/>
            </View>
            <View>
                <Text style={{width:152,height:20,fontSize:16,color:'antiquewhite',marginBottom:2}}>Upload Document</Text>
                <Text style={{width:245,height:16,fontSize:12,color:colors.darkgreytxt}}>Your details as it appears on your documents</Text>
            </View>
            <View>
                <TextInput placeholder="Upload Selfie with Document" style={styles.input}/>
            </View>
            <View style={{display:'flex',margin:'auto',marginBottom:65}}>
                    <Button  mode="contained" style={{margin:"auto",backgroundColor:colors.yellowLg,width:223,height:46,borderRadius:5,alignItems:'center'}} onPress={()=>navigation.navigate("BankDetail")}>
                        <Text style={{fontSize: 20,textAlign:'center',color:'black'}}>Submit</Text>
                    </Button>
            </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    mainContainer:{
        display:'flex',
        flex:1,
        flexDirection:'column',
        backgroundColor:colors.bgColor
    },
    input: {
        backgroundColor: '#424040',
        color:'#686868',
        borderRadius: 5,
        marginBottom:26,
        width:322,
        height:50,
        marginHorizontal:'auto',
        paddingLeft:20,
      },
});

export default KycDocument;
