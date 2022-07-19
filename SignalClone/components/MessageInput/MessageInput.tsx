import React, { useState} from 'react';
import { Text, View, StyleSheet, TextInput, Pressable} from 'react-native'
import { FontAwesome5,
    Feather, 
    MaterialCommunityIcons,
    AntDesign, 
    Ionicons } from '@expo/vector-icons';  

const MessageInput = () => {

const [message, setMessage] = useState ('');

const sendMessage = () => {
    //send message
    setMessage('');
}

const onPlusClicked = () => {

}
  
const onPress = () => {
    if (message){
        sendMessage();
    }else{
        onPlusClicked();
    }

}

return(
    <View style={styles.root}>
        <View style={styles.inputContainer}>
        <FontAwesome5 name="smile" size={24} color="#595959"  style={styles.icon}/>
            <TextInput 
            style={styles.input}
            value={message}
            onChangeText={setMessage}
            placeholder="écris..."
            />
            <Feather name="camera" size={24} color="#595959"  style={styles.icon}/>
            <MaterialCommunityIcons name="microphone-outline" size={24} color="#595959" style={styles.icon} />
        </View> 
        <Pressable onPress={onPress} style={styles.buttonContainer}>
        {message ? <Ionicons name="ios-send" size={18} color="white" />:<AntDesign name="plus" size={24} color="white" />}
        </Pressable>
    </View>
)

}

const styles = StyleSheet.create({
    root: {
        flexDirection: 'row',
        padding: 10,

    },
    inputContainer: {
        backgroundColor: '#f2f2f2',   
        flex: 1,    
        marginRight: 10,  
        borderRaduis: 25,
        borderWidth: 1,
        borderColor: '#dedede',
        alignItems: 'center',
        flexDirection: 'row',    
        padding: 5,                                                                                                                                                                
    },
    input: {
        flex: 1,
        marginHorizontal: 5,
    },
    icon: {
        marginHorizontal: 5,
    },
    buttonContainer: {
         width: 40,
         height: 40,
         backgroundColor: '#3777f0',
         borderRadius: 25,
         justifyContent: 'center',
         alignItems: 'center'

    },
    buttonText: {
        color: 'white',
        fontSize: 35,
    }
    
})

export default MessageInput