import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView
} from "react-native";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { Formik } from "formik";
import * as yup from "yup";
import axios from "axios";
import { colors } from "../../Constant";

const formSchema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

const LogIn = () => {
  const [email, setemail] = useState('')
  const [pass, setpass] = useState('')
  const navigation = useNavigation();
  
  const user = {
    email: email,
    password: pass,
  }
  const storeData = () => {
    try {
      AsyncStorage.setItem('Key', JSON.stringify(user));
    }
    catch (e) {
      console.log('Async error', e)
    }
  }
  const userData  =(formData)=>{
    axios.post('https://www.proassetz.com/api/v1/user-login/',formData).then((response)=>{
      console.log("response=>",response);
      console.log('formData=>',formData);
      navigation.navigate('EmailAuthentication',{formData});
    }).catch((error)=>{
      console.log('error',error);
    })
    }
  return (
    <ScrollView style={{ backgroundColor: colors.bgColor, }}>
    <View
      style={{
        display: "flex",
        flexDirection: "column",
        marginHorizontal: 10,
      }}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            marginBottom: 2,
            marginTop: 40,
            justifyContent: "center",
          }}>
          <Image
            style={{ height: 350, width: 300 }}
            resizeMode="contain"
            source={require("../../../Assets/logoBig.png")}
          />
        </View>
        <Text
          style={{
            color: "antiquewhite",
            textAlign: "left",
            fontSize: 35,
            width: "100%",
            marginBottom: 35,
          }}>
          Login
        </Text>
        <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={formSchema}
        onSubmit={(values) => {
          console.log("LogIn values =>", values);
          userData(values);
          setemail(values.email);
          setpass(values.pass);

        }}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          touched,
          errors,
          setFieldValue,
        })=>(
          <View>
        <View>
          <TextInput
            placeholder="EmailId"
            style={[styles.input,touched.email && errors.email ? { borderWidth: 1, borderColor: '#DC3030' } : {}]}
            keyboardType={"email-address"}
            value={values.email}
            onChangeText={(val) => setFieldValue('email',val.trim())}
            onBlur={handleBlur('email')}
          />
          <Text style={{ color: '#DC3030', textAlign:'justify'}}>{touched.email && errors.email}</Text>
          <View style={{display:'flex',flexDirection:'row'}}>
          <TextInput
            placeholder="Password"
            style={[styles.input1,touched.password && errors.password ? { borderWidth: 1, borderColor: '#DC3030' } : {}]}
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            secureTextEntry={true}
          />
          <TouchableOpacity style={{width:53,height:53,backgroundColor:"#424040",borderWidth:1,borderRadius:5,marginLeft:12,alignItems:'center',justifyContent:'center'}}>
            <Image source={require('../../../Assets/FingerPrint.png')}/>
          </TouchableOpacity>
          </View>
          <Text style={{ color: '#DC3030', textAlign: 'left',}}>{touched.password && errors.password}</Text>
        </View>
        <View style={{ display: "flex", flexDirection: "row",margin:'auto' ,marginBottom: 50}}>
          <View style={{margin:'auto',marginRight:15,justifyContent:'center'}}>
            <Text style={{fontSize: 16,color: colors.lightWhite,}}>Forgot Password?</Text>
          </View>
          <View>
            <Button mode="contained" style={{margin: "auto",width: 100,backgroundColor: colors.yellowLg,borderRadius:5}} onPress={handleSubmit}>
              <Text style={{fontSize: 20,color: "black",}}>LogIn</Text>
            </Button>
          </View>
        </View>
        <View
          style={{
            width: 300,
            height: 50,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "auto",
          }}
        >
          <Text style={{ fontSize: 26, color: colors.lightWhite }}>
            Don't have an Account ?
          </Text>
        </View>
        <View
          style={{
            width: 300,
            height: 50,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "auto",
            marginBottom: 100,
          }}>
          <TouchableOpacity onPress={() => navigation.navigate("CreateAccount")}>
            <Text style={{ color: colors.darkOrange, fontSize: 26 }}>
              Create An Account
            </Text>
          </TouchableOpacity>
        </View>
        </View>
        )}
      </Formik>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  input: {
    color: "#fff",
    backgroundColor: "#424040",
    borderRadius: 5,
    height: 50,
    width: 322,
    height: 50,
  },
  input1: {
    color: "#fff",
    backgroundColor: "#424040",
    borderRadius: 5,
    height: 50,
    width: 254,
    height: 50,
  }
});

export default LogIn;
