import React from 'react';
import { StyleSheet, video,ListView, Dimensions, ScrollView,FlatList, Platform, fontWeight, Image, backgroundColor, Text, fontFamily, fontSize, View, Button, TouchableHighlight, TextInput, TouchableOpacity, Alert,} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import { NavigatorIOS, WebView,} from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import {StackNavigator} from 'react-navigation';
import FriendProfile from './FriendProfile';
import singlechat from './singlechat';
import { SearchBar } from 'react-native-elements';


const {width, height} = Dimensions.get('window');

export default class page2 extends React.Component {
    static navigationOptions = {
        title: 'Chats',
      };
    constructor() {

        super();

        this.state = {
            chats : [
                {
                    user: "Biology",
                    newMessageIcon: <Entypo name={'dot-single'} size={20} color={'blue'}/>,
                    time:"20.35PM",
                    message:"I need some help",
                    image:"http://www.sagennext.com/wp-content/uploads/2013/01/DNA-Strand.jpg",
                },
                {
                    user: "History",
                    time:"20.32PM",
                    newMessageIcon: <Entypo name={'dot-single'} size={20} color={'blue'}/>,
                    message:"So, for the intro?",
                    image:"http://www.bbc.co.uk/staticarchive/75b9ec754e7b67c77e43ed6284fd9a2443dbf8eb.jpg",
                },
                {
                    user: "Art",
                    time:"19.09PM",
                    newMessageIcon: '',
                    message:"I uploaded a file",
                    image:"http://massmoca.org/wp-content/uploads/2018/01/1920x1920.jpg",
                },
                {
                    user: "Theatre",
                    time:"17.42PM",
                    newMessageIcon: '',
                    message:"I'll take care of the images",
                    image:"http://www.damnmagazine.net/wp-content/uploads/2017/08/Unknown-6.jpeg",
                    
                },
            ]

        };


    }


    renderChat(element, i) {
        return (
            <View key={i}>
                <View  style={[styles.newHeaderContainer , element.newMessageIcon == '' ? styles.headerContainer:{}]}>
                    <View style={styles.profilePic}>
                        <View>
                            <Image style={styles.roundPic} source={{uri:element.image}}></Image>
                        </View>
                    </View>

                    <View style={styles.profileTime}>
                        <View>
                            <View style={styles.profileText}>
                                <View style={{flexDirection:'row'}}>
                                    <View>{element.newMessageIcon}</View>
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('singlechat')}>
                                        <View>
                                            <Text style={styles.users}>{element.user}</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>

                                <View style={styles.timeView}>
                                    <Text style={styles.timeStyle}> {element.time}</Text>
                                </View>

                            </View>
                            <View>
                                <View style={styles.messages}>
                                    <Text style={styles.messageStyle}>{element.message}</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        )
            
    }

    renderChats(data) {
        return data.map((element, i) => {
            console.log(element, i);
            return this.renderChat(element, i);
        })
    }

    render() {
        return (

    <ScrollView>
        
            <View style={styles.addChat}>
                <TouchableOpacity>
                    <Entypo   name={"circle-with-plus"} size={30} color={"grey"}/>
                </TouchableOpacity>
            </View>

        <SearchBar
            lightTheme
            keyboardAppearance={true}
            clearTextOnFocus={true}
            placeholder='Search...' />

        {this.renderChats(this.state.chats)}

    </ScrollView>
            );
        }
    }

    const styles = StyleSheet.create({

headerContainer:{    
    flexDirection: 'row',
    backgroundColor:'#F8F9F9',
    borderBottomWidth:1,
    borderRadius:10,
    borderColor:'#F8F9F9',
    marginLeft:10,
    marginRight:10,
    marginTop:10,
    flex:1,
    },
    
newHeaderContainer:{    
        flexDirection: 'row',
        backgroundColor:'#F8F9F9',
        borderLeftWidth:3,
        borderRadius:10,
        borderColor:'blue',
        marginLeft:10,
        marginRight:10,
        marginTop:10,
        flex:1,
        },


addChat:{   
    backgroundColor:'transparent',
    borderBottomWidth:1,
    borderColor:'#F8F9F9',
    marginLeft:10,
    marginRight:10,
    marginTop:10,
    alignItems: 'center',
},
    
profilePic:{
    width:80,
    height:80,
    flexDirection:'row',
    backgroundColor:'transparent',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    },

profileTime:{
    flexDirection:'column',
    marginTop:20,
    flex:1,
},

roundPic:{
    width:50,
    height:50,
    borderRadius:25,
    position:'absolute',
    marginLeft:10,
    marginTop:10,
},

profileText:{
    flexDirection: 'row',
    justifyContent: 'space-between',
},

users:{
    fontSize:18,
    fontWeight:'bold',
    color:'black',
},
messageStyle:{
    fontSize:12,
    color:'#566573',
},
timeView:{
    marginRight:10,

},

messages:{
    marginTop:5,
},


timeStyle:{
    color:'#566573',
    fontSize:14,
},

});