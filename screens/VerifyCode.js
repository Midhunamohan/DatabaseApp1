import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";

export default function VerifyCode(Props){
    const [code , setCode] = useState('');
    return(
<View style={styles.container}>
    <Text style={{fontSize:25,color:'black'}}>Enter OTP here</Text>

    <TextInput style={ styles.input} autoFocus 
    keyboardType="numeric"
    value={code}
    onChangeText={setCode}
    />
  <Button title="confirm OTP" onPress={() => Props.onSubmit(code) }/>
</View>
    );

}
const styles= StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    } ,
    input:{
        borderWidth:2,
        borderColor:'#2577b1',
        width:300,
        fontSize:25,
        marginVertical:30,
        padding:10,
        borderRadius:8,

    },
})