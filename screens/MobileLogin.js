import React, { useState } from "react";
import auth from '@react-native-firebase/auth'
import VerifyCode from "./VerifyCode";
import MobileNumber from "./MobileNumber";
import { Alert } from "react-native";




export default function MobileLogin({navigation}){
   
    const [confirm , setConfirm] = useState(null);


    const mobileLogin = async(phonenumber) => {
        console.log(phonenumber)
     await auth().signInWithPhoneNumber('+91' + phonenumber).then((res) => {
        console.log("response" , res)
        setConfirm(res);
     })
     .catch((error) => {
        console.log("error" , error)
     });
        
    }



    const confirmVerification = async(code)=> {
        try{
         await confirm.confirm(code);
         setConfirm(null)
        
        }catch(error){
            Alert.alert('invalide code')

        }
    }



    auth().onAuthStateChanged((user) => {
        if(user){
          
          navigation.navigate('Home')
        }else{
            if(confirm){
                Alert.alert("Authentication failed")

            }
           
        }

    })

    if (confirm)
        return <VerifyCode onSubmit={confirmVerification}/>

  
        return <MobileNumber onSubmit={mobileLogin} />
    
    

}