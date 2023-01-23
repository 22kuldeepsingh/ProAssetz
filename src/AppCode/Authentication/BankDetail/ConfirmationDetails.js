import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { colors } from "../../Constant";

const ConfirmBankDetail = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: colors.bgColor,
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          marginBottom: 100,
          marginTop: 19,
        }}
      >
        <TouchableOpacity
          style={{ marginRight: 50, marginTop: 14 }}
          onPress={() => navigation.navigate("BankDetail")}
        >
          <Image
            style={{
              width: 14,
              height: 23,
              justifyContent: "center",
              alignItems: "center",
            }}
            source={require("../../../Assets/backButton.png")}
          />
        </TouchableOpacity>
        <Text
          style={{
            color: "antiquewhite",
            width: 302,
            height: 32,
            display: "flex",
            justifyContent: "center",
            fontSize: 20,
          }}
        >
          Confirm Your Bank Details
        </Text>
      </View>
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "row",
          margin: 20,
          marginBottom: 26,
        }}
      >
        <TextInput
          label={<Text>IFSC Code</Text>}
          placeholder="jbjcbhj"
          style={styles.input1}
        />
        <TextInput placeholder="Bank Name" style={styles.input1} />
      </View>
      <View
        style={{ display: "flex", justifyContent: "center", marginBottom: -20 }}
      >
        <TextInput placeholder="Input" style={styles.input} />
      </View>
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "row",
          margin: 20,
          marginBottom: 26,
        }}
      >
        <TextInput placeholder="Branch Name" style={styles.input1} />
        <TextInput placeholder="Account Type" style={styles.input1} />
      </View>
      <View
        style={{ display: "flex", justifyContent: "center", marginBottom: 70 }}
      >
        <TextInput placeholder="Mobile No" style={styles.input} />
        <TextInput placeholder="Name as on Bank Account" style={styles.input} />
        <TextInput placeholder="UPI Address with Bank" style={styles.input} />
      </View>
      <Button
        mode="contained"
        style={{
          backgroundColor: colors.yellowLg,
          width: 322,
          height: 46,
          margin: "auto",
          marginBottom: 84,
          border: 1,
          borderRadius: 6,
        }}
        onPress={() => navigation.navigate("UploadingDocs")}
      >
        <Text
          style={{
            fontSize: 20,
            textAlign: "center",
            color: "#473200",
            textTransform: "uppercase",
          }}
        >
          NEXT
        </Text>
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    // backgroundColor: '#424040',
    color: "#686868",
    borderRadius: 5,
    height: 50,
    marginBottom: 26,
    width: 322,
    height: 50,
    marginHorizontal: "auto",
    paddingLeft: 15,
  },
  input1: {
    // backgroundColor: '#424040',
    color: "#686868",
    borderRadius: 5,
    width: 147,
    height: 50,
    margin: "auto",
    paddingLeft: 15,
  },
});

export default ConfirmBankDetail;
