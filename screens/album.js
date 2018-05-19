import React from 'react';
import { StyleSheet, video,ListView, ScrollView,FlatList, Platform, fontWeight, Image, backgroundColor, Text, fontFamily, fontSize, View, Button, TouchableHighlight, TextInput, TouchableOpacity, Alert,} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import { NavigatorIOS, WebView,} from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import { StackNavigator } from 'react-navigation'; // Version can be specified in package.json
import EvilIcons from '@expo/vector-icons/EvilIcons';
import FriendProfile from './FriendProfile';
import singlechat from './singlechat';
import {RkButton} from 'react-native-ui-kitten';



export default class page2 extends React.Component {
    static navigationOptions = {
        title: 'My profile',
      };
    render() {
        return (

    <ScrollView >
               <View> 
                    <Image style={styles.headerContainer} source={{uri:'https://media-cdn.tripadvisor.com/media/photo-s/0f/c6/81/d3/beach.jpg'}}>
                    </Image>
                </View>

             <View style={styles.userName}>
                <Image style={styles.profilepic} 
                    source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnwF8rzUnQyLGUgRmeUExUkD_pEaunReBXBilBa6EBbSkogQNY-w'}}>
                </Image>
                <View style={styles.UserNameView}>
                    <Text style={styles.userNameTextStyle1}>Jane Smith</Text>
                    <Text style={styles.userNameTextStyle2}>@Jane11</Text>
                </View>
             </View>

        <View style={styles.bigTextbox}>
            <Text>The element is special relative to layout: everything inside is no longer using the flexbox layout but using text layout. This means that elements inside of are no longer rectangles, but wrap when they see the end of the line.

            </Text>
        </View>

        <View style={styles.miniMenuView}>
            <TouchableOpacity style={styles.miniMenuSingle} onPress={() => this.props.navigation.navigate('mytasks')}>
                <Text style={styles.taskText}>My tasks</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.miniMenuSingle} onPress={() => this.props.navigation.navigate('questions')}>
                <Text style={styles.taskText}>Questions</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.miniMenuSingle} onPress={() => this.props.navigation.navigate('chats')}>
                <Text style={styles.taskText}>Chats</Text>

            </TouchableOpacity>
            <TouchableOpacity style={styles.miniMenuSingle} onPress={() => this.props.navigation.navigate('contacts')}>
                <Text style={styles.taskText}>My contacts</Text>

            </TouchableOpacity>

        </View>
 
    </ScrollView>

        );
    }
}


const styles = StyleSheet.create({

screenContainer:{
 flex: 1, 
 alignItems: 'center', 
 justifyContent: 'center',
},

headerContainer:{    
    height:100,
    borderBottomWidth:1,
    borderColor:'#F8F9F9',
    flex: 1, 
    },

historyContainer:{
    
    backgroundColor:'#F2F4F4',
},

historyContainerBorder:{
    
    backgroundColor:'#F2F4F4',
    borderLeftWidth:1,
    borderColor:'#D7DBDD',
    marginLeft:20,

},

historyTitle:{
    color:'#BDC3C7',
    fontSize:18,
    marginLeft:20,
    marginTop:10,
    
},
historyText:{
    color:'#BDC3C7',
    fontSize:13,
    marginLeft:20,
    marginTop:10,
    fontWeight:'300',
    
},

profilepic:{
    width:90,
    height:90,
    marginTop:-15,
    marginRight:5,
    borderRadius:40,
    borderColor:'white',
    borderWidth:3,
},

Textbox:{
    paddingTop:8,
},


TaskTag:{
    fontSize:20,
    fontWeight:'bold',
    color:'pink',
},
    
bigTextbox:{

     padding:20,
     borderBottomWidth:1,
    borderColor:'#F8F9F9',
     height:140,
    },

miniMenuView:{
    flexDirection:'column',


},
miniMenuSingle:{
    flexDirection:'row',
    justifyContent: 'space-between',
    backgroundColor:'#212F3D',
    height:60,
    borderBottomWidth:1,
    borderColor:'#34495E',
    paddingTop:20,
    paddingLeft:20,
    paddingRight:20,
    
},
taskText:{
    fontSize:20,
    color:'white',
    fontWeight:'bold',
},

UploadView:{
    flexDirection:'row',
    justifyContent:'flex-end',
    borderColor:'#E5E7E9',
    padding:5,
    marginLeft:20,
   
},

UploadIcons:{
    marginLeft:10,
},

userName:{
    flex: 1, 
    flexDirection: 'row',
    marginTop:10,
    marginLeft:70,
    padding:5,
    marginTop:-40,
},

UserNameView:{

   marginTop:8,
},

userNameTextStyle1:{
    fontSize:22,
    fontWeight:'bold',
    color:'black',
},
userNameTextStyle2:{
    fontSize:18,
    fontWeight:'bold',
    color:'tomato',
},

textStyle:{
    fontSize:15,
    fontWeight:'bold',
    color:'black',
  },
});