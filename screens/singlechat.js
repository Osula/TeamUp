import React from 'react';
import { StyleSheet, video,ListView, KeyboardAvoidingView, Dimensions, Animated, ScrollView,FlatList, Platform, fontWeight, Image, backgroundColor, Text, fontFamily, fontSize, View, Button, TouchableHighlight, TextInput, TouchableOpacity, Alert,} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import { NavigatorIOS, WebView,} from 'react-native';
import { MenuProvider,  Menu, MenuOptions, MenuOption, MenuTrigger,} from 'react-native-popup-menu';
import Entypo from '@expo/vector-icons/Entypo';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import {StackNavigator} from 'react-navigation';
import FriendProfile from './FriendProfile';
import singlechat from './singlechat';
  

const {width, height} = Dimensions.get('window');

export default class page2 extends React.Component {
    static navigationOptions = {
        title: 'Biology Team',
    };

    constructor() {

        super();

        this.state = {
            cards : [
                {
                    tag:"John",
                    description: "On his return to England, Darwin proposed a theory of evolution...",
                    date:"19.33",
                    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnwF8rzUnQyLGUgRmeUExUkD_pEaunReBXBilBa6EBbSkogQNY-w",
                },
                {
                    tag:"Lorem",
                    description: "It is a common misconception that James Watson and Francis Crick discovered DNA?",
                    date:"19.33",
                    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnwF8rzUnQyLGUgRmeUExUkD_pEaunReBXBilBa6EBbSkogQNY-w",
                },
                {
                    tag:"Me",
                    description: "The book was extremely controversial, as it challenged the dominant view of the period...",
                    date:this.myTime(),
                    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScHPgSaJ-u3FY8kdNZZ07m9uo9fPcr6zDe4sMN1ggqUejCGs_A",
                },

                ],
                
                message: '',

            };  
     }

     async sendMessage() {


        // new message object
        var newMessageCard = {
            tag: 'Me',
            description: this.state.message,
            date: this.myTime(),
        };



        //let's clone the messages array into a new variable
        var newMessagesArray = this.state.cards;

        //let's add the new message object to the newMessagesArray variable
        newMessagesArray.push(newMessageCard);

        //let's update the old messages array in 'this.state' with the new array i.e. newMessagesArray
        this.setState({
            cards: newMessagesArray
        });

        // let's reset the message value
        this.setState({
          message: ''
        });

    }
 
    myTime() {
        var d = new Date();
        var hour = d.getHours();
        return hour + ':' + d.getMinutes()
    }


    //foo
    renderCard(element, i) {
        return (
            <View key={i}>
                <Text style={element.tag == 'Me' ? styles.tagMe : styles.tag1}> {element.tag}</Text>
                    <View style={element.tag == 'Me' ? styles.headerContainerRight : styles.headerContainer}>

                        <View style={styles.profileTime}>
                            <View>
                                <View style={styles.profileText}>
                                    <View >
                                        <Text style={styles.taskTheme}>{element.description}</Text>
                                    </View>
                                </View>
                                <View style={styles.dateView}>
                                        <Text style={styles.hourStyle}>{element.tag == 'Me' ? this.myTime() : element.date}</Text>
                                </View>
                            </View>
                        </View>
                    </View>
            </View>
        )
            
    }

    

    renderCards(data) {
        return data.map((element, i) => {
            console.log(element, i);
            return this.renderCard(element, i);
        })
    }


    render() {
        return (
            <MenuProvider>
                <View style={{backgroundColor:'white', flex:1}}>
                <ScrollView >

                    {this.renderCards(this.state.cards)}
                    
                
                </ScrollView>
                <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={90} style={styles.inputArea} >
                    <View style={{flexDirection: 'row', height: 60, backgroundColor:'transparent', flex:1}}>
                        <TouchableOpacity>
                            <Menu style={{marginLeft:20,}} >
                                <MenuTrigger>
                                    <Entypo name={'plus'} size={25} color={'#005b71'} style={{ marginTop:20, marginLeft:-20, marginRight:10, position:'absolute'}}/>
                                </MenuTrigger>
                                <MenuOptions style={{backgroundColor: 'white', alignItems:'center', paddingBottom:5,}}>
                                    <MenuOption style={{marginLeft: 3}} onSelect={() => alert('hi')}> 
                                        <Text style={{color: '#005b71', fontSize:17,}}>Add file</Text> 
                                    </MenuOption>
                                    <MenuOption onSelect={() => alert('hi')}>
                                        <Text style={{color: '#005b71', fontSize:17,}}>Add image</Text>
                                    </MenuOption>
                                </MenuOptions>
                            </Menu>
                        </TouchableOpacity>
                        <TextInput
                            placeholder={' Your message...'}
                            value={this.state.message}
                            fontSize={17}
                            multiline={true}
                            style={{height: 40, width: 260, marginLeft:30, marginTop:15, borderRadius:5, borderBottomWidth:1, borderBottomColor:'#005b71', backgroundColor:'transparent',}}
                            onChangeText={text => this.setState({message: text})}
                        />
                        <TouchableOpacity disabled={this.state.message==''} onPress={this.sendMessage.bind(this)}>
                            <Text style={this.state.message!='' ? styles.sendButton : styles.sendDisabled}>Send</Text>
                        </TouchableOpacity>
                    </View>
                 </KeyboardAvoidingView >
        </View>
    </MenuProvider>
            
            );
        }
    }

    const styles = StyleSheet.create({

headerContainer:{    
    flexDirection: 'row',
    backgroundColor:'#F8F9F9',
    borderBottomWidth:1,
    borderRadius:10,
    paddingLeft:10,
    borderColor:'#F8F9F9',
    marginLeft:10,
    marginRight:50,

},
headerContainerRight:{    
    flexDirection: 'row',
    backgroundColor:'#F8F9F9',
    borderBottomWidth:1,
    borderRadius:10,
    paddingLeft:10,
    borderColor:'#F8F9F9',
    marginLeft:50,
    marginRight:10,

},
dateView:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
},

sendButton:{
    color:'#005b71',
    fontSize:17,
    marginLeft:10,
    marginTop:20,
},

sendDisabled:{
    color:'grey',
    fontSize:17,
    marginLeft:10,
    marginTop:20,
},

dateViewContainer:{
    flexDirection:'row',
    flex: 1,
    justifyContent: 'flex-end'
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
    marginTop:10,
    
},

inputArea:{

    flex:1,
    left: 0,
    right: 0,
    top: 25,
    flexDirection:'row',
    height:60,
    alignItems:'center',
},

profileText:{
    flexDirection: 'row',
    justifyContent:'sapce-between',
    flex:1,
    marginLeft:10,
    marginTop:10,
    backgroundColor:'transparent',
    height:40,
    width:280,

},


taskTheme:{
    fontSize:14,
    color:'black',
},
hourStyle:{
    fontSize:10,
    color:'#B2BABB',
},
tagView:{
    flexDirection:'row',
    flex: 1,
    position:'absolute',
    justifyContent: 'flex-end',
},

tag1:{
    fontSize:12,
    fontWeight:'bold',
    color:'tomato',
    marginTop:10,
    marginLeft:20,
},

tagMe:{
    fontSize:12,
    fontWeight:'bold',
    color:'tomato',
    marginLeft:60,
    marginTop:10,
},


});