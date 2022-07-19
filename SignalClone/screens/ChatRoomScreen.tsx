import React from 'react';
import { Text, View,  StyleSheet, FlatList} from 'react-native';
import {useRoute} from '@react-navigation/core';              
import Message from '../components/Message'
import chatRoomData from '../assets/dummy-data/Chats' ;
import MessageInput from '../components/MessageInput';


export default function ChatRoomScreen() {
    const route = useRoute();

    


return (
    <View style={styles.page}>
       <FlatList
           data={chatRoomData.messages}
           renderItem={({item}) => < Message message={item} />}
       />
       <MessageInput />
    </View>
)
};

const styles = StyleSheet.create({
    page: 
    {
        backgroundColor: 'white',
        flex: 1,
    }
}) 