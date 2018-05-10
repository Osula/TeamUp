import React from 'react';
import { StyleSheet, video,ListView, ScrollView,FlatList, Platform, fontWeight, Image, backgroundColor, Text, fontFamily, fontSize, View, Button, TouchableHighlight, TextInput, TouchableOpacity, Alert,} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import { NavigatorIOS, WebView,} from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import { StackNavigator } from 'react-navigation'; // Version can be specified in package.json
import EvilIcons from '@expo/vector-icons/EvilIcons';




export default class page2 extends React.Component {
    person = {
        firstName: "Lorem",
        lastName : "Ipsum",
        id       : 5566,
        fullName : function() {
           return this.firstName + " " + this.lastName + "'s" + " " + "profile";
        }
    };

    static navigationOptions = {
        title: 'Profile',
      };
    constructor() {

        super();

        page2.navigationOptions.title = this.person.fullName();

        this.state = {
            cards: ['tag1', 'tag2']
        }
    }
    render() {
        return (

    <ScrollView >
            <View> 
                <Image style={styles.headerContainer} source={{uri:'https://media-cdn.tripadvisor.com/media/photo-s/0f/c6/81/d3/beach.jpg'}}>
                </Image>
            </View>
            <View style={styles.userName}>
                <Image style={styles.profilepic} 
                    source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnwF8rzUnQyLGUgRmeUExUkD_pEaunReBXBilBa6EBbSkogQNY-w'}}
                    />
                <View style={styles.UserNameView}>
                    <Text style={styles.userNameTextStyle1}>{this.person.firstName + ' '+ this.person.lastName}</Text>
                    <Text style={styles.userNameTextStyle2}>@Lorem</Text>
                </View>
             </View>

        <View style={styles.bigTextbox}>
            <Text>The element is special relative to layout: everything inside is no longer using the flexbox layout but using text layout. This means that elements inside of are no longer rectangles, but wrap when they see the end of the line.

            </Text>
        </View>

               <View style={styles.miniMenuView}>
            <TouchableOpacity style={styles.miniMenuSingle}>
                <Text style={styles.taskText}>Ask a question</Text>
                <TouchableOpacity>
                    <Ionicons  style={styles.forwardIcon} name={"ios-arrow-forward"} size={25} color={"white"}/>
                </TouchableOpacity>
            </TouchableOpacity>
            <TouchableOpacity style={styles.miniMenuSingle}>
                <Text style={styles.taskText}>Add to a projects</Text>
                <TouchableOpacity>
                    <Ionicons  style={styles.forwardIcon} name={"ios-arrow-forward"} size={25} color={"white"}/>
                </TouchableOpacity>
            </TouchableOpacity>

        </View>

    
    
    <View>
        <View style={styles.QuickViewContainer}>
            <Text style={styles.QuickViewText}>Public shares</Text>
        </View>
        <ScrollView horizontal={true} style={styles.QuickViewContainer}>
        

            <View style={styles.imageViewContainer}>

                    <View >
                        <Image style={styles.imageStyle} source={{uri: 'http://www.spoleto7giorni.it/wp-content/uploads/2017/12/shopping-spoleto.jpg'}}></Image>
                    </View>
                    <View >
                        <Image style={styles.imageStyle} source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRBeBZe06UHmZ5381MpAWPDcFXms7dyA04KTevlNvIhCXxV3zV'}}></Image>
                  
                    </View>
                    <View >
                        <Image style={styles.imageStyle} source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRBeBZe06UHmZ5381MpAWPDcFXms7dyA04KTevlNvIhCXxV3zV'}}></Image>
                  
                    </View>
                    <View >
                        <Image style={styles.imageStyle} source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRBeBZe06UHmZ5381MpAWPDcFXms7dyA04KTevlNvIhCXxV3zV'}}></Image>
                  
                    </View>

                    
            </View>


        </ScrollView>
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
       
QuickViewContainer:{       
    backgroundColor:'#F2F4F4',
    paddingBottom:10,   
},
       
QuickViewText:{
    color:'#BDC3C7',
    fontSize:15,
    marginLeft:20,
    marginTop:10,      
},
       
imageViewContainer:{
    flexDirection:'row',
},

imageStyle:{     
    width: 130, 
    height: 200,
    borderRadius:15,
    marginLeft:20,
     marginTop:10,
           
},
       
menuThumbNail:{
    width: 30, 
    height: 30,
    borderRadius:5,
    marginRight:10,
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

menuThumbNailContainer:{
    flexDirection:'row',
    justifyContent: 'space-between',
     height:50,
    borderBottomWidth:1,
    borderColor:'#E5E7E9',
    paddingTop:10,
    marginRight:20,                   
},

Textbox:{
    paddingTop:8,
},
       
addButton:{
    justifyContent:'flex-end',
    flex: 1, 
    flexDirection: 'row',
    marginTop:5,
},
           
addButtonStyle:{         
    right: 5,
    fontSize:15,
    marginRight:10,
    color:'blue',
    fontWeight: 'bold'
},
           
           
TaskTag:{
    fontSize:15,
    fontWeight:'bold',
    color:'tomato',
},
           
bigTextbox:{
    padding:20,
    borderBottomWidth:1,
    borderColor:'#F8F9F9',
},
       
miniMenuView:{
    flexDirection:'column',
    },

miniMenuSingle:{
    flexDirection:'row',
    justifyContent: 'space-between',
    backgroundColor:'#212F3C',
    height:60,
    borderBottomWidth:1,
    borderColor:'#E5E7E9',
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
    color:'pink',
},
       
textStyle:{
    fontSize:15,
    fontWeight:'bold',
    color:'black',
},
       });