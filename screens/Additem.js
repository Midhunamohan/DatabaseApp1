import React, { useState } from "react";
import { View,Text, TextInput, TouchableHighlight,StyleSheet } from "react-native"
import database from '@react-native-firebase/database'
import { Alert } from 'react-native';


const additem = item =>{
    database().ref('/Items').push({
        name:item
    })
}
function Additem(){
    const [name ,setName] =useState('');

    const handlesubmit=() => {
        additem(name);
        setName('');
        Alert.alert('item saved success fully');
    }
    return(
        <View style={styles.main}>
            <Text style={styles.title}>Additem</Text>
            <TextInput onChangeText={text => setName(text)} value={name} style={styles.iteminput}/>

            <TouchableHighlight onPress={handlesubmit} style={styles.button} >
                <Text style={{fontSize:18,color:'black',fontWeight:'bold',alignSelf:'center'}}>Add</Text>
            </TouchableHighlight>
        </View>
    )

}
const styles =StyleSheet.create({
main:{
    flex:1,
    padding:30,
    flexDirection:'column',
    justifyContent:'center',
    backgroundColor:'#d3e4ef'
},
title:{
    marginBottom:30,
    alignSelf:'center',
    fontSize:25,
    color:'black'

},
iteminput:{
    height:50,
    padding:4,
    marginRight:5,
    fontSize:20,
    borderWidth:1,
    borderColor:'#2577b1',
    borderRadius:8,
},
button:{
    height:45,
    flexDirection:'row',
    backgroundColor:'#2577b1',
    borderColor:'white',
    borderWidth:1,
    borderRadius:8,
    marginTop:10,
    marginBottom:10,
    alignSelf:'stretch',
    justifyContent:'center'
}

})
export default Additem;