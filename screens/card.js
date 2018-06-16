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
                    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScHPgSaJ-u3FY8kdNZZ07m9uo9fPcr6zDe4sMN1ggqUejCGs_A'},
                {
                    tag:"@Ipsum",
                    description: "Added a task to project 'Biology' ",
                    date:"Updated: 30 March at 20.03",
                    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScHPgSaJ-u3FY8kdNZZ07m9uo9fPcr6zDe4sMN1ggqUejCGs_A'},
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