import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions
} from "react-native";
import { Card, IconButton, TextInput , } from "react-native-paper";
import { Formik } from "formik";
import * as yup from "yup";
import { useNavigation } from "@react-navigation/native";
import { colors } from "../../Constant";
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import Icon from 'react-native-vector-icons/FontAwesome';


const formSchema = yup.object({
  first_name: yup.string().required("First name is required"),
  last_name: yup.string("Last name is required").required(),
  email: yup.string().email().required(),
  password: yup
    .string()
    .required()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    ),
  confirm_password: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

// const signUp=(formData)=>{
//   axios.post("https://www.proassetz.com/api/v1/user-registration/",formData).then((response)=>{

//     console.log('response',response);
//   }).catch((error)=>{
//     console.log('error',error);
//   })
// }
const PasswordValidator = ({ text }) => {
  const [Check1, setCheck1] = useState(false);
  const [Check2, setCheck2] = useState(false);
  const [Check3, setCheck3] = useState(false);
  const [Check4, setCheck4] = useState(false);

  const checkPoints = (text) => {
    let p = /(?=.*[!@#\$%\^&\*])/;
    let x = text.match(p);
    setCheck1(x);
    let p2 = /(?=.*[A-Z])/;
    let x2 = text.match(p2);
    setCheck2(x2);
    let p3 = /(?=.*[0-9])/;
    let x3 = text.match(p3);
    setCheck3(x3);
    let p4 = /(?=.{8,})/;
    let x4 = text.match(p4);
    setCheck4(x4);
  };

  // useEffect(() => {
  //   // checkPoints(text);
  // }, [text]);

  return (
    <Card
      style={{ width: "100%", backgroundColor: "#363434", marginVertical: 5 }}
      elevation={10}
      mode="elevated"
    >
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <View
          style={{
            margin: 10,
            height: 18,
            width: 18,
            borderWidth:  Check1 ? 0 : 1,
            borderColor:  Check1 ? "#079640" : `${colors.yellowLg}`,
            borderRadius: 100,
            borderStyle:  Check1 ? "solid" : "dashed",
            backgroundColor:  Check1 ? "#079640" : "transparent",
          }}
        />
        <Text style={{ color: "white", fontSize: 12 }}>
          Contains 1 Special Character ('!@#$%^&*')
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "flex-start",
          alignItems: "center",
        }}>  
        <View
          style={{
            margin: 10,
            height: 18,
            width: 18,
            borderWidth:  Check2 ? 0 : 1,
            borderColor:  Check2 ? "#079640" : `${colors.yellowLg}`,
            borderRadius: 100,
            borderStyle:  Check2 ? "solid" : "dashed",
            backgroundColor:  Check2 ? "#079640" : "transparent",
          }}
        />
        <View>
          <Text style={{ color: "white", fontSize: 12 }}>
            {" "}
            Contains 1 Uppercase letter
          </Text>
        </View>
      </View>
      <View
        style={{flexDirection:"row",flexWrap:"wrap",alignItems:"center"}}>
        <View
          style={{
            margin: 10,
            height: 18,
            width: 18,
            borderWidth:  Check3 ? 0 : 1,
            borderColor:  Check3 ? "#079640" : `${colors.yellowLg}`,
            borderRadius: 100,
            borderStyle:  Check3 ? "solid" : "dashed",
            backgroundColor:  Check3 ? "#079640" : "transparent",
          }}
        />
        <Text style={{color:"white",fontSize:12}}>
          {" "}
          Contains 1 Number{" "}
        </Text>
      </View>
      <View
        style={{flexDirection:"row",flexWrap:"wrap",alignItems:"center"}}>
        <View
          style={{
            margin: 10,
            height: 18,
            width: 18,
            borderWidth: Check4 ? 0:1,
            borderColor: Check4 ? "#079640" : `${colors.yellowLg}`,
            borderRadius:100,
            borderStyle: Check4 ? "solid" : "dashed",
            backgroundColor: Check4 ? "#079640" : "transparent",
          }}
        />

        <Text style={{ color: "white", fontSize: 12 }}>
          Minimum 8 Charaters with lowercase included
        </Text>
      </View>
    </Card>
  );
};

const NewAccount = () => {
  const [pass1, setpass1] = useState(true);
  const [pass2, setpass2] = useState(true);
  const navigation = useNavigation();
  const [Checked, setChecked] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;


  const handleCreateAccount =(formdata)=>{
    navigation.navigate("Declaration",{formdata});
  }
  // },[status1]); 
  return (
    <ScrollView>
      <View style={{...styles.mainContainer,width:windowWidth,height: windowHeight}}>
      <View style={styles.Container1}>
        <TouchableOpacity style={{ marginRight: 56,}} onPress={()=>navigation.navigate('WelcomeScreen')}>
          <Image style={styles.backbutton}
            source={require("../../../Assets/backButton.png")}
          />
        </TouchableOpacity>
        <Text style={styles.Heading}> Create An Account </Text>
      </View>
      <View style={{display:'flex',alignItems:'center'}}>
        <Formik
          initialValues={{
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            confirm_password: '',
            refferal_code: '',
            terms_and_condition: 1,
          }}
          validationSchema={formSchema}
          onSubmit={(values) => {
            console.log("sub", values);
            handleCreateAccount(values);
            // signUp(values);
         }}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            touched,
            errors,
            setFieldValue,
          }) => (
            <View style={styles.Container2}>
              <View>
                <TextInput label="FirstName" onChangeText={handleChange("first_name")} onBlur={handleBlur("first_name")} style={styles.input}/>
              </View>  
                <Text style={{ color: '#DC3030' }}>{touched.first_name && errors.first_name}</Text>
              <View>
              <TextInput label="LastName" onChangeText={handleChange("last_name")} onBlur={handleBlur("last_name")} style={styles.input}/>
              </View>
                <Text style={{ color: '#DC3030' }}>{touched.last_name && errors.last_name}</Text>
              <View>
              <TextInput label="EmailId" onChangeText={(val) => setFieldValue('email',val.trim())} value={values.email} onBlur={handleBlur("email")} style={styles.input} keyboardType={"email-address"}/>
              </View>
              <Text style={{ color: '#DC3030' }}>{touched.email && errors.email}</Text>
              <View>
              <TextInput label="Password" onChangeText={handleChange("password")} onBlur={handleBlur("password")} style={styles.input}
                secureTextEntry={pass1 ? true : false}
                right={
                  pass1 ? (
                    <Icon.Button
                    name='eye'
                    onPress={() => setpass1(!pass1)}/>
                  ) : (
                    <Icon.Button
                    name="eye-off"
                    onPress={() => setpass1(!pass1)}/>
                  )}/>
              </View>    
                    {touched.password && errors.password && (
                  <PasswordValidator text={values.password} />
                )}
                <View>
              <TextInput label="ConfirmPassword" onChangeText={handleChange("confirm_password")} onBlur={handleBlur("confirm_password")} style={styles.input}
                secureTextEntry={pass2 ? true : false}
                    right={
                      pass2 ? (
                        <TextInput.Icon
                          name="eye"
                          color={colors.grayMed}
                          onPress={() => setpass2(!pass2)}
                        />
                      ) : (
                        <TextInput.Icon
                          name="eye-off"
                          color={colors.grayMed}
                          onPress={() => setpass2(!pass2)}
                        />
                      )
                    }
                    theme={{ colors: { text: '#fff' } }}
                  />
              </View>      
                 <Text style={{ color: '#DC3030' }}>
                  {touched.confirm_password && errors.confirm_password}
                </Text>
              <View>
              <TextInput label="ReferrelCode" onChangeText={handleChange("refferal_code")} onBlur={handleBlur("refferal_code")} style={styles.input}/>
              </View>
              <View style={{ padding: 2,margin: "auto",display: "flex",flexDirection: "row",alignItems: "center",marginBottom:37,}}>
                <BouncyCheckbox fillColor={colors.darkOrange} unfillColor={colors.darkgrey} iconStyle={{borderRadius:5}}  status={Checked ? "checked" : "unchecked"}
                  onPress={() => {
                    setChecked(!Checked);
                    setDisabled(!disabled);
                    // setStatus1(1);
                    // handleChange('terms_and_condition');
                    // console.log('state2',setStatus1);
                    // console.log('state3',status1);
                    }}>
                </BouncyCheckbox>
                <Text style={{color:"white",fontSize:20}}>
                  I agree to Proassetz's{' '}
                <Text
                  style={{
                    color: `${colors.yellowDark}`,
                    fontSize: 16,
                    }}>
                      Terms of Use
                </Text>
                </Text>
              </View>
              <TouchableOpacity
                style={{
                  backgroundColor: colors.yellowLg,
                  marginBottom: 25,
                  margin:'auto',
                  borderRadius: 10,
                  alignItems: "center",
                  width: 323,
                  paddingVertical: 5,
                  marginVertical: 10,
                }}
                onPress={handleSubmit}
              >
                <Text style={{ color: "black", fontSize: 20 }}>
                  Create Account
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </Formik>
      </View>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainContainer:{
    display: "flex",
    flexDirection: "column",
    backgroundColor: colors.bgColor,
  },
  Container1:{
    display: "flex",
    flexDirection: "row",
    marginBottom: 71,
    marginTop: 19,
    marginLeft:19,
    alignItems:'center',
  },
  Container2:{
    display: "flex",
    justifyContent: "center",
    marginBottom: 80,
  },
  backbutton:{
    width: 14,
    height: 23,
    justifyContent: "center",
    alignItems: "center",
  },
  Heading:{
    color: "antiquewhite",
    display: "flex",
    justifyContent: "center",
    alignItems:'center',
    fontSize: 20,
    marginLeft:45,
  },
  input: {
    backgroundColor: "#424040",
    color: "#686868",
    borderRadius: 5,
    height: 50,
    marginBottom: 26,
    width: 322,
    height: 50,
    margin: "auto",
    paddingLeft: 15,
  },
  sbtButton: {
    backgroundColor: colors.grayDark,
    width: 300,
  },
});
export default NewAccount;
