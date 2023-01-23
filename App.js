/**
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import BankDetails from './src/AppCode/Authentication/BankDetail/BankDetail';
import ConfirmBankDetail from './src/AppCode/Authentication/BankDetail/ConfirmationDetails';
import UploadDocs from './src/AppCode/Authentication/BankDetail/UploadingDocs';
import ContactUs from './src/AppCode/Authentication/ContactUs';
import NewAccount from './src/AppCode/Authentication/CreateAccount';
import Declaration from './src/AppCode/Authentication/Declaration';
import EmailAuthentication from './src/AppCode/Authentication/EmailAuth';
import KYC from './src/AppCode/Authentication/KYC';
import KycDetails from './src/AppCode/Authentication/KYC/KYC-Details';
import KycDocument from './src/AppCode/Authentication/KYC/KYC-Document';
import PersonalDetails from './src/AppCode/Authentication/KYC/PersonalDetails';
import LogIn from './src/AppCode/Authentication/logIn';
import SplashOn from './src/AppCode/Authentication/SplashS';
import TwoFactorView from './src/AppCode/Authentication/TwoFactorAuth';
import OtpTwoFactor from './src/AppCode/Authentication/TwoFactorAuth/Otp-TwoFactor';
import QrTwoFactor from './src/AppCode/Authentication/TwoFactorAuth/QR-TwoFactor';
import VerifyEmail from './src/AppCode/Authentication/VerifyEmail';

const Stack = createNativeStackNavigator();

function App(){

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='WelcomeScreen' screenOptions={{headerShown:false}}>
        {/* <Stack.Screen name='WelcomeScreen' component={SplashOn}/>   
        <Stack.Screen name='CreateAccount' component={NewAccount}/>  
        <Stack.Screen name='Declaration' component={Declaration}/> 
        <Stack.Screen name='VerifyEmail' component={VerifyEmail}/> 
        <Stack.Screen name='ContactUs' component={ContactUs}/> 
        <Stack.Screen name='LogIn' component={LogIn}/>
        <Stack.Screen name='EmailAuthentication' component={EmailAuthentication}/>
        <Stack.Screen name='TwoFactorView' component={TwoFactorView}/>
        <Stack.Screen name='QrTwoFactor' component={QrTwoFactor}/>
        <Stack.Screen name='OtpTwoFactor' component={OtpTwoFactor}/>  */}
        <Stack.Screen name='KYC' component={KYC}/>
        <Stack.Screen name='PersonalDetails' component={PersonalDetails}/>
        <Stack.Screen name='KYC-Details' component={KycDetails}/>  
        <Stack.Screen name='KYC-Document' component={KycDocument}/>   
        {/* <Stack.Screen name='BankDetail' component={BankDetails} />
        <Stack.Screen name='ConfirmBankDetails' component={ConfirmBankDetail} />
        <Stack.Screen name='UploadingDocs' component={UploadDocs} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
