import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";


export default function MobileNumber(Props){

    const [phonenumber , setPhonenumbner] = useState(null);

    return(
        <View style={styles.container}>
            <Text style={{fontSize:25, color:'black', alignSelf:'center'}}>Enter your phone number</Text>
            <TextInput style={styles.input} autoFocus
            value={phonenumber}
            onChangeText={setPhonenumbner}
            />

            <Button title="Sign in with OTP" onPress={() => Props.onSubmit(phonenumber)}/>

        </View>
    );

}
const styles= StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
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