import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { Button } from "react-native-paper";
import { colors } from "../../Constant";

const UploadDocs = () => {
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
          marginBottom: 33,
          marginTop: 19,
        }}
      >
        <TouchableOpacity
          style={{ marginRight: 50, marginTop: 14 }}
          onPress={() => navigation.navigate("ConfirmBankDetails")}
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
          Almost Done
        </Text>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          marginBottom: 35,
          marginTop: 19,
          marginLeft: 39,
        }}
      >
        <Text
          style={{
            color: "antiquewhite",
            width: 168,
            height: 22,
            display: "flex",
            justifyContent: "center",
            fontSize: 16,
          }}
        >
          Upload Your Pan Card
        </Text>
        <Text style={{ width: 209, height: 16, fontSize: 12 }}>
          Upload clear JPG/PNG Files upto 5MB
        </Text>
      </View>
      <View
        style={{ display: "flex", justifyContent: "center", marginBottom: 36 }}>
        <TextInput placeholder="Upload Document Front" style={styles.input} />
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          marginBottom: 37,
          marginLeft: 39,
        }}
      >
        <Text
          style={{
            color: "antiquewhite",
            width: 258,
            height: 22,
            display: "flex",
            justifyContent: "center",
            fontSize: 16,
          }}
        >
          Upload a Copy Of Cancel Cheque
        </Text>
        <Text style={{ width: 209, height: 16, fontSize: 12 }}>
          Upload clear JPG/PNG Files upto 5MB
        </Text>
      </View>
      <View
        style={{ display: "flex", justifyContent: "center", marginBottom: 36 }}
      >
        <TextInput placeholder="Upload Document" style={styles.input} />
      </View>
      <View
        style={{
          display: "flex",
          margin: "auto",
          marginBottom: 125,
          marginTop: 175,
        }}
      >
        <Button
          mode="contained"
          style={{
            margin: "auto",
            backgroundColor: colors.yellowLg,
            width: 223,
            height: 46,
            borderRadius: 5,
            alignItems: "center",
          }}
          onPress={() => navigation.navigate("BankDetail")}
        >
          <Text style={{ fontSize: 20, textAlign: "center", color: "black" }}>
            Submit
          </Text>
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#424040",
    color: "#686868",
    borderRadius: 5,
    height: 50,
    marginBottom: 26,
    width: 322,
    height: 52,
    marginHorizontal: "auto",
    paddingLeft: 15,
  },
});

export default UploadDocs;
