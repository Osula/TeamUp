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
import {RkAvoidKeyboard, RkButton, RkTextInput} from 'react-native-ui-kitten';
  

const {width, height} = Dimensions.get('window');

export default class page2 extends React.Component {
    static navigationOptions = {
        headerTitle:(
            <View style={{flex:1, height:70, flexDirection:'row'}}>
            <View style={{flexDirection:'column',marginTop:18, marginLeft:90, alignItems:'center'}}>
                <Text style={{color:'black', fontSize:18,fontWeight:'bold'}}>Biology </Text>
                <Text style={{color:'grey', fontSize:14,}}>3 users </Text>
            </View>
                <Image
                    source={require('./img3.jpg')}
                    style={{width:40, height:40, borderRadius:20, marginTop:13, marginLeft:90}}
                />
            </View>)
            };

    constructor() {

        super();

        this.state = {

            hasFocus: false,
            ref:'scrollView',
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


     setFocus (hasFocus) {
        this.setState({hasFocus});
        
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
            <View key={i} style={{backgroundColor:'white',}}>
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
            <View style={{flex:1, backgroundColor:'white'}}>
                <ScrollView ref="scrollView" onContentSizeChange={(width,height) => this.refs.scrollView.scrollToEnd()} 
                    style={this.state.hasFocus? style={marginBottom:240} : style={marginBottom:20}}>
                    {this.renderCards(this.state.cards)}
                </ScrollView>
                <RkAvoidKeyboard>
                    <RkTextInput
                        value={this.state.message}
                        multiline = {true}
                        placeholder={'Write a message'}
                        onFocus={this.setFocus.bind(this, true)}
                        onBlur={this.setFocus.bind(this, false)}
                            inputStyle={{
                                position:'absolute', marginTop:420,
                                backgroundColor: 'white',
                                height:50,
                                width:350,
                                color: 'black',
                                borderColor:'#E5E7E9',
                                borderRadius:10,
                                borderWidth:1,
                                paddingLeft:10,
                                paddingTop:15,
                        }}
                        onChangeText={text => this.setState({message: text})}   
                    />
                    <RkButton
                        disabled={this.state.message==''}
                        style={{backgroundColor: 'white',topBorderWidth:1, borderColor:'#E5E7E9', width:350, marginTop:16, marginLeft:15}}
                        onPress={this.sendMessage.bind(this)}
                        contentStyle={this.state.message==''? style={color: 'grey', fontSize:20}: style={color: 'tomato', fontSize:20}}>Send</RkButton>
                </RkAvoidKeyboard>      
            </View>   
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
    marginBottom:10,

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
    marginBottom:10,

},
dateView:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginRight:5, marginBottom:5,
},

sendButton:{
    color:'#005b71',
    fontSize:17,
    height:30,
    width:30,
},

sendDisabled:{
    color:'grey',
    fontSize:17,
    height:30,
    width:30,

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