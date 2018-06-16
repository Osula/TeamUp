import React from 'react';
import { StyleSheet, video,ListView, Dimensions, ScrollView,FlatList, Platform, fontWeight, Image, backgroundColor, Text, fontFamily, fontSize, View, Button, TouchableHighlight, TextInput, TouchableOpacity, Alert,} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import { NavigatorIOS, WebView,} from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import {EvilIcons} from '@expo/vector-icons/EvilIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import {StackNavigator} from 'react-navigation';
import FriendProfile from './FriendProfile';
import singlechat from './singlechat';
import { SearchBar } from 'react-native-elements';
import Swipeout from 'react-native-swipeout';
import SearchInput from './searchInput';
import { CheckBox } from 'react-native-elements';


const {width, height} = Dimensions.get('window');

export default class page2 extends React.Component {
    static navigationOptions = {
        title: 'Create new chat',
      };
    constructor() {

        super();

        this.state = {
            allowVerticalScroll: true,
            
            contacts : [
                {
                    user: "Lorem Ipsum",
                    checked: false,
                    bio:"Dev in the making",
                    userName:'Ipsum163',
                    image:"data:image/jpeg;base64,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",
                },
                {
                    user: "John Smith",
                    checked: false,
                    bio:"Tech enthousiast",
                    userName:'JohnSmith23',
                    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScHPgSaJ-u3FY8kdNZZ07m9uo9fPcr6zDe4sMN1ggqUejCGs_A",
                },
                {
                    user: "Morty Smith",
                    checked: false,
                    userName:'Morty10',
                    bio:"My granpa is a f**king genius!",
                    image:"https://vignette.wikia.nocookie.net/villains/images/0/0f/Evilmorty.png/revision/latest?cb=20141118064138",
                },
                {
                    user: "Rick Sanchez",
                    checked: false,
                    userName:'PickleeeeRick',
                    bio:"We're going on an adventure!",
                    image:"https://t2.genius.com/unsafe/300x300/https%3A%2F%2Fimages.genius.com%2F2d39515c9311de7bb2a4154adb1f68e6.400x400x1.jpg",
                },
            ],

        };


    }


hideShowCheck(element){
    this.setState({checked: true})
    for (var i=0; i<this.state.contacts.length; i++){
        if (this.state.contacts[i].userName==element.userName){
            this.state.contacts[i].checked = !this.state.contacts[i].checked
        }
    }
}

renderNextButton(){
    return(
        <View style={{height:40, flex:1, alignItems:'flex-end', padding:10, borderBottomWidth:1, borderColor:'#F2F4F4'}}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('createChat')}>
                <Text style={{fontSize:18,fontWeight:'bold', color:'#2471A3'}}>Next</Text>
            </TouchableOpacity>
        </View>
    )
}

    renderChat(element, i) {
        return (
            <View key={i}>
    
                <View  style={styles.headerContainer}>
                    <CheckBox
                        center
                        checkedIcon='dot-circle-o'
                        uncheckedIcon='circle-o'
                        containerStyle={{width:50, marginTop:15, backgroundColor:'transparent', borderColor:'transparent'}}
                        onIconPress={() => this.hideShowCheck(element)}
                        checked={element.checked}
                        checkedColor={'tomato'}
                    />
                    <View style={styles.profilePic}>
                        <Image style={styles.roundPic} source={{uri:element.image}}></Image>
                    </View>

                    <View style={styles.profileTime}>
                        <View>
                            <View style={styles.profileText}>
                                <View style={{flexDirection:'row'}}>
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('FriendProfile')}>
                                        <View>
                                            <Text style={styles.users}>{element.user}</Text>
                                        </View>
                                    </TouchableOpacity>
                                    <Text style={{fontSize:13, color:'grey', marginTop:4, marginLeft:5}}>({element.userName})</Text>
                                </View>
                            </View>
                            <View>
                                <View style={styles.messages}>
                                    <Text style={styles.messageStyle}>{element.bio}</Text>
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
        
    <ScrollView style={{backgroundColor:'white'}}scrollEnabled={this.state.allowVerticalScroll}>
        
        <SearchInput items={this.state.contacts}/>
        {this.state.checked? this.renderNextButton() : null}
        {this.renderChats(this.state.contacts)}

    </ScrollView>
            );
        }
    }

    const styles = StyleSheet.create({

headerContainer:{    
    flexDirection: 'row',
    backgroundColor:'white',
    borderBottomWidth:1,
    borderLeftWidth:5,
    borderColor:'#F2F3F4',
    flex:1,
    },
    
newHeaderContainer:{    
    flexDirection: 'row',
    backgroundColor:'white',
    borderBottomWidth:1,
    borderColor:'#F2F3F4',
    flex:1,
    },


addChat:{   
    backgroundColor:'transparent',
    marginBottom:10,
    marginRight:10,
    marginTop:10,
    flexDirection:'row',
    justifyContent:'flex-end',
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