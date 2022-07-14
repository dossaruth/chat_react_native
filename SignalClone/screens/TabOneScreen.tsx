import * as React from 'react';
import { StyleSheet, Image,Text, View, FlatList} from 'react-native';
import ChatRoomItem from '../components/ChatRoomitem/ChatRoomitem'
import chatRoomsData from '../assets/dummy-data/ChatRooms';

const chatRooms1 = chatRoomsData[0] ;
const chatRooms2 = chatRoomsData[1];
const chatRooms3 = chatRoomsData[2];


export default function TabOneScreen() { 
  return (
    <View style={styles.page}>
     <FlatList 
     data={chatRoomsData}
     renderItem={({ item }) => <ChatRoomItem chatRoom={item} />}
     showsVerticalScrollIndicator={false}
     ListHeaderComponent={() => <Text> Messages</Text>}
     />
    </View>
   
  );
}

const styles = StyleSheet.create
({
 page: 
  {
    backgroundColor: 'white',
    flex: 1,
  }
});
