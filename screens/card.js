import React from 'react';
import { StyleSheet, video,ListView, Dimensions, ScrollView,FlatList, Platform, fontWeight, Image, backgroundColor, Text, fontFamily, fontSize, View, Button, TouchableHighlight, TextInput, TouchableOpacity, Alert,} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import { NavigatorIOS, WebView,} from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import {StackNavigator} from 'react-navigation';
import FriendProfile from './FriendProfile';
  

const {width, height} = Dimensions.get('window');

export default class page2 extends React.Component {
    static navigationOptions = {
        title: 'Home',
      };
    constructor() {

        super();

        this.state = {
            cards : [
                {
                    tag:"@John",
                    description: "Uploaded a file to project 'Biology' ",
                    date:"Updated: 30 March at 19.33",
                    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnwF8rzUnQyLGUgRmeUExUkD_pEaunReBXBilBa6EBbSkogQNY-w",
                },
                {
                    tag:"@Lorem",
                    description: "Uploaded a file to project 'History' ",
                    date:"Updated: 30 March at 19.33",
                    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScHPgSaJ-u3FY8kdNZZ07m9uo9fPcr6zDe4sMN1ggqUejCGs_A",
                },
                {
                    tag:"@Sarah",
                    description: "Closed task #3 to project 'History",
                    date:"Updated: 30 March at 19.33",
                    image:"data:image/jpeg;base64,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",
                },
                {
                    tag:"@Ipsum",
                    description: "Added a task to project 'Biology' ",
                    date:"Updated: 30 March at 20.03",
                    image:"data:image/jpeg;base64,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",
                    },
                ]

            };  
         }


    //foo
    renderCard(element, i) {
        return (
            <View key={i}>
                <View style={styles.headerContainer}>
                    <View style={styles.profilePic}>
                        <View>
                            <Image style={styles.roundPic} source={{uri:element.image}}></Image>
                        </View>

                    </View>

                    <View style={styles.profileTime}>
                    <View>
                            <View style={styles.profileText}>
                                <View >
                                    <Text style={styles.taskTheme}>{element.description}</Text>
                                </View>
                                <View style={styles.tagView}>
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('FriendProfile', {user: 123})}>
                                        <Text style={styles.tag1}> {element.tag}</Text>
                                    </TouchableOpacity>
                                </View>

                            </View>
                            <View>
                                <View >
                                    <Text style={styles.hourStyle}>{element.date}</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </View>)
            
    }

    renderCards(data) {
        return data.map((element, i) => {
            console.log(element, i);
            return this.renderCard(element, i);
        })
    }

    render() {
        return (

    <ScrollView>

        {this.renderCards(this.state.cards)}
        {this.renderCards(this.state.cards)}

    </ScrollView>
            );
        }
    }

    const styles = StyleSheet.create({

        headerContainer:{    
            flexDirection: 'row',
            backgroundColor:'#F8F9F9',
            borderBottomWidth:1,
            borderColor:'#F8F9F9',
            marginLeft:10,
            marginRight:10,
            marginTop:10,
           
            },

    
        profilePic:{
            width:70,
            height:70,
            flexDirection:'row',
            backgroundColor:'transparent',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.8,
            shadowRadius: 2,
            elevation: 1,
        },
        profileTime:{
            flexDirection:'row',
            marginTop:20,
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
            justifyContent: 'flex-end',
            marginTop:10,
        },
        
        
        taskTheme:{
            fontSize:12,
            fontWeight:'bold',
            color:'black',
        },
        hourStyle:{
            fontSize:10,
            color:'#B2BABB',
        },
        tagView:{
            marginLeft:10,
            justifyContent:'flex-end',
        },
        tag1:{
            fontSize:12,
            fontWeight:'bold',
            color:'tomato',
        },
        
        
        });