import React from 'react';
import { StyleSheet, video,ListView, ScrollView,FlatList, Platform, fontWeight, Image, backgroundColor, Text, fontFamily, fontSize, View, Button, TouchableHighlight, TextInput, TouchableOpacity, Alert,} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { NavigatorIOS, WebView,} from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import { StackNavigator } from 'react-navigation'; // Version can be specified in package.json
import EvilIcons from '@expo/vector-icons/EvilIcons';
import Octicons from '@expo/vector-icons/Octicons';
import FriendProfile from './FriendProfile';
import singlechat from './singlechat';
import {RkButton} from 'react-native-ui-kitten';
import SearchInput from './searchInput';
import ViewMoreText from 'react-native-read-more-text';



export default class page2 extends React.Component {
    static navigationOptions = {
        title: 'My profile',
      };
    render() {
        return (

    <ScrollView style={{backgroundColor:'white'}}>
               <View> 
                    <Image style={styles.headerContainer} source={{uri:'https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=334247d4893b40898bd1f74282aaada9&auto=format&fit=crop&w=750&q=80'}}>
                    </Image>
                </View>

             <View style={styles.userName}>
                <Image style={styles.profilepic} 
                    source={{uri: 'https://mahasiswigoblog.files.wordpress.com/2016/06/jj.jpg?w=282&h=283'}}>
                </Image>
                <View style={styles.UserNameView}>
                    <Text style={styles.userNameTextStyle1}>Jane Smith</Text>
                    <Text style={styles.userNameTextStyle2}>@Jane11</Text>
                </View>
             </View>

        <View style={styles.bigTextbox}>
            <ViewMoreText
                numberOfLines={3}
                onReady={this._handleTextReady}>
                <Text>
                    The element is special relative to layout: everything inside is no longer using the flexbox layout but using text layout. This means that elements inside of are no longer rectangles, but wrap when they see the end of the line.
                </Text>
            </ViewMoreText>
        </View>

        <View style={styles.miniMenuView}>
            <View style={{marginRight:10}}>
                <TouchableOpacity style={styles.miniMenuSingle} onPress={() => this.props.navigation.navigate('mytasks')}>
                    <FontAwesome name={'tasks'} color={'#5D6D7E'} size={50}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.miniMenuSingle} onPress={() => this.props.navigation.navigate('questions')}>
                    <FontAwesome name={'question-circle-o'} size={50} color={'#5D6D7E'}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.miniMenuSingle} onPress={() => this.props.navigation.navigate('chats')}>
                    <Entypo size={50} color={'#5D6D7E'} name={'chat'}/>
                </TouchableOpacity>
            </View>
            <View style={{marginLeft:10}}>
                <TouchableOpacity style={styles.miniMenuSingle} onPress={() => this.props.navigation.navigate('searchInput')}>
                    <FontAwesome name={'search'} size={50} color={'#5D6D7E'}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.miniMenuSingle} onPress={() => this.props.navigation.navigate('contacts')}>
                    <Ionicons name={'ios-contacts'} size={50} color={'#5D6D7E'}/>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.miniMenuSingle} onPress={() => this.props.navigation.navigate('settings')}>
                    <Ionicons name={'md-settings'} color={'#5D6D7E'} size={50}/> 
                </TouchableOpacity>
            </View>

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
    borderColor:'white',
    flex: 1, 
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
    borderBottomWidth:2,
    borderColor:'#EAECEE',
    backgroundColor:'white',
    height:140,
},

miniMenuView:{
    flexDirection:'row',
    paddingLeft:25,
    backgroundColor:'white',
    paddingBottom:20,
},

miniMenuSingle:{
    flexDirection:'column',
    backgroundColor:'white',
    height:120,
    alignItems:'center',
    paddingTop:30,
    borderWidth:1,
    borderColor:'#EAECEE',
    width:150,
    marginTop:10,
    padding:20,
    
},
taskText:{
    fontSize:20,
    color:'white',
    fontWeight:'bold',
    margin:20,
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