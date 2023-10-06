import React,{useState,useEffect} from "react";
import { View,Text,StyleSheet,Button,TextInput } from "react-native"
import database from '@react-native-firebase/database'

let itemRef = database().ref('/Items');

function List(){

    const [itemArray, setItemArray] = useState([]);
    const [keys, setKeys] = useState([]);
    const [ifUpdate , setIfUpdate] = useState(false);
    const [updateText , setUpdateText] = useState('');
    const [updateIndex , setUpdateIndex] = useState(null);

    useEffect(() =>{
        itemRef.on('value', snapshot => {
            let data= snapshot.val();
            console.log(data)
            const items =Object.values(data);
            setKeys(Object.keys(data))
            console.log(keys)
            setItemArray(items);
        })

    },[])
      

    const handleDelete =(index) => {
        let childkey = keys[index];

        itemRef.child(childkey).remove();
    }

    const handleUpdate =(name, index) => {
        setUpdateText(name)
        setIfUpdate(true)
    }

    const submitUpdate =() => {
        let childkey = keys[updateIndex];
        itemRef.child(childkey).update({
            name:updateText
        })
        setIfUpdate(false)

    }


    return(
        <View style={styles.container}>

             <Text style={{fontSize:30,fontWeight:'bold',alignSelf:'center'}}>List items</Text>

            {(itemArray.length > 0 )

             ?  
              ifUpdate ?
                <View>
                    <TextInput
                    style={styles.input}
                    placeholder="enter new list"
                value={updateText}    
                onChangeText={setUpdateText}      
                />

            <Button style={{marginTop:10}} title="submit" onPress={() => submitUpdate()}/>
            <Button style={{marginTop:10}} title="cancel" onPress={() => setIfUpdate(false)}/>
                    
             </View>

                :     <View style={styles.list}>
                {
                   itemArray.map((item, index)=>{
                     return(
                         <View style={styles.item}>
                              <Text style={styles.itemtext}>{item.name}</Text>
                              <Button style={styles.button} title="Update" onPress={() => handleUpdate(item.name , index)}/>
                              <Button style={styles.button} title="Delete" onPress={() => handleDelete(index)}/>
                         </View>
     
                           )
                   
                 })
                }
                  </View>
             
             
         
            : <Text>No Item</Text>
            }     
        </View>
        
    )

}

const styles =StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        backgroundColor:'#d3e4ef'
    },
    itemtext:{
        fontSize:20,
        fontWeight:'500',
        textAlign:'center',
        paddingEnd:10
    },
    list:{
        flex:1,
        flexDirection:'column',
        marginBottom:10,
        alignItems:'center'
    },
    item:{
        flexDirection:'row',
        // justifyContent:'space-around',
        marginBottom:10,
        alignItems:'center',
        marginTop:15
    },
   input:{
    borderWidth:2,
    borderColor:'#2577b1',
    margin:20
   },
   button:{
     margin:10,
     backgroundColor:'#145A32',
  
   }
})
export default List;
