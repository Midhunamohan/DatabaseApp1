import React from "react";
import { View,Text,Button,TouchableHighlight } from "react-native"

function Home({navigation}){
    return(
        <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'#F0F3F4'}}>
            <Text style={{fontSize:25,marginBottom:40,color:'black',fontWeight:'800'}}>DATABASE</Text>

            <TouchableHighlight style={{borderWidth:1,borderColor:'#154360',width:150,height:30,borderRadius:4,alignSelf:'center',backgroundColor:'#154360'}} onPress={() => navigation.navigate('Additem')} >
                <Text style={{fontSize:17,textAlign:'center',color:'white'}}>Add Item</Text>
            </TouchableHighlight>
             
             <TouchableHighlight style={{borderWidth:1,borderColor:'#154360',width:150,height:30,borderRadius:4,alignSelf:'center',marginTop:15,backgroundColor:'#154360'}}  onPress={() => navigation.navigate('List')} >
                <Text style={{fontSize:17,textAlign:'center',color:'white'}}>List of Items</Text>
             </TouchableHighlight>
          

            
        </View>
    )

}
export default Home;

