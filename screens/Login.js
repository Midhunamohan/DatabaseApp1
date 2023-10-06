import React,{useState} from "react";
import { Text,StyleSheet,View,TextInput,Button, Alert } from "react-native";
import auth from '@react-native-firebase/auth';





 function Login({navigation}){

const [email , setEmail]= useState('');
const [password,setPassword]= useState('');

const signup =() =>{
  
    if(email != '' && password != ''){
      
            auth().createUserWithEmailAndPassword(email , password).then((res) =>{
                console.log("response", res)
                Alert.alert("user created successfully , you can login now..")
            })

        .catch((error) => {
            console.log("error_+++++++++++++++++" , error)
            Alert.alert(error.message);
        })

    }else{
        Alert.alert("Both fields are mandatory")
    }

}

const login =() =>{
    auth().signInWithEmailAndPassword(email , password).then((res) => {
        console.log("response" , res)
        navigation.navigate("Home");
    })
    .catch((error) => {
        console.log("error",error)
        Alert.alert(error.message);
    })
    
}


    return(
        <View style={styles.container}>
             <Text style={styles.title}>Login SCREEN</Text>

             <TextInput style={styles.inputtext} 
             placeholder="Email"
             keyboardType='email-address'
              value={email}
              onChangeText={setEmail}
              secureTextEntry={true}/>
             <TextInput style={styles.inputtext}
              placeholder="Password" 
              value={password} 
              onChangeText={setPassword}/>
             <View style={{flex:1,flexDirection:'column' }}>
                <Button style={styles.button } title="Signup"  onPress={signup}  />
                <Button style={styles.button } title="Login" onPress={login}/>
             </View>
        </View>
    
    );
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    title:{
        fontSize:21,
        marginBottom:20,
        color:'black'
    },
    inputtext:{
        width:300,
        borderRadius:6,
        borderWidth:2,
        borderColor:'#2577b1',
        marginVertical:10,
        padding:15
    },
    button:{
        width:15,
        marginTop:30,    
        
    }
})
export default Login;