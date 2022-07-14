import * as React from 'react';
import { Image,Text, View, StyleSheet} from 'react-native';
import styles from "./style";


export default function ChatRoomItem({chatRoom }){
    const user = chatRoom.users[1]
    return (
        <View>
            <View style={styles.container}>
                <Image source={{  uri:  user.imageUri}} style={styles.image} />
                {/* /*si chatRoom.newMessages n'a pas de nouveau message, cette vu est nulle *  */}
                {chatRoom.newMessages ? <View style={styles.badgeContainer} >
                    <Text style={styles.badgeText}>{chatRoom.newMessages}</Text>
                </View> : null}

               <View style={styles.rightContainer}>
                    <View style={styles.row}>
                        <Text style={styles.name}>{user.name}</Text>
                        <Text style={styles.text}>{chatRoom.lastMessage.createdAt}</Text>
                    </View>
                    <Text numberOfLines={1} style={styles.text}>{chatRoom.lastMessage.content}</Text>
                
                </View>
            </View>                                           
        </View>
     
    );
}
